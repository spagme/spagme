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

export interface ApiInterface {
  car: (input: VolvoCar | null, method?: string) => Promise<VolvoCar | null>,
  car2: (input: FordCar | null, method?: string) => Promise<FordCar | null>,
}

export abstract class ApiBase implements ApiInterface {
  abstract car: (input: VolvoCar | null, method?: string) => Promise<VolvoCar | null>;
  abstract car2: (input: FordCar | null, method?: string) => Promise<FordCar | null>;
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
  car: (input: VolvoCar | null, method?: string)  => Promise<VolvoCar | null> = (input: VolvoCar | null, method?: string) : Promise<VolvoCar | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/car`, data);
    return this.post(`${this.url}/car`, data);
  }
  car2: (input: FordCar | null, method?: string)  => Promise<FordCar | null> = (input: FordCar | null, method?: string) : Promise<FordCar | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/car2`, data);
    return this.post(`${this.url}/car2`, data);
  }
}

