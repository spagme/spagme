import * as api from './api';
import Test from '../../../Test';
// eslint-disable-next-line
import { diff } from 'deep-object-diff';

export const tests: Array<Test> = [];

//arrayOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfCars/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfCars/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfCars/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfCars/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfCars/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [{brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfCars/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [{brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfCars/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfCars/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfPolestarCars/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfPolestarCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfPolestarCars/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfPolestarCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfPolestarCars/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfPolestarCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfPolestarCars/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfPolestarCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfPolestarCars/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [{polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfPolestarCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfPolestarCars/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [{polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfPolestarCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfPolestarCars/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfPolestarCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfPolestarCars/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfPolestarCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfVolvoCars/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [{volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfVolvoCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfVolvoCars/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [{volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfVolvoCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfVolvoCars/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfVolvoCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfVolvoCars/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfVolvoCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfVolvoCars/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [{volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfVolvoCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfVolvoCars/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [{volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfVolvoCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfVolvoCars/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [{volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfVolvoCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//arrayOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/arrayOfVolvoCars/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [{volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').arrayOfVolvoCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
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
    name: 'spagme.test.tests.objects.inheritancetest/car/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Car | null = {brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').car(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
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
    name: 'spagme.test.tests.objects.inheritancetest/car/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Car | null = {brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').car(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
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
    name: 'spagme.test.tests.objects.inheritancetest/car/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Car | null = {brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').car(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
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
    name: 'spagme.test.tests.objects.inheritancetest/car/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Car | null = {brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').car(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
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
    name: 'spagme.test.tests.objects.inheritancetest/car/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Car | null = {brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').car(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
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
    name: 'spagme.test.tests.objects.inheritancetest/car/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Car | null = {brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').car(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
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
    name: 'spagme.test.tests.objects.inheritancetest/car/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Car | null = {brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').car(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
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
    name: 'spagme.test.tests.objects.inheritancetest/car/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.Car | null = {brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').car(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//fordCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/fordCar/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: 'abcdefghijklmnopqrstuvWxyz', brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').fordCar(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//fordCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/fordCar/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: 'abcdefghijklmnopqrstuvWxyz', brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').fordCar(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//fordCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/fordCar/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: null, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').fordCar(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//fordCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/fordCar/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: null, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').fordCar(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//fordCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/fordCar/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: '', brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').fordCar(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//fordCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/fordCar/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: '', brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').fordCar(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//fordCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/fordCar/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: 'abcdefghijklmnopqrstuvWxyz', brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').fordCar(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//fordCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/fordCar/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.FordCar | null = {fordRoof: 'abcdefghijklmnopqrstuvWxyz', brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').fordCar(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfCars/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfCars/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfCars/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfCars/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfCars/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [{brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfCars/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [{brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfCars/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfCars/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.Car | null> | null = [{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfPolestarCars/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfPolestarCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfPolestarCars/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfPolestarCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfPolestarCars/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfPolestarCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfPolestarCars/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfPolestarCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfPolestarCars/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [{polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfPolestarCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfPolestarCars/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [{polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfPolestarCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfPolestarCars/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfPolestarCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfPolestarCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfPolestarCars/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.PolestarCar | null> | null = [{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfPolestarCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfVolvoCars/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [{volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfVolvoCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfVolvoCars/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [{volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfVolvoCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfVolvoCars/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfVolvoCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfVolvoCars/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [null,null,null];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfVolvoCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfVolvoCars/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [{volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfVolvoCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfVolvoCars/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [{volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], },{volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfVolvoCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfVolvoCars/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [{volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfVolvoCars(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//iEnumerableOfVolvoCars
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/iEnumerableOfVolvoCars/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: Array<api.VolvoCar | null> | null = [{volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], },{volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], }];
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').iEnumerableOfVolvoCars(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//polestarCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/polestarCar/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.PolestarCar | null = {polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').polestarCar(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//polestarCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/polestarCar/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.PolestarCar | null = {polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').polestarCar(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//polestarCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/polestarCar/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.PolestarCar | null = {polestarEngine: null, volvoWheels: 6, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').polestarCar(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//polestarCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/polestarCar/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.PolestarCar | null = {polestarEngine: null, volvoWheels: 6, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').polestarCar(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//polestarCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/polestarCar/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.PolestarCar | null = {polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').polestarCar(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//polestarCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/polestarCar/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.PolestarCar | null = {polestarEngine: '', volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').polestarCar(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//polestarCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/polestarCar/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.PolestarCar | null = {polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').polestarCar(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//polestarCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/polestarCar/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.PolestarCar | null = {polestarEngine: 'abcdefghijklmnopqrstuvWxyz', volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').polestarCar(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//volvoCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/volvoCar/default/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').volvoCar(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//volvoCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/volvoCar/default/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: 6, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').volvoCar(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//volvoCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/volvoCar/nullable/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: 6, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').volvoCar(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//volvoCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/volvoCar/nullable/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: 6, brand: null, color: api.Color.Black, roofColor: null, options1: null, options2: null, };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').volvoCar(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//volvoCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/volvoCar/min/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').volvoCar(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//volvoCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/volvoCar/min/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: -2147483648, brand: '', color: api.Color.Black, roofColor: api.Color.Black, options1: [api.Color.Black,api.Color.Black,api.Color.Black], options2: [api.Color.Black,api.Color.Black,api.Color.Black], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').volvoCar(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//volvoCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/volvoCar/max/post',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').volvoCar(input, 'post');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
      }
      catch(e) {
        me.status = 'ERROR';
        me.error = {...e};
        return Promise.resolve(undefined);
      }
    },
  }
)
//volvoCar
tests.push(
  {
    name: 'spagme.test.tests.objects.inheritancetest/volvoCar/max/get',
    status: 'NONE',
    execute: async (me: Test, url: string): Promise<void> => {
      try {
        const input: api.VolvoCar | null = {volvoWheels: 2147483647, brand: 'abcdefghijklmnopqrstuvWxyz', color: api.Color.Blue, roofColor: api.Color.Blue, options1: [api.Color.Blue,api.Color.Blue,api.Color.Blue], options2: [api.Color.Blue,api.Color.Blue,api.Color.Blue], };
        me.input = {...input}; 
        const output = await new api.Api(url + '/spagme.test.tests.objects.inheritancetest').volvoCar(input, 'get');  
        me.output = {...output};
        me.status = 'ERROR';
        if(Object.keys(diff(input, output as object)).length === 0) me.status = 'SUCCESS';
        return Promise.resolve(undefined);
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
