const { api } = require('./api.js');
const { diff } = require('deep-object-diff');

const tests = [];

//car
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {volvoWheels: 6, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {volvoWheels: 6, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car2
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car2/default/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {fordRoof: 'abcdefghijklmnopqrstuvWxyz', brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car2(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car2
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car2/default/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {fordRoof: 'abcdefghijklmnopqrstuvWxyz', brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car2(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car2
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car2/nullable/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {fordRoof: null, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car2(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car2
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car2/nullable/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {fordRoof: null, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car2(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car2
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car2/min/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {fordRoof: '', brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car2(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car2
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car2/min/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {fordRoof: '', brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car2(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car2
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car2/max/post',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {fordRoof: 'abcdefghijklmnopqrstuvWxyz', brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car2(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        console.log(e);
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//car2
tests.push(
  {
    name: 'spagme.test.tests.objects.abstracttest/car2/max/get',
    status: 'NONE',
    execute: async (me, url) => {
      try {
        const input = {fordRoof: 'abcdefghijklmnopqrstuvWxyz', brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        api.api.url = url + '/spagme.test.tests.objects.abstracttest';
        const output = await api.car2(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
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
