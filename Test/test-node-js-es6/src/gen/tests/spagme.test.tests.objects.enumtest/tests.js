import * as api1 from './api.js';
import { default as api2 } from './api.js';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

const api = {...api1, ...api2 };

const tests = [];

//arrayNotNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.enumtest/arrayNotNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNotNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNotNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNotNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNotNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNotNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNotNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNotNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNotNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.arrayNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Black;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enum(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Black;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enum(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Black;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enum(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Black;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enum(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Black;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enum(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Black;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enum(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Blue;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enum(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Blue;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enum(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumList(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumList(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumList(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumList(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumList(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumList(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumList(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumList(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumListNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumListNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumListNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumListNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumListNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Black,api.Color.Black,api.Color.Black];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumListNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumListNullable(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = [api.Color.Blue,api.Color.Blue,api.Color.Blue];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumListNullable(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Black;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumNullable(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Black;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumNullable(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumNullable(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = null;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumNullable(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Black;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumNullable(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Black;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumNullable(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Blue;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumNullable(input, 'post');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
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
    execute: async (me, url) => {
      try {
        const input = api.Color.Blue;
        me.input = input; 
        api.api.url = url + '/spagme.test.tests.objects.enumtest';
        const output = await api.enumNullable(input, 'get');  
        me.output = output;
        me.status = 'ERROR';
        if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
export default tests;
