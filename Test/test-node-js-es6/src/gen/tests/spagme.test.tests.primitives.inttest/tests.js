import * as api1 from './api.js';
import { default as api2 } from './api.js';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

const api = {...api1, ...api2 };

const tests = [];

//int
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/int/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 6;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.int(input, 'post');  
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
//int
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/int/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 6;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.int(input, 'get');  
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
//int
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/int/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 6;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.int(input, 'post');  
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
//int
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/int/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 6;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.int(input, 'get');  
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
//int
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/int/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -2147483648;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.int(input, 'post');  
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
//int
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/int/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -2147483648;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.int(input, 'get');  
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
//int
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/int/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 2147483647;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.int(input, 'post');  
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
//int
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/int/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 2147483647;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.int(input, 'get');  
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
//intNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/intNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 6;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.intNullable(input, 'post');  
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
//intNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/intNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 6;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.intNullable(input, 'get');  
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
//intNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/intNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.intNullable(input, 'post');  
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
//intNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/intNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.intNullable(input, 'get');  
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
//intNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/intNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -2147483648;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.intNullable(input, 'post');  
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
//intNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/intNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = -2147483648;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.intNullable(input, 'get');  
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
//intNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/intNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 2147483647;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.intNullable(input, 'post');  
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
//intNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.inttest/intNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 2147483647;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.inttest';
        const output = await api.intNullable(input, 'get');  
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
