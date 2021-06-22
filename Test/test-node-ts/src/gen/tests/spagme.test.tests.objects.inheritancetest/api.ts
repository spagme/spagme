export interface Car {
  brand?: string | null | undefined;
  color: Color;
  roofColor?: Color | null | null | undefined;
  options1?: Array<Color | null | null> | null | undefined;
  options2?: Array<Color> | null | undefined;
}

export interface VolvoCar extends Car {
  volvoWheels: number;
}

export interface FordCar extends Car {
  fordRoof?: string | null | undefined;
}

export enum Color {
  Black = 10,
  Red = 100,
  Blue = 101,
}

export interface PolestarCar extends VolvoCar {
  polestarEngine?: string | null | undefined;
}

export interface ApiInterface {
  arrayOfCars: (input: Array<Car | null> | null, method?: string) => Promise<Array<Car | null> | null>,
  arrayOfPolestarCars: (input: Array<PolestarCar | null> | null, method?: string) => Promise<Array<PolestarCar | null> | null>,
  arrayOfVolvoCars: (input: Array<VolvoCar | null> | null, method?: string) => Promise<Array<VolvoCar | null> | null>,
  car: (input: Car | null, method?: string) => Promise<Car | null>,
  fordCar: (input: FordCar | null, method?: string) => Promise<FordCar | null>,
  iEnumerableOfCars: (input: Array<Car | null> | null, method?: string) => Promise<Array<Car | null> | null>,
  iEnumerableOfPolestarCars: (input: Array<PolestarCar | null> | null, method?: string) => Promise<Array<PolestarCar | null> | null>,
  iEnumerableOfVolvoCars: (input: Array<VolvoCar | null> | null, method?: string) => Promise<Array<VolvoCar | null> | null>,
  polestarCar: (input: PolestarCar | null, method?: string) => Promise<PolestarCar | null>,
  volvoCar: (input: VolvoCar | null, method?: string) => Promise<VolvoCar | null>,
}

export abstract class ApiBase implements ApiInterface {
  abstract arrayOfCars: (input: Array<Car | null> | null, method?: string) => Promise<Array<Car | null> | null>;
  abstract arrayOfPolestarCars: (input: Array<PolestarCar | null> | null, method?: string) => Promise<Array<PolestarCar | null> | null>;
  abstract arrayOfVolvoCars: (input: Array<VolvoCar | null> | null, method?: string) => Promise<Array<VolvoCar | null> | null>;
  abstract car: (input: Car | null, method?: string) => Promise<Car | null>;
  abstract fordCar: (input: FordCar | null, method?: string) => Promise<FordCar | null>;
  abstract iEnumerableOfCars: (input: Array<Car | null> | null, method?: string) => Promise<Array<Car | null> | null>;
  abstract iEnumerableOfPolestarCars: (input: Array<PolestarCar | null> | null, method?: string) => Promise<Array<PolestarCar | null> | null>;
  abstract iEnumerableOfVolvoCars: (input: Array<VolvoCar | null> | null, method?: string) => Promise<Array<VolvoCar | null> | null>;
  abstract polestarCar: (input: PolestarCar | null, method?: string) => Promise<PolestarCar | null>;
  abstract volvoCar: (input: VolvoCar | null, method?: string) => Promise<VolvoCar | null>;
}

