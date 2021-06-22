import * as api from './api';
import Test from '../../../Test';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

export const tests: Array<Test> = [];

//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [false,false,false];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [false,false,false];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [false,false,false];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [false,false,false];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/booleanNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').booleanNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/charNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').charNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(1,0,1),new Date(1,0,1),new Date(1,0,1)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(1,0,1),new Date(1,0,1),new Date(1,0,1)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(9999,11,31),new Date(9999,11,31),new Date(9999,11,31)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(9999,11,31),new Date(9999,11,31),new Date(9999,11,31)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [new Date(1,0,1),new Date(1,0,1),new Date(1,0,1)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [new Date(1,0,1),new Date(1,0,1),new Date(1,0,1)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [new Date(9999,11,31),new Date(9999,11,31),new Date(9999,11,31)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/dateTimeNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [new Date(9999,11,31),new Date(9999,11,31),new Date(9999,11,31)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').dateTimeNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [3,3,3];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [3,3,3];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [3,3,3];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [3,3,3];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-7.922816E+028,-7.922816E+028,-7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-7.922816E+028,-7.922816E+028,-7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [7.922816E+028,7.922816E+028,7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [7.922816E+028,7.922816E+028,7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [3,3,3];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [3,3,3];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-7.922816E+028,-7.922816E+028,-7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-7.922816E+028,-7.922816E+028,-7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [7.922816E+028,7.922816E+028,7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/decimalNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [7.922816E+028,7.922816E+028,7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').decimalNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [4,4,4];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [4,4,4];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [4,4,4];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [4,4,4];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-1.797693E+308,-1.797693E+308,-1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-1.797693E+308,-1.797693E+308,-1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [1.797693E+308,1.797693E+308,1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [1.797693E+308,1.797693E+308,1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [4,4,4];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [4,4,4];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-1.797693E+308,-1.797693E+308,-1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-1.797693E+308,-1.797693E+308,-1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [1.797693E+308,1.797693E+308,1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/doubleNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [1.797693E+308,1.797693E+308,1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').doubleNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [5,5,5];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [5,5,5];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [5,5,5];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [5,5,5];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-3.402823E+038,-3.402823E+038,-3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-3.402823E+038,-3.402823E+038,-3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [3.402823E+038,3.402823E+038,3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [3.402823E+038,3.402823E+038,3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [5,5,5];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [5,5,5];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-3.402823E+038,-3.402823E+038,-3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-3.402823E+038,-3.402823E+038,-3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [3.402823E+038,3.402823E+038,3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/floatNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [3.402823E+038,3.402823E+038,3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').floatNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [6,6,6];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [6,6,6];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [6,6,6];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [6,6,6];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-2147483648,-2147483648,-2147483648];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-2147483648,-2147483648,-2147483648];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [2147483647,2147483647,2147483647];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [2147483647,2147483647,2147483647];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [6,6,6];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [6,6,6];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-2147483648,-2147483648,-2147483648];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-2147483648,-2147483648,-2147483648];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [2147483647,2147483647,2147483647];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/intNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [2147483647,2147483647,2147483647];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').intNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [8,8,8];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [8,8,8];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [8,8,8];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [8,8,8];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [8,8,8];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [8,8,8];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/longNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').longNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [2,2,2];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [2,2,2];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [2,2,2];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [2,2,2];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-128,-128,-128];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-128,-128,-128];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [127,127,127];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [127,127,127];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [2,2,2];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [2,2,2];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-128,-128,-128];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-128,-128,-128];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [127,127,127];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/sbyteNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [127,127,127];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').sbyteNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [10,10,10];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [10,10,10];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [10,10,10];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [10,10,10];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-32768,-32768,-32768];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-32768,-32768,-32768];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [32767,32767,32767];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [32767,32767,32767];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [10,10,10];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [10,10,10];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-32768,-32768,-32768];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-32768,-32768,-32768];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [32767,32767,32767];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortNullableArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/shortNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [32767,32767,32767];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').shortNullableArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/stringArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').stringArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/stringArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').stringArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/stringArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').stringArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/stringArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').stringArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/stringArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['','',''];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').stringArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/stringArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['','',''];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').stringArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/stringArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').stringArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/stringArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').stringArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [7,7,7];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [7,7,7];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [7,7,7];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [7,7,7];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [4294967295,4294967295,4294967295];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [4294967295,4294967295,4294967295];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArrayNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [7,7,7];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArrayNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [7,7,7];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArrayNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArrayNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArrayNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArrayNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArrayNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [4294967295,4294967295,4294967295];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/uintArrayNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [4294967295,4294967295,4294967295];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').uintArrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [9,9,9];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [9,9,9];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [9,9,9];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [9,9,9];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArrayNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [9,9,9];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArrayNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [9,9,9];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArrayNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArrayNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArrayNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArrayNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArrayNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ulongArrayNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ulongArrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [11,11,11];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [11,11,11];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [11,11,11];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [11,11,11];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [65535,65535,65535];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArray(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [65535,65535,65535];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArray(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArrayNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [11,11,11];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArrayNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [11,11,11];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArrayNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArrayNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArrayNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArrayNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArrayNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [65535,65535,65535];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesienumerabletest/ushortArrayNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [65535,65535,65535];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitivesienumerabletest').ushortArrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
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
