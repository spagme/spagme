const { api } = require('./api.js');
const { diff } = require('deep-object-diff');

const tests = [];

//double
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/double/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 4;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.double(input, 'post');  
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
//double
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/double/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 4;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.double(input, 'get');  
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
//double
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/double/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 4;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.double(input, 'post');  
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
//double
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/double/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 4;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.double(input, 'get');  
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
//double
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/double/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -1.797693E+308;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.double(input, 'post');  
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
//double
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/double/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -1.797693E+308;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.double(input, 'get');  
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
//double
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/double/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 1.797693E+308;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.double(input, 'post');  
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
//double
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/double/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 1.797693E+308;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.double(input, 'get');  
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
//doubleNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/doubleNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 4;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.doubleNullable(input, 'post');  
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
//doubleNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/doubleNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 4;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.doubleNullable(input, 'get');  
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
//doubleNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/doubleNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.doubleNullable(input, 'post');  
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
//doubleNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/doubleNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.doubleNullable(input, 'get');  
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
//doubleNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/doubleNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -1.797693E+308;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.doubleNullable(input, 'post');  
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
//doubleNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/doubleNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -1.797693E+308;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.doubleNullable(input, 'get');  
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
//doubleNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/doubleNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 1.797693E+308;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.doubleNullable(input, 'post');  
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
//doubleNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.doubletest/doubleNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 1.797693E+308;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.doubletest';
        const output = await api.doubleNullable(input, 'get');  
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
