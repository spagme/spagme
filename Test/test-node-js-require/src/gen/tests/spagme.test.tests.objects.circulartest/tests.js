const { api } = require('./api.js');
const { diff } = require('deep-object-diff');

const tests = [];

//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }, }, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circular(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }, }, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circular(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {name: null, child: null, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circular(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {name: null, child: null, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circular(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {name: '', child: {name: '', child: {name: '', child: {name: '', child: {name: '', child: null, }, }, }, }, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circular(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {name: '', child: {name: '', child: {name: '', child: {name: '', child: {name: '', child: null, }, }, }, }, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circular(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }, }, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circular(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }, }, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circular(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArrayOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArrayOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArrayOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArrayOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArrayOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArrayOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArrayOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArrayOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArraysOfLists(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArraysOfLists(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArraysOfLists(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArraysOfLists(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArraysOfLists(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArraysOfLists(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArraysOfLists(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularArraysOfLists(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularListOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularListOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularListOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularListOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularListOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularListOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularListOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.circulartest';
        const output = await api.circularListOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
module.exports = tests;
