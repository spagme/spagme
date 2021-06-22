import tests from './gen/tests/tests.js';
import nodeFetch from 'node-fetch'
import formData from 'form-data'

global.fetch = nodeFetch;
global.FormData = formData;

const promises = tests.map(o => o.execute(o, "http://localhost:5000/api"));

function result() {
    for(let i = 0; i < tests.length; i++) {
        if(tests[i].status=="ERROR") {
            console.log('\x1b[31m%s\x1b[0m', '['+tests[i].status+'] ' + tests[i].name);
            console.group();

            console.log('\x1b[33m%s\x1b[0m', 'input:');
            console.group();
            console.log(tests[i].input);
            console.groupEnd();

            console.log('\x1b[33m%s\x1b[0m', 'output:');
            console.group();                        
            console.log(tests[i].output);
            console.groupEnd();

            console.log('\x1b[33m%s\x1b[0m', 'error:');
            console.group();                        
            console.log(tests[i].error);
            console.groupEnd();

            console.groupEnd();
        }        
    }

    const total = tests.length;
    const failed = tests.filter( (o) => o.status == "ERROR").length;
    const success = total - failed;

    console.log();
    console.log('RESULT');
    console.group();
    if(failed>0) {
        console.log('\x1b[31m%s\x1b[0m', 'failed:  ' + failed);
    }
    console.log('\x1b[32m%s\x1b[0m', 'success: ' + success);
    console.log(                     'total:   ' + total);
    console.groupEnd();

    console.log();    
}

let index = 0;
function run(p) {
    p.then(() => {
        console.log('' + (index+1) + '(' + tests.length + ')');
        index++;        
        if(index < promises.length) {
           run(promises[index]);
        }
        else {
            result();
        }
    });
}

if(tests.length>0) {
    run(promises[index]);
}
