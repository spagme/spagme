import * as api1 from './api.js';
import { default as api2 } from './api.js';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

const api = {...api1, ...api2 };

const tests = [];

//char
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/char/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.char(input, 'post');  
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
//char
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/char/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.char(input, 'get');  
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
//char
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/char/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.char(input, 'post');  
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
//char
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/char/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.char(input, 'get');  
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
//char
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/char/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.char(input, 'post');  
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
//char
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/char/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.char(input, 'get');  
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
//char
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/char/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.char(input, 'post');  
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
//char
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/char/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.char(input, 'get');  
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
//charNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/charNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.charNullable(input, 'post');  
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
//charNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/charNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.charNullable(input, 'get');  
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
//charNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/charNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.charNullable(input, 'post');  
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
//charNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/charNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.charNullable(input, 'get');  
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
//charNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/charNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.charNullable(input, 'post');  
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
//charNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/charNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.charNullable(input, 'get');  
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
//charNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/charNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.charNullable(input, 'post');  
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
//charNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.chartest/charNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 'A';
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.chartest';
        const output = await api.charNullable(input, 'get');  
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
