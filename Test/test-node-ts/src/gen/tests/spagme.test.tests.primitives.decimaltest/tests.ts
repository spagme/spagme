import * as api from './api';
import Test from '../../../Test';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

export const tests: Array<Test> = [];

//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = 3;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimal(input, 'post');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = 3;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimal(input, 'get');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = 3;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimal(input, 'post');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = 3;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimal(input, 'get');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = -7.922816E+028;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimal(input, 'post');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = -7.922816E+028;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimal(input, 'get');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = 7.922816E+028;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimal(input, 'post');  
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
//decimal
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimal/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = 7.922816E+028;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimal(input, 'get');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = 3;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimalNullable(input, 'post');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = 3;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimalNullable(input, 'get');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimalNullable(input, 'post');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimalNullable(input, 'get');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = -7.922816E+028;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimalNullable(input, 'post');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = -7.922816E+028;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimalNullable(input, 'get');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = 7.922816E+028;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimalNullable(input, 'post');  
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
//decimalNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.decimaltest/decimalNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = 7.922816E+028;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.decimaltest').decimalNullable(input, 'get');  
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
