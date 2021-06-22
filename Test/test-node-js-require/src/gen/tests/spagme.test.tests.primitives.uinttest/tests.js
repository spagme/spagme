const { api } = require('./api.js');
const { diff } = require('deep-object-diff');

const tests = [];

//uint
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uint/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 7;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uint(input, 'post');  
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
//uint
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uint/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 7;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uint(input, 'get');  
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
//uint
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uint/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 7;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uint(input, 'post');  
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
//uint
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uint/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 7;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uint(input, 'get');  
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
//uint
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uint/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 0;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uint(input, 'post');  
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
//uint
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uint/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 0;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uint(input, 'get');  
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
//uint
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uint/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 4294967295;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uint(input, 'post');  
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
//uint
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uint/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 4294967295;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uint(input, 'get');  
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
//uintNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uintNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 7;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uintNullable(input, 'post');  
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
//uintNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uintNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 7;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uintNullable(input, 'get');  
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
//uintNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uintNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uintNullable(input, 'post');  
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
//uintNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uintNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uintNullable(input, 'get');  
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
//uintNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uintNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 0;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uintNullable(input, 'post');  
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
//uintNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uintNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 0;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uintNullable(input, 'get');  
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
//uintNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uintNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 4294967295;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uintNullable(input, 'post');  
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
//uintNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.uinttest/uintNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 4294967295;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.uinttest';
        const output = await api.uintNullable(input, 'get');  
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
