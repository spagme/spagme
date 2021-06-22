import * as api from './api';
import Test from '../../../Test';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

export const tests: Array<Test> = [];

//dateTime
tests.push(
  {
    name: 'spagme.test.tests.primitives.datetimetest/dateTime/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date = new Date(2011,10,11);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTime(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date = new Date(2011,10,11);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTime(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date = new Date(2011,10,11);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTime(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date = new Date(2011,10,11);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTime(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date = new Date(1,0,1);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTime(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date = new Date(1,0,1);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTime(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date = new Date(9999,11,31);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTime(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date = new Date(9999,11,31);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTime(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date | null = new Date(2011,10,11);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTimeNullable(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date | null = new Date(2011,10,11);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTimeNullable(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTimeNullable(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTimeNullable(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date | null = new Date(1,0,1);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTimeNullable(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date | null = new Date(1,0,1);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTimeNullable(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date | null = new Date(9999,11,31);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTimeNullable(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Date | null = new Date(9999,11,31);
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.datetimetest').dateTimeNullable(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
export default tests;
