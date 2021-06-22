const { api } = require('./api.js');
const { diff } = require('deep-object-diff');

const tests = [];

//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [true,true,true];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanArray(input, 'post');  
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [true,true,true];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanArray(input, 'get');  
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [true,true,true];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanArray(input, 'post');  
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [true,true,true];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanArray(input, 'get');  
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [false,false,false];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanArray(input, 'post');  
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [false,false,false];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanArray(input, 'get');  
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [false,false,false];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanArray(input, 'post');  
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
//booleanArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [false,false,false];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanArray(input, 'get');  
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanNullableArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [true,true,true];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanNullableArray(input, 'post');  
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanNullableArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [true,true,true];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanNullableArray(input, 'get');  
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanNullableArray(input, 'post');  
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanNullableArray(input, 'get');  
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanNullableArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [true,true,true];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanNullableArray(input, 'post');  
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanNullableArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [true,true,true];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanNullableArray(input, 'get');  
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanNullableArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [true,true,true];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanNullableArray(input, 'post');  
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
//booleanNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/booleanNullableArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [true,true,true];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.booleanNullableArray(input, 'get');  
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charArray(input, 'post');  
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charArray(input, 'get');  
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charArray(input, 'post');  
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charArray(input, 'get');  
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charArray(input, 'post');  
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charArray(input, 'get');  
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charArray(input, 'post');  
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
//charArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charArray(input, 'get');  
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charNullableArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charNullableArray(input, 'post');  
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charNullableArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charNullableArray(input, 'get');  
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charNullableArray(input, 'post');  
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charNullableArray(input, 'get');  
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charNullableArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charNullableArray(input, 'post');  
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charNullableArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charNullableArray(input, 'get');  
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charNullableArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charNullableArray(input, 'post');  
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
//charNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/charNullableArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['A','A','A'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.charNullableArray(input, 'get');  
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeArray(input, 'post');  
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeArray(input, 'get');  
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeArray(input, 'post');  
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeArray(input, 'get');  
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(1,0,1),new Date(1,0,1),new Date(1,0,1)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeArray(input, 'post');  
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(1,0,1),new Date(1,0,1),new Date(1,0,1)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeArray(input, 'get');  
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(9999,11,31),new Date(9999,11,31),new Date(9999,11,31)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeArray(input, 'post');  
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
//dateTimeArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(9999,11,31),new Date(9999,11,31),new Date(9999,11,31)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeArray(input, 'get');  
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeNullableArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeNullableArray(input, 'post');  
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeNullableArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(2011,10,11),new Date(2011,10,11),new Date(2011,10,11)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeNullableArray(input, 'get');  
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeNullableArray(input, 'post');  
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeNullableArray(input, 'get');  
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeNullableArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(1,0,1),new Date(1,0,1),new Date(1,0,1)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeNullableArray(input, 'post');  
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeNullableArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(1,0,1),new Date(1,0,1),new Date(1,0,1)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeNullableArray(input, 'get');  
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeNullableArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(9999,11,31),new Date(9999,11,31),new Date(9999,11,31)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeNullableArray(input, 'post');  
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
//dateTimeNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/dateTimeNullableArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [new Date(9999,11,31),new Date(9999,11,31),new Date(9999,11,31)];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.dateTimeNullableArray(input, 'get');  
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [3,3,3];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalArray(input, 'post');  
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [3,3,3];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalArray(input, 'get');  
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [3,3,3];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalArray(input, 'post');  
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [3,3,3];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalArray(input, 'get');  
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-7.922816E+028,-7.922816E+028,-7.922816E+028];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalArray(input, 'post');  
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-7.922816E+028,-7.922816E+028,-7.922816E+028];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalArray(input, 'get');  
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [7.922816E+028,7.922816E+028,7.922816E+028];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalArray(input, 'post');  
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
//decimalArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [7.922816E+028,7.922816E+028,7.922816E+028];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalArray(input, 'get');  
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalNullableArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [3,3,3];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalNullableArray(input, 'post');  
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalNullableArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [3,3,3];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalNullableArray(input, 'get');  
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalNullableArray(input, 'post');  
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalNullableArray(input, 'get');  
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalNullableArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-7.922816E+028,-7.922816E+028,-7.922816E+028];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalNullableArray(input, 'post');  
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalNullableArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-7.922816E+028,-7.922816E+028,-7.922816E+028];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalNullableArray(input, 'get');  
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalNullableArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [7.922816E+028,7.922816E+028,7.922816E+028];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalNullableArray(input, 'post');  
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
//decimalNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/decimalNullableArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [7.922816E+028,7.922816E+028,7.922816E+028];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.decimalNullableArray(input, 'get');  
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [4,4,4];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleArray(input, 'post');  
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [4,4,4];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleArray(input, 'get');  
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [4,4,4];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleArray(input, 'post');  
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [4,4,4];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleArray(input, 'get');  
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-1.797693E+308,-1.797693E+308,-1.797693E+308];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleArray(input, 'post');  
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-1.797693E+308,-1.797693E+308,-1.797693E+308];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleArray(input, 'get');  
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [1.797693E+308,1.797693E+308,1.797693E+308];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleArray(input, 'post');  
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
//doubleArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [1.797693E+308,1.797693E+308,1.797693E+308];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleArray(input, 'get');  
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleNullableArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [4,4,4];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleNullableArray(input, 'post');  
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleNullableArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [4,4,4];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleNullableArray(input, 'get');  
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleNullableArray(input, 'post');  
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleNullableArray(input, 'get');  
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleNullableArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-1.797693E+308,-1.797693E+308,-1.797693E+308];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleNullableArray(input, 'post');  
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleNullableArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-1.797693E+308,-1.797693E+308,-1.797693E+308];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleNullableArray(input, 'get');  
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleNullableArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [1.797693E+308,1.797693E+308,1.797693E+308];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleNullableArray(input, 'post');  
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
//doubleNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/doubleNullableArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [1.797693E+308,1.797693E+308,1.797693E+308];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.doubleNullableArray(input, 'get');  
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [5,5,5];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatArray(input, 'post');  
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [5,5,5];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatArray(input, 'get');  
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [5,5,5];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatArray(input, 'post');  
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [5,5,5];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatArray(input, 'get');  
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-3.402823E+038,-3.402823E+038,-3.402823E+038];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatArray(input, 'post');  
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-3.402823E+038,-3.402823E+038,-3.402823E+038];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatArray(input, 'get');  
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [3.402823E+038,3.402823E+038,3.402823E+038];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatArray(input, 'post');  
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
//floatArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [3.402823E+038,3.402823E+038,3.402823E+038];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatArray(input, 'get');  
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatNullableArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [5,5,5];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatNullableArray(input, 'post');  
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatNullableArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [5,5,5];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatNullableArray(input, 'get');  
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatNullableArray(input, 'post');  
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatNullableArray(input, 'get');  
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatNullableArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-3.402823E+038,-3.402823E+038,-3.402823E+038];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatNullableArray(input, 'post');  
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatNullableArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-3.402823E+038,-3.402823E+038,-3.402823E+038];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatNullableArray(input, 'get');  
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatNullableArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [3.402823E+038,3.402823E+038,3.402823E+038];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatNullableArray(input, 'post');  
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
//floatNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/floatNullableArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [3.402823E+038,3.402823E+038,3.402823E+038];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.floatNullableArray(input, 'get');  
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [6,6,6];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intArray(input, 'post');  
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [6,6,6];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intArray(input, 'get');  
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [6,6,6];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intArray(input, 'post');  
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [6,6,6];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intArray(input, 'get');  
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-2147483648,-2147483648,-2147483648];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intArray(input, 'post');  
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-2147483648,-2147483648,-2147483648];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intArray(input, 'get');  
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [2147483647,2147483647,2147483647];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intArray(input, 'post');  
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
//intArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [2147483647,2147483647,2147483647];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intArray(input, 'get');  
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intNullableArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [6,6,6];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intNullableArray(input, 'post');  
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intNullableArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [6,6,6];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intNullableArray(input, 'get');  
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intNullableArray(input, 'post');  
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intNullableArray(input, 'get');  
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intNullableArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-2147483648,-2147483648,-2147483648];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intNullableArray(input, 'post');  
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intNullableArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-2147483648,-2147483648,-2147483648];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intNullableArray(input, 'get');  
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intNullableArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [2147483647,2147483647,2147483647];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intNullableArray(input, 'post');  
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
//intNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/intNullableArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [2147483647,2147483647,2147483647];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.intNullableArray(input, 'get');  
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [8,8,8];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longArray(input, 'post');  
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [8,8,8];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longArray(input, 'get');  
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [8,8,8];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longArray(input, 'post');  
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [8,8,8];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longArray(input, 'get');  
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longArray(input, 'post');  
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longArray(input, 'get');  
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longArray(input, 'post');  
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
//longArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longArray(input, 'get');  
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longNullableArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [8,8,8];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longNullableArray(input, 'post');  
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longNullableArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [8,8,8];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longNullableArray(input, 'get');  
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longNullableArray(input, 'post');  
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longNullableArray(input, 'get');  
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longNullableArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longNullableArray(input, 'post');  
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longNullableArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longNullableArray(input, 'get');  
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longNullableArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longNullableArray(input, 'post');  
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
//longNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/longNullableArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.longNullableArray(input, 'get');  
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [2,2,2];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteArray(input, 'post');  
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [2,2,2];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteArray(input, 'get');  
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [2,2,2];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteArray(input, 'post');  
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [2,2,2];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteArray(input, 'get');  
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-128,-128,-128];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteArray(input, 'post');  
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-128,-128,-128];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteArray(input, 'get');  
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [127,127,127];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteArray(input, 'post');  
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
//sbyteArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [127,127,127];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteArray(input, 'get');  
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteNullableArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [2,2,2];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteNullableArray(input, 'post');  
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteNullableArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [2,2,2];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteNullableArray(input, 'get');  
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteNullableArray(input, 'post');  
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteNullableArray(input, 'get');  
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteNullableArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-128,-128,-128];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteNullableArray(input, 'post');  
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteNullableArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-128,-128,-128];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteNullableArray(input, 'get');  
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteNullableArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [127,127,127];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteNullableArray(input, 'post');  
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
//sbyteNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/sbyteNullableArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [127,127,127];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.sbyteNullableArray(input, 'get');  
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [10,10,10];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortArray(input, 'post');  
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [10,10,10];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortArray(input, 'get');  
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [10,10,10];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortArray(input, 'post');  
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [10,10,10];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortArray(input, 'get');  
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-32768,-32768,-32768];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortArray(input, 'post');  
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-32768,-32768,-32768];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortArray(input, 'get');  
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [32767,32767,32767];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortArray(input, 'post');  
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
//shortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [32767,32767,32767];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortArray(input, 'get');  
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortNullableArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [10,10,10];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortNullableArray(input, 'post');  
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortNullableArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [10,10,10];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortNullableArray(input, 'get');  
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortNullableArray(input, 'post');  
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortNullableArray(input, 'get');  
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortNullableArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-32768,-32768,-32768];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortNullableArray(input, 'post');  
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortNullableArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [-32768,-32768,-32768];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortNullableArray(input, 'get');  
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortNullableArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [32767,32767,32767];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortNullableArray(input, 'post');  
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
//shortNullableArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/shortNullableArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [32767,32767,32767];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.shortNullableArray(input, 'get');  
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/stringArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.stringArray(input, 'post');  
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/stringArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.stringArray(input, 'get');  
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/stringArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.stringArray(input, 'post');  
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/stringArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.stringArray(input, 'get');  
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/stringArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['','',''];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.stringArray(input, 'post');  
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/stringArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['','',''];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.stringArray(input, 'get');  
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/stringArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.stringArray(input, 'post');  
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
//stringArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/stringArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = ['abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz','abcdefghijklmnopqrstuvWxyz'];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.stringArray(input, 'get');  
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [7,7,7];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArray(input, 'post');  
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [7,7,7];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArray(input, 'get');  
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [7,7,7];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArray(input, 'post');  
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [7,7,7];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArray(input, 'get');  
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [0,0,0];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArray(input, 'post');  
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [0,0,0];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArray(input, 'get');  
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [4294967295,4294967295,4294967295];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArray(input, 'post');  
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
//uintArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [4294967295,4294967295,4294967295];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArray(input, 'get');  
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArrayNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [7,7,7];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArrayNullable(input, 'post');  
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArrayNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [7,7,7];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArrayNullable(input, 'get');  
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArrayNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArrayNullable(input, 'post');  
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArrayNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArrayNullable(input, 'get');  
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArrayNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [0,0,0];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArrayNullable(input, 'post');  
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArrayNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [0,0,0];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArrayNullable(input, 'get');  
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArrayNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [4294967295,4294967295,4294967295];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArrayNullable(input, 'post');  
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
//uintArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/uintArrayNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [4294967295,4294967295,4294967295];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.uintArrayNullable(input, 'get');  
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [9,9,9];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArray(input, 'post');  
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [9,9,9];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArray(input, 'get');  
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [9,9,9];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArray(input, 'post');  
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [9,9,9];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArray(input, 'get');  
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [0,0,0];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArray(input, 'post');  
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [0,0,0];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArray(input, 'get');  
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArray(input, 'post');  
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
//ulongArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArray(input, 'get');  
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArrayNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [9,9,9];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArrayNullable(input, 'post');  
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArrayNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [9,9,9];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArrayNullable(input, 'get');  
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArrayNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArrayNullable(input, 'post');  
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArrayNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArrayNullable(input, 'get');  
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArrayNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [0,0,0];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArrayNullable(input, 'post');  
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArrayNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [0,0,0];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArrayNullable(input, 'get');  
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArrayNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArrayNullable(input, 'post');  
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
//ulongArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ulongArrayNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ulongArrayNullable(input, 'get');  
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [11,11,11];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArray(input, 'post');  
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [11,11,11];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArray(input, 'get');  
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [11,11,11];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArray(input, 'post');  
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [11,11,11];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArray(input, 'get');  
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [0,0,0];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArray(input, 'post');  
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [0,0,0];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArray(input, 'get');  
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [65535,65535,65535];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArray(input, 'post');  
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
//ushortArray
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [65535,65535,65535];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArray(input, 'get');  
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArrayNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [11,11,11];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArrayNullable(input, 'post');  
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArrayNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [11,11,11];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArrayNullable(input, 'get');  
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArrayNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArrayNullable(input, 'post');  
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArrayNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArrayNullable(input, 'get');  
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArrayNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [0,0,0];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArrayNullable(input, 'post');  
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArrayNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [0,0,0];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArrayNullable(input, 'get');  
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArrayNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [65535,65535,65535];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArrayNullable(input, 'post');  
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
//ushortArrayNullable
tests.push(
  {
    name: 'spagme.test.tests.primitives.primitivesarraytest/ushortArrayNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [65535,65535,65535];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.primitives.primitivesarraytest';
        const output = await api.ushortArrayNullable(input, 'get');  
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
module.exports = tests;
