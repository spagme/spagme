import * as api from './api';
import Test from '../../../Test';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

export const tests: Array<Test> = [];

//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean = true;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').boolean(input, 'post');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean = true;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').boolean(input, 'get');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean = true;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').boolean(input, 'post');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean = true;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').boolean(input, 'get');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean = false;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').boolean(input, 'post');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean = false;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').boolean(input, 'get');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean = false;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').boolean(input, 'post');  
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
//boolean
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/boolean/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean = false;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').boolean(input, 'get');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean | null = true;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').booleanNullable(input, 'post');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean | null = true;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').booleanNullable(input, 'get');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').booleanNullable(input, 'post');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').booleanNullable(input, 'get');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean | null = true;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').booleanNullable(input, 'post');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean | null = true;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').booleanNullable(input, 'get');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean | null = true;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').booleanNullable(input, 'post');  
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
//booleanNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.booleantest/booleanNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: boolean | null = true;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.booleantest').booleanNullable(input, 'get');  
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
