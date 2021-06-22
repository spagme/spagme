import * as api1 from './api.js';
import { default as api2 } from './api.js';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

const api = {...api1, ...api2 };

const tests = [];

//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'abcdefghijklmnopqrstuvWxyz';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.stringtest';
        const output = await api.string(input, 'post');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'abcdefghijklmnopqrstuvWxyz';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.stringtest';
        const output = await api.string(input, 'get');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.stringtest';
        const output = await api.string(input, 'post');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.stringtest';
        const output = await api.string(input, 'get');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = '';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.stringtest';
        const output = await api.string(input, 'post');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = '';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.stringtest';
        const output = await api.string(input, 'get');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'abcdefghijklmnopqrstuvWxyz';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.stringtest';
        const output = await api.string(input, 'post');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'abcdefghijklmnopqrstuvWxyz';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.stringtest';
        const output = await api.string(input, 'get');  
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
