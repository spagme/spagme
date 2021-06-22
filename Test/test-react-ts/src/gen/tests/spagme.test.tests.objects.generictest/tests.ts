import * as api from './api';
import Test from '../../../Test';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

export const tests: Array<Test> = [];

//car
tests.push(
  {
    name: 'spagme.test.tests.objects.generictest/car/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: 6, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: 6, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car2/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: 'abcdefghijklmnopqrstuvWxyz', brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car2(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car2/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: 'abcdefghijklmnopqrstuvWxyz', brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car2(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car2/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: null, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car2(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car2/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: null, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car2(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car2/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: '', brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car2(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car2/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: '', brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car2(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car2/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: 'abcdefghijklmnopqrstuvWxyz', brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car2(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
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
    name: 'spagme.test.tests.objects.generictest/car2/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: 'abcdefghijklmnopqrstuvWxyz', brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.generictest').car2(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
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
