import * as api1 from './api.js';
import { default as api2 } from './api.js';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

const api = {...api1, ...api2 };

const tests = [];

//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = true;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.boolean(input, 'post');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = true;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.boolean(input, 'get');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = true;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.boolean(input, 'post');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = true;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.boolean(input, 'get');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = false;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.boolean(input, 'post');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = false;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.boolean(input, 'get');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = false;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.boolean(input, 'post');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = false;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.boolean(input, 'get');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = true;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.booleanNullable(input, 'post');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = true;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.booleanNullable(input, 'get');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.booleanNullable(input, 'post');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.booleanNullable(input, 'get');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = true;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.booleanNullable(input, 'post');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = true;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.booleanNullable(input, 'get');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = true;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.booleanNullable(input, 'post');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = true;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.booleantest';
        const output = await api.booleanNullable(input, 'get');  
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
