import * as api from './api';
import Test from '../../../Test';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

export const tests: Array<Test> = [];

//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Circular | null = {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }, }, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circular(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Circular | null = {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }, }, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circular(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Circular | null = {name: null, child: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circular(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Circular | null = {name: null, child: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circular(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Circular | null = {name: '', child: {name: '', child: {name: '', child: {name: '', child: {name: '', child: null, }, }, }, }, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circular(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Circular | null = {name: '', child: {name: '', child: {name: '', child: {name: '', child: {name: '', child: null, }, }, }, }, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circular(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Circular | null = {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }, }, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circular(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circular
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circular/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Circular | null = {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }, }, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circular(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArrayOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArrayOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArrayOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArrayOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArrayOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArrayOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArrayOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArrayOfArrays/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArrayOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArraysOfLists(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArraysOfLists(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArraysOfLists(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArraysOfLists(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArraysOfLists(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArraysOfLists(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArraysOfLists(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularArraysOfLists/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularArraysOfLists(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularListOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularListOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularListOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularListOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularListOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }],[{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, },{name: '', child: {name: '', child: {name: '', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularListOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularListOfArrays(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//circularListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.circulartest/circularListOfArrays/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<Array<api.Circular | null> | null> | null = [[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }],[{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, },{name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: {name: 'abcdefghijklmnopqrstuvWxyz', child: null, }, }, }]];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.circulartest').circularListOfArrays(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
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
