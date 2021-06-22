import * as api from './api';
import Test from '../../../Test';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

export const tests: Array<Test> = [];

//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = 5;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').float(input, 'post');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = 5;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').float(input, 'get');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = 5;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').float(input, 'post');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = 5;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').float(input, 'get');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = -3.402823E+038;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').float(input, 'post');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = -3.402823E+038;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').float(input, 'get');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = 3.402823E+038;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').float(input, 'post');  
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
//float
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/float/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number = 3.402823E+038;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').float(input, 'get');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = 5;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').floatNullable(input, 'post');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = 5;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').floatNullable(input, 'get');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').floatNullable(input, 'post');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').floatNullable(input, 'get');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = -3.402823E+038;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').floatNullable(input, 'post');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = -3.402823E+038;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').floatNullable(input, 'get');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = 3.402823E+038;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').floatNullable(input, 'post');  
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
//floatNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.floattest/floatNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: number | null = 3.402823E+038;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.floattest').floatNullable(input, 'get');  
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
