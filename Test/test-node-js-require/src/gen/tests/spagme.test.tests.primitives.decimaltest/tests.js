const { api } = require('./api.js');
const { diff } = require('deep-object-diff');

const tests = [];

//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 3;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimal(input, 'post');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 3;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimal(input, 'get');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 3;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimal(input, 'post');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 3;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimal(input, 'get');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -7.922816E+028;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimal(input, 'post');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -7.922816E+028;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimal(input, 'get');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 7.922816E+028;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimal(input, 'post');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 7.922816E+028;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimal(input, 'get');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 3;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimalNullable(input, 'post');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 3;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimalNullable(input, 'get');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimalNullable(input, 'post');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimalNullable(input, 'get');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -7.922816E+028;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimalNullable(input, 'post');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -7.922816E+028;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimalNullable(input, 'get');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 7.922816E+028;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimalNullable(input, 'post');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 7.922816E+028;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.decimaltest';
        const output = await api.decimalNullable(input, 'get');  
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
