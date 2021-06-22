import * as api1 from './api.js';
import { default as api2 } from './api.js';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

const api = {...api1, ...api2 };

const tests = [];

//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 5;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.float(input, 'post');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 5;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.float(input, 'get');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 5;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.float(input, 'post');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 5;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.float(input, 'get');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -3.402823E+038;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.float(input, 'post');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -3.402823E+038;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.float(input, 'get');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 3.402823E+038;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.float(input, 'post');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 3.402823E+038;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.float(input, 'get');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 5;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.floatNullable(input, 'post');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 5;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.floatNullable(input, 'get');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.floatNullable(input, 'post');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.floatNullable(input, 'get');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -3.402823E+038;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.floatNullable(input, 'post');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -3.402823E+038;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.floatNullable(input, 'get');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 3.402823E+038;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.floatNullable(input, 'post');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 3.402823E+038;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.floattest';
        const output = await api.floatNullable(input, 'get');  
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
