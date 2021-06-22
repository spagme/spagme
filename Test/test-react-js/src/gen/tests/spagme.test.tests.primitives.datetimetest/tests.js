import * as api1 from './api.js';
import { default as api2 } from './api.js';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

const api = {...api1, ...api2 };

const tests = [];

//dateTime
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTime/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(2011,10,11);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTime(input, 'post');  
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
//dateTime
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTime/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(2011,10,11);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTime(input, 'get');  
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
//dateTime
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTime/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(2011,10,11);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTime(input, 'post');  
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
//dateTime
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTime/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(2011,10,11);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTime(input, 'get');  
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
//dateTime
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTime/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(1,0,1);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTime(input, 'post');  
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
//dateTime
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTime/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(1,0,1);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTime(input, 'get');  
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
//dateTime
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTime/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(9999,11,31);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTime(input, 'post');  
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
//dateTime
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTime/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(9999,11,31);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTime(input, 'get');  
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
//dateTimeNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTimeNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(2011,10,11);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTimeNullable(input, 'post');  
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
//dateTimeNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTimeNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(2011,10,11);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTimeNullable(input, 'get');  
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
//dateTimeNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTimeNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTimeNullable(input, 'post');  
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
//dateTimeNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTimeNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTimeNullable(input, 'get');  
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
//dateTimeNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTimeNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(1,0,1);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTimeNullable(input, 'post');  
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
//dateTimeNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTimeNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(1,0,1);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTimeNullable(input, 'get');  
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
//dateTimeNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTimeNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(9999,11,31);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTimeNullable(input, 'post');  
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
//dateTimeNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTimeNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = new Date(9999,11,31);
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.primitives.datetimetest';
        const output = await api.dateTimeNullable(input, 'get');  
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