export class Api implements ApiBase {
  url: string;
  init: RequestInit;
  constructor(url: string, init: RequestInit = {}) {
    this.url = url;
    this.init = init;
  }
  private revive(key: any, value: any): any {
    if (typeof value === 'string') {
      if(/\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])T(?:[0-1]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+|)(?:Z|(?:\+|-)(?:\d{2}):?(?:\d{2}))/.exec(value)) {
        return new Date(value);
      }
    }
    return value;
  };
  private post(url: string, data: any) : Promise<any> {
    return new Promise<any>( (resolve, reject) => {
      let formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key] as string)
      });
      fetch(url, {
        ...this.init,
        method: 'post',
        body: formData,
      }).then((resp) => {
        if(resp.ok) {
          resp.text().then((txt)=> {
            const output = JSON.parse(txt, this.revive);
            resolve(output);
          });
        }
        else {
          reject({status: resp.status, statusText: resp.statusText, reason: null});
        }
      }).catch((e) => {
        reject({status: null, statusText: null, reason: '' + e});
      })
    });
  }
  private get(url: string, data: any) : Promise<any> {
    return new Promise<any>( (resolve, reject) => {
      const u = new URL(url);
      Object.keys(data).forEach((key) => {
        u.searchParams.append(key, data[key] as string)
      });
      fetch(u.toString(), {
        ...this.init,
        method: 'get'
      }).then((resp) => {
        if(resp.ok) {
          resp.text().then((txt)=> {
          const output = JSON.parse(txt, this.revive);
            resolve(output);
          });
        }
        else {
          reject({status: resp.status, statusText: resp.statusText, reason: null});
        }
      }).catch((e) => {
        reject({status: null, statusText: null, reason: '' + e});
      })
    });
  }
  arrayOfCars: (input: Array<Car | null> | null, method?: string)  => Promise<Array<Car | null> | null> = (input: Array<Car | null> | null, method?: string) : Promise<Array<Car | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/arrayOfCars`, data);
    return this.post(`${this.url}/arrayOfCars`, data);
  }
  arrayOfPolestarCars: (input: Array<PolestarCar | null> | null, method?: string)  => Promise<Array<PolestarCar | null> | null> = (input: Array<PolestarCar | null> | null, method?: string) : Promise<Array<PolestarCar | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/arrayOfPolestarCars`, data);
    return this.post(`${this.url}/arrayOfPolestarCars`, data);
  }
  arrayOfVolvoCars: (input: Array<VolvoCar | null> | null, method?: string)  => Promise<Array<VolvoCar | null> | null> = (input: Array<VolvoCar | null> | null, method?: string) : Promise<Array<VolvoCar | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/arrayOfVolvoCars`, data);
    return this.post(`${this.url}/arrayOfVolvoCars`, data);
  }
  car: (input: Car | null, method?: string)  => Promise<Car | null> = (input: Car | null, method?: string) : Promise<Car | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/car`, data);
    return this.post(`${this.url}/car`, data);
  }
  fordCar: (input: FordCar | null, method?: string)  => Promise<FordCar | null> = (input: FordCar | null, method?: string) : Promise<FordCar | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/fordCar`, data);
    return this.post(`${this.url}/fordCar`, data);
  }
  iEnumerableOfCars: (input: Array<Car | null> | null, method?: string)  => Promise<Array<Car | null> | null> = (input: Array<Car | null> | null, method?: string) : Promise<Array<Car | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/iEnumerableOfCars`, data);
    return this.post(`${this.url}/iEnumerableOfCars`, data);
  }
  iEnumerableOfPolestarCars: (input: Array<PolestarCar | null> | null, method?: string)  => Promise<Array<PolestarCar | null> | null> = (input: Array<PolestarCar | null> | null, method?: string) : Promise<Array<PolestarCar | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/iEnumerableOfPolestarCars`, data);
    return this.post(`${this.url}/iEnumerableOfPolestarCars`, data);
  }
  iEnumerableOfVolvoCars: (input: Array<VolvoCar | null> | null, method?: string)  => Promise<Array<VolvoCar | null> | null> = (input: Array<VolvoCar | null> | null, method?: string) : Promise<Array<VolvoCar | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/iEnumerableOfVolvoCars`, data);
    return this.post(`${this.url}/iEnumerableOfVolvoCars`, data);
  }
  polestarCar: (input: PolestarCar | null, method?: string)  => Promise<PolestarCar | null> = (input: PolestarCar | null, method?: string) : Promise<PolestarCar | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/polestarCar`, data);
    return this.post(`${this.url}/polestarCar`, data);
  }
  volvoCar: (input: VolvoCar | null, method?: string)  => Promise<VolvoCar | null> = (input: VolvoCar | null, method?: string) : Promise<VolvoCar | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/volvoCar`, data);
    return this.post(`${this.url}/volvoCar`, data);
  }
}

