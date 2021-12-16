export interface Circular {
  name: string | null;
  child: Circular | null;
}

export interface ApiInterface {
  circular: (input: Circular | null, method?: string) => Promise<Circular | null>,
  circularArrayOfArrays: (input: Array<Array<Circular | null> | null> | null, method?: string) => Promise<Array<Array<Circular | null> | null> | null>,
  circularArraysOfLists: (input: Array<Array<Circular | null> | null> | null, method?: string) => Promise<Array<Array<Circular | null> | null> | null>,
  circularListOfArrays: (input: Array<Array<Circular | null> | null> | null, method?: string) => Promise<Array<Array<Circular | null> | null> | null>,
}

export abstract class ApiBase implements ApiInterface {
  abstract circular: (input: Circular | null, method?: string) => Promise<Circular | null>;
  abstract circularArrayOfArrays: (input: Array<Array<Circular | null> | null> | null, method?: string) => Promise<Array<Array<Circular | null> | null> | null>;
  abstract circularArraysOfLists: (input: Array<Array<Circular | null> | null> | null, method?: string) => Promise<Array<Array<Circular | null> | null> | null>;
  abstract circularListOfArrays: (input: Array<Array<Circular | null> | null> | null, method?: string) => Promise<Array<Array<Circular | null> | null> | null>;
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
  circular: (input: Circular | null, method?: string)  => Promise<Circular | null> = (input: Circular | null, method?: string) : Promise<Circular | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/circular`, data);
    return this.post(`${this.url}/circular`, data);
  }
  circularArrayOfArrays: (input: Array<Array<Circular | null> | null> | null, method?: string)  => Promise<Array<Array<Circular | null> | null> | null> = (input: Array<Array<Circular | null> | null> | null, method?: string) : Promise<Array<Array<Circular | null> | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/circularArrayOfArrays`, data);
    return this.post(`${this.url}/circularArrayOfArrays`, data);
  }
  circularArraysOfLists: (input: Array<Array<Circular | null> | null> | null, method?: string)  => Promise<Array<Array<Circular | null> | null> | null> = (input: Array<Array<Circular | null> | null> | null, method?: string) : Promise<Array<Array<Circular | null> | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/circularArraysOfLists`, data);
    return this.post(`${this.url}/circularArraysOfLists`, data);
  }
  circularListOfArrays: (input: Array<Array<Circular | null> | null> | null, method?: string)  => Promise<Array<Array<Circular | null> | null> | null> = (input: Array<Array<Circular | null> | null> | null, method?: string) : Promise<Array<Array<Circular | null> | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/circularListOfArrays`, data);
    return this.post(`${this.url}/circularListOfArrays`, data);
  }
}

