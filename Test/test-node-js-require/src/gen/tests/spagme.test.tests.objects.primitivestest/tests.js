const { api } = require('./api.js');
const { diff } = require('deep-object-diff');

const tests = [];

//primitives
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitives/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitives(input, 'post');  
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
//primitives
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitives/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitives(input, 'get');  
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
//primitives
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitives/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitives(input, 'post');  
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
//primitives
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitives/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitives(input, 'get');  
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
//primitives
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitives/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitives(input, 'post');  
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
//primitives
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitives/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitives(input, 'get');  
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
//primitives
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitives/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitives(input, 'post');  
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
//primitives
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitives/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitives(input, 'get');  
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
//primitivesArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArray(input, 'post');  
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
//primitivesArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArray(input, 'get');  
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
//primitivesArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArray(input, 'post');  
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
//primitivesArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArray(input, 'get');  
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
//primitivesArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArray(input, 'post');  
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
//primitivesArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArray(input, 'get');  
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
//primitivesArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArray(input, 'post');  
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
//primitivesArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArray(input, 'get');  
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
//primitivesArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArrayOfArrays/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }],[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }],[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArrayOfArrays(input, 'post');  
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
//primitivesArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArrayOfArrays/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }],[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }],[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArrayOfArrays(input, 'get');  
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
//primitivesArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArrayOfArrays/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArrayOfArrays(input, 'post');  
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
//primitivesArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArrayOfArrays/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArrayOfArrays(input, 'get');  
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
//primitivesArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArrayOfArrays/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }],[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }],[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArrayOfArrays(input, 'post');  
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
//primitivesArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArrayOfArrays/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }],[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }],[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArrayOfArrays(input, 'get');  
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
//primitivesArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArrayOfArrays/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }],[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }],[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArrayOfArrays(input, 'post');  
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
//primitivesArrayOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArrayOfArrays/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }],[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }],[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArrayOfArrays(input, 'get');  
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
//primitivesArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArraysOfLists/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }],[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }],[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArraysOfLists(input, 'post');  
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
//primitivesArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArraysOfLists/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }],[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }],[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArraysOfLists(input, 'get');  
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
//primitivesArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArraysOfLists/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArraysOfLists(input, 'post');  
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
//primitivesArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArraysOfLists/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArraysOfLists(input, 'get');  
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
//primitivesArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArraysOfLists/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }],[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }],[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArraysOfLists(input, 'post');  
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
//primitivesArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArraysOfLists/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }],[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }],[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArraysOfLists(input, 'get');  
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
//primitivesArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArraysOfLists/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }],[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }],[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArraysOfLists(input, 'post');  
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
//primitivesArraysOfLists
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesArraysOfLists/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }],[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }],[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesArraysOfLists(input, 'get');  
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
//primitivesListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesListOfArrays/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }],[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }],[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesListOfArrays(input, 'post');  
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
//primitivesListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesListOfArrays/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }],[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }],[{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesListOfArrays(input, 'get');  
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
//primitivesListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesListOfArrays/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesListOfArrays(input, 'post');  
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
//primitivesListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesListOfArrays/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesListOfArrays(input, 'get');  
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
//primitivesListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesListOfArrays/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }],[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }],[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesListOfArrays(input, 'post');  
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
//primitivesListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesListOfArrays/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }],[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }],[{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{bool: false, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesListOfArrays(input, 'get');  
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
//primitivesListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesListOfArrays/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }],[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }],[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesListOfArrays(input, 'post');  
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
//primitivesListOfArrays
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesListOfArrays/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }],[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }],[{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{bool: false, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }]];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesListOfArrays(input, 'get');  
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
//primitivesNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullable/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullable(input, 'post');  
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
//primitivesNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullable/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullable(input, 'get');  
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
//primitivesNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullable/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {string: null, bool: null, sbyte: null, char: null, decimal: null, double: null, float: null, int: null, uint: null, long: null, ulong: null, short: null, ushort: null, dateTime: null, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullable(input, 'post');  
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
//primitivesNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullable/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {string: null, bool: null, sbyte: null, char: null, decimal: null, double: null, float: null, int: null, uint: null, long: null, ulong: null, short: null, ushort: null, dateTime: null, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullable(input, 'get');  
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
//primitivesNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullable/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {string: '', bool: true, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullable(input, 'post');  
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
//primitivesNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullable/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {string: '', bool: true, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullable(input, 'get');  
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
//primitivesNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullable/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullable(input, 'post');  
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
//primitivesNullable
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullable/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullable(input, 'get');  
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
//primitivesNullableArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullableArray/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [{string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullableArray(input, 'post');  
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
//primitivesNullableArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullableArray/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [{string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), },{string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 2, char: 'A', decimal: 3, double: 4, float: 5, int: 6, uint: 7, long: 8, ulong: 9, short: 10, ushort: 11, dateTime: new Date(2011,10,11), }];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullableArray(input, 'get');  
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
//primitivesNullableArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullableArray/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullableArray(input, 'post');  
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
//primitivesNullableArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullableArray/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [null,null,null];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullableArray(input, 'get');  
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
//primitivesNullableArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullableArray/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [{string: '', bool: true, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{string: '', bool: true, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{string: '', bool: true, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullableArray(input, 'post');  
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
//primitivesNullableArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullableArray/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [{string: '', bool: true, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{string: '', bool: true, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), },{string: '', bool: true, sbyte: -128, char: 'A', decimal: -7.922816E+028, double: -1.797693E+308, float: -3.402823E+038, int: -2147483648, uint: 0, long: Number.MIN_SAFE_INTEGER, ulong: 0, short: -32768, ushort: 0, dateTime: new Date(1,0,1), }];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullableArray(input, 'get');  
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
//primitivesNullableArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullableArray/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [{string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullableArray(input, 'post');  
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
//primitivesNullableArray
tests.push(
  {
    name: 'spagme.test.tests.objects.primitivestest/primitivesNullableArray/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = [{string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), },{string: 'abcdefghijklmnopqrstuvWxyz', bool: true, sbyte: 127, char: 'A', decimal: 7.922816E+028, double: 1.797693E+308, float: 3.402823E+038, int: 2147483647, uint: 4294967295, long: Number.MAX_SAFE_INTEGER, ulong: Number.MAX_SAFE_INTEGER, short: 32767, ushort: 65535, dateTime: new Date(9999,11,31), }];
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.primitivestest';
        const output = await api.primitivesNullableArray(input, 'get');  
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
