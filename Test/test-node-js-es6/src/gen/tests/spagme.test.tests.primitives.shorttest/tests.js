import * as api1 from './api.js';
import { default as api2 } from './api.js';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

const api = {...api1, ...api2 };

const tests = [];

//short
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/short/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 10;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.short(input, 'post');  
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
//short
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/short/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 10;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.short(input, 'get');  
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
//short
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/short/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 10;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.short(input, 'post');  
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
//short
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/short/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 10;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.short(input, 'get');  
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
//short
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/short/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -32768;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.short(input, 'post');  
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
//short
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/short/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -32768;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.short(input, 'get');  
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
//short
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/short/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 32767;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.short(input, 'post');  
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
//short
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/short/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 32767;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.short(input, 'get');  
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
//shortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/shortNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 10;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.shortNullable(input, 'post');  
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
//shortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/shortNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 10;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.shortNullable(input, 'get');  
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
//shortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/shortNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.shortNullable(input, 'post');  
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
//shortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/shortNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.shortNullable(input, 'get');  
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
//shortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/shortNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -32768;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.shortNullable(input, 'post');  
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
//shortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/shortNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -32768;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.shortNullable(input, 'get');  
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
//shortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/shortNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 32767;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.shortNullable(input, 'post');  
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
//shortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.shorttest/shortNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 32767;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.shorttest';
        const output = await api.shortNullable(input, 'get');  
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
