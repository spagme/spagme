const { api } = require('./api.js');
const { diff } = require('deep-object-diff');

const tests = [];

//sbyte
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyte/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 2;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyte(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyte
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyte/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 2;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyte(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyte
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyte/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 2;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyte(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyte
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyte/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 2;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyte(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyte
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyte/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -128;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyte(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyte
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyte/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -128;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyte(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyte
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyte/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 127;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyte(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyte
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyte/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 127;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyte(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyteNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyteNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 2;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyteNullable(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyteNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyteNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 2;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyteNullable(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyteNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyteNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyteNullable(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyteNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyteNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyteNullable(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyteNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyteNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -128;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyteNullable(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyteNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyteNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -128;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyteNullable(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyteNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyteNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 127;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyteNullable(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
//sbyteNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.sbytetest/sbyteNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 127;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.sbytetest';
        const output = await api.sbyteNullable(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
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
