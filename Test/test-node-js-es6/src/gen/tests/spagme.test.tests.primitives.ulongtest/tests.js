import * as api1 from './api.js';
import { default as api2 } from './api.js';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

const api = {...api1, ...api2 };

const tests = [];

//ulong
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulong/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 9;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulong(input, 'post');  
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
//ulong
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulong/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 9;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulong(input, 'get');  
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
//ulong
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulong/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 9;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulong(input, 'post');  
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
//ulong
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulong/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 9;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulong(input, 'get');  
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
//ulong
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulong/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 0;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulong(input, 'post');  
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
//ulong
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulong/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 0;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulong(input, 'get');  
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
//ulong
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulong/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = Number.MAX_SAFE_INTEGER;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulong(input, 'post');  
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
//ulong
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulong/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = Number.MAX_SAFE_INTEGER;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulong(input, 'get');  
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
//ulongNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulongNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 9;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulongNullable(input, 'post');  
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
//ulongNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulongNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 9;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulongNullable(input, 'get');  
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
//ulongNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulongNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulongNullable(input, 'post');  
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
//ulongNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulongNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulongNullable(input, 'get');  
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
//ulongNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulongNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 0;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulongNullable(input, 'post');  
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
//ulongNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulongNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 0;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulongNullable(input, 'get');  
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
//ulongNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulongNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = Number.MAX_SAFE_INTEGER;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulongNullable(input, 'post');  
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
//ulongNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ulongtest/ulongNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = Number.MAX_SAFE_INTEGER;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ulongtest';
        const output = await api.ulongNullable(input, 'get');  
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
