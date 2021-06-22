import * as api from './api';
import Test from '../../../Test';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

export const tests: Array<Test> = [];

//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = 8;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.longtest').longNullable(input, 'post');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = 8;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.longtest').longNullable(input, 'get');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.longtest').longNullable(input, 'post');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.longtest').longNullable(input, 'get');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = Number.MIN_SAFE_INTEGER;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.longtest').longNullable(input, 'post');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = Number.MIN_SAFE_INTEGER;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.longtest').longNullable(input, 'get');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = Number.MAX_SAFE_INTEGER;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.longtest').longNullable(input, 'post');  
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
//longNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.longtest/longNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = Number.MAX_SAFE_INTEGER;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.longtest').longNullable(input, 'get');  
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
