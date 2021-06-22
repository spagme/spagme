import * as api1 from './api.js';
import { default as api2 } from './api.js';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

const api = {...api1, ...api2 };

const tests = [];

//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 8;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.longtest';
        const output = await api.longNullable(input, 'post');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 8;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.longtest';
        const output = await api.longNullable(input, 'get');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.longtest';
        const output = await api.longNullable(input, 'post');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.longtest';
        const output = await api.longNullable(input, 'get');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = Number.MIN_SAFE_INTEGER;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.longtest';
        const output = await api.longNullable(input, 'post');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = Number.MIN_SAFE_INTEGER;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.longtest';
        const output = await api.longNullable(input, 'get');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = Number.MAX_SAFE_INTEGER;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.longtest';
        const output = await api.longNullable(input, 'post');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = Number.MAX_SAFE_INTEGER;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.longtest';
        const output = await api.longNullable(input, 'get');  
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
export default tests;
