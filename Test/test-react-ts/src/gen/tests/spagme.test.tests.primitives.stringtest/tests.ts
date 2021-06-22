import * as api from './api';
import Test from '../../../Test';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

export const tests: Array<Test> = [];

//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: string | null = 'abcdefghijklmnopqrstuvWxyz';
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.stringtest').string(input, 'post');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: string | null = 'abcdefghijklmnopqrstuvWxyz';
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.stringtest').string(input, 'get');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: string | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.stringtest').string(input, 'post');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: string | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.stringtest').string(input, 'get');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: string | null = '';
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.stringtest').string(input, 'post');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: string | null = '';
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.stringtest').string(input, 'get');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: string | null = 'abcdefghijklmnopqrstuvWxyz';
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.stringtest').string(input, 'post');  
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
//string
tests.push(
  {
    name: 'spagme.test.tests.primitives.stringtest/string/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: string | null = 'abcdefghijklmnopqrstuvWxyz';
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.stringtest').string(input, 'get');  
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
