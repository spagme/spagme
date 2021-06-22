import * as api1 from './api.js';
import { default as api2 } from './api.js';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

const api = {...api1, ...api2 };

const tests = [];

//ushort
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushort/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 11;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushort(input, 'post');  
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
//ushort
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushort/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 11;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushort(input, 'get');  
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
//ushort
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushort/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 11;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushort(input, 'post');  
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
//ushort
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushort/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 11;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushort(input, 'get');  
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
//ushort
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushort/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 0;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushort(input, 'post');  
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
//ushort
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushort/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 0;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushort(input, 'get');  
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
//ushort
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushort/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 65535;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushort(input, 'post');  
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
//ushort
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushort/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 65535;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushort(input, 'get');  
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
//ushortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushortNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 11;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushortNullable(input, 'post');  
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
//ushortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushortNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 11;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushortNullable(input, 'get');  
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
//ushortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushortNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushortNullable(input, 'post');  
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
//ushortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushortNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushortNullable(input, 'get');  
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
//ushortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushortNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 0;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushortNullable(input, 'post');  
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
//ushortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushortNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 0;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushortNullable(input, 'get');  
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
//ushortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushortNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 65535;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushortNullable(input, 'post');  
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
//ushortNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.ushorttest/ushortNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = 65535;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.ushorttest';
        const output = await api.ushortNullable(input, 'get');  
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
