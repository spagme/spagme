import * as api from './api';
import Test from '../../../Test';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

export const tests: Array<Test> = [];

//arrayNotNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNotNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNotNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNotNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNotNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNotNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNotNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNotNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNotNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNotNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNotNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNotNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNotNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNotNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNotNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNotNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNotNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNotNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNotNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNotNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNotNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNotNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNotNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNotNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').arrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enum
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enum/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color = api.Color.Black;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enum(input, 'post');  
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
//enum
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enum/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color = api.Color.Black;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enum(input, 'get');  
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
//enum
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enum/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color = api.Color.Black;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enum(input, 'post');  
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
//enum
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enum/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color = api.Color.Black;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enum(input, 'get');  
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
//enum
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enum/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color = api.Color.Black;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enum(input, 'post');  
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
//enum
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enum/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color = api.Color.Black;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enum(input, 'get');  
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
//enum
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enum/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color = api.Color.Blue;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enum(input, 'post');  
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
//enum
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enum/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color = api.Color.Blue;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enum(input, 'get');  
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
//enumList
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumList/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumList(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumList
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumList/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumList(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumList
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumList/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumList(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumList
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumList/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumList(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumList
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumList/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumList(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumList
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumList/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumList(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumList
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumList/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumList(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumList
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumList/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color> | null = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumList(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumListNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumListNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumListNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumListNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumListNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumListNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumListNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumListNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumListNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumListNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumListNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumListNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumListNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumListNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumListNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumListNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumListNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumListNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumListNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumListNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumListNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumListNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumListNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Color | null> | null = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumListNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//enumNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumNullable/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color | null = api.Color.Black;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumNullable(input, 'post');  
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
//enumNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumNullable/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color | null = api.Color.Black;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumNullable(input, 'get');  
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
//enumNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumNullable/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumNullable(input, 'post');  
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
//enumNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumNullable/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color | null = null;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumNullable(input, 'get');  
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
//enumNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumNullable/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color | null = api.Color.Black;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumNullable(input, 'post');  
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
//enumNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumNullable/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color | null = api.Color.Black;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumNullable(input, 'get');  
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
//enumNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumNullable/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color | null = api.Color.Blue;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumNullable(input, 'post');  
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
//enumNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/enumNullable/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Color | null = api.Color.Blue;
        me.input = input; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.enumtest').enumNullable(input, 'get');  
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
