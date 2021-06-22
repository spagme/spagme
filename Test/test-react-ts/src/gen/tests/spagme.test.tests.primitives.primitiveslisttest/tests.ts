import * as api from './api';
import Test from '../../../Test';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

export const tests: Array<Test> = [];

//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [false,false,false];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [false,false,false];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [false,false,false];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean> | null = [false,false,false];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/booleanNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<boolean | null> | null = [true,true,true];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').booleanNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/charNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['A','A','A'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').charNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(1,0,1),new Date(1,0,1),new Date(1,0,1)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(1,0,1),new Date(1,0,1),new Date(1,0,1)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(9999,11,31),new Date(9999,11,31),new Date(9999,11,31)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date> | null = [new Date(9999,11,31),new Date(9999,11,31),new Date(9999,11,31)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [new Date(1,0,1),new Date(1,0,1),new Date(1,0,1)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [new Date(1,0,1),new Date(1,0,1),new Date(1,0,1)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [new Date(9999,11,31),new Date(9999,11,31),new Date(9999,11,31)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/dateTimeNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Date | null> | null = [new Date(9999,11,31),new Date(9999,11,31),new Date(9999,11,31)];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').dateTimeNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [3,3,3];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [3,3,3];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [3,3,3];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [3,3,3];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-7.922816E+028,-7.922816E+028,-7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-7.922816E+028,-7.922816E+028,-7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [7.922816E+028,7.922816E+028,7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [7.922816E+028,7.922816E+028,7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [3,3,3];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [3,3,3];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-7.922816E+028,-7.922816E+028,-7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-7.922816E+028,-7.922816E+028,-7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [7.922816E+028,7.922816E+028,7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/decimalNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [7.922816E+028,7.922816E+028,7.922816E+028];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').decimalNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [4,4,4];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [4,4,4];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [4,4,4];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [4,4,4];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-1.797693E+308,-1.797693E+308,-1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-1.797693E+308,-1.797693E+308,-1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [1.797693E+308,1.797693E+308,1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [1.797693E+308,1.797693E+308,1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [4,4,4];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [4,4,4];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-1.797693E+308,-1.797693E+308,-1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-1.797693E+308,-1.797693E+308,-1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [1.797693E+308,1.797693E+308,1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/doubleNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [1.797693E+308,1.797693E+308,1.797693E+308];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').doubleNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [5,5,5];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [5,5,5];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [5,5,5];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [5,5,5];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-3.402823E+038,-3.402823E+038,-3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-3.402823E+038,-3.402823E+038,-3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [3.402823E+038,3.402823E+038,3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [3.402823E+038,3.402823E+038,3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [5,5,5];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [5,5,5];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-3.402823E+038,-3.402823E+038,-3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-3.402823E+038,-3.402823E+038,-3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [3.402823E+038,3.402823E+038,3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/floatNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [3.402823E+038,3.402823E+038,3.402823E+038];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').floatNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [6,6,6];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [6,6,6];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [6,6,6];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [6,6,6];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-2147483648,-2147483648,-2147483648];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-2147483648,-2147483648,-2147483648];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [2147483647,2147483647,2147483647];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [2147483647,2147483647,2147483647];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [6,6,6];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [6,6,6];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-2147483648,-2147483648,-2147483648];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-2147483648,-2147483648,-2147483648];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [2147483647,2147483647,2147483647];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/intNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [2147483647,2147483647,2147483647];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').intNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [8,8,8];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [8,8,8];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [8,8,8];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [8,8,8];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [8,8,8];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [8,8,8];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/longNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').longNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [2,2,2];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [2,2,2];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [2,2,2];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [2,2,2];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-128,-128,-128];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-128,-128,-128];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [127,127,127];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [127,127,127];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [2,2,2];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [2,2,2];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-128,-128,-128];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-128,-128,-128];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [127,127,127];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/sbyteNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [127,127,127];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').sbyteNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [10,10,10];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [10,10,10];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [10,10,10];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [10,10,10];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-32768,-32768,-32768];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [-32768,-32768,-32768];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [32767,32767,32767];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [32767,32767,32767];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortNullableArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [10,10,10];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortNullableArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [10,10,10];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortNullableArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-32768,-32768,-32768];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortNullableArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [-32768,-32768,-32768];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortNullableArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [32767,32767,32767];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortNullableArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/shortNullableArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [32767,32767,32767];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').shortNullableArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/stringArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').stringArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/stringArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').stringArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/stringArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').stringArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/stringArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').stringArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/stringArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['','',''];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').stringArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/stringArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['','',''];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').stringArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/stringArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').stringArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/stringArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<string | null> | null = ['abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz'];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').stringArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [7,7,7];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [7,7,7];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [7,7,7];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [7,7,7];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [4294967295,4294967295,4294967295];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [4294967295,4294967295,4294967295];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArrayNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [7,7,7];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArrayNullable(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArrayNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [7,7,7];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArrayNullable(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArrayNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArrayNullable(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArrayNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArrayNullable(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArrayNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArrayNullable(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArrayNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArrayNullable(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArrayNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [4294967295,4294967295,4294967295];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArrayNullable(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/uintArrayNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [4294967295,4294967295,4294967295];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').uintArrayNullable(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [9,9,9];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [9,9,9];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [9,9,9];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [9,9,9];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArrayNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [9,9,9];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArrayNullable(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArrayNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [9,9,9];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArrayNullable(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArrayNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArrayNullable(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArrayNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArrayNullable(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArrayNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArrayNullable(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArrayNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArrayNullable(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArrayNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArrayNullable(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ulongArrayNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ulongArrayNullable(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArray/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [11,11,11];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArray/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [11,11,11];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArray/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [11,11,11];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArray/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [11,11,11];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArray/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArray/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArray/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [65535,65535,65535];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArray(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArray/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number> | null = [65535,65535,65535];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArray(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArrayNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [11,11,11];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArrayNullable(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArrayNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [11,11,11];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArrayNullable(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArrayNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArrayNullable(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArrayNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArrayNullable(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArrayNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArrayNullable(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArrayNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [0,0,0];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArrayNullable(input, 'get');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArrayNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [65535,65535,65535];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArrayNullable(input, 'post');  
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
    name: 'spagme.test.tests.primitives.primitiveslisttest/ushortArrayNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<number | null> | null = [65535,65535,65535];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.primitives.primitiveslisttest').ushortArrayNullable(input, 'get');  
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
