export enum Color {
  Black = 10,
  Red = 100,
  Blue = 101,
}

export interface ApiInterface {
  arrayNotNullable: (input: Array<Color> | null, method?: string) => Promise<Array<Color> | null>,
  arrayNullable: (input: Array<Color | null> | null, method?: string) => Promise<Array<Color | null> | null>,
  enum: (input: Color, method?: string) => Promise<Color>,
  enumList: (input: Array<Color> | null, method?: string) => Promise<Array<Color> | null>,
  enumListNullable: (input: Array<Color | null> | null, method?: string) => Promise<Array<Color | null> | null>,
  enumNullable: (input: Color | null, method?: string) => Promise<Color | null>,
}

export abstract class ApiBase implements ApiInterface {
  abstract arrayNotNullable: (input: Array<Color> | null, method?: string) => Promise<Array<Color> | null>;
  abstract arrayNullable: (input: Array<Color | null> | null, method?: string) => Promise<Array<Color | null> | null>;
  abstract enum: (input: Color, method?: string) => Promise<Color>;
  abstract enumList: (input: Array<Color> | null, method?: string) => Promise<Array<Color> | null>;
  abstract enumListNullable: (input: Array<Color | null> | null, method?: string) => Promise<Array<Color | null> | null>;
  abstract enumNullable: (input: Color | null, method?: string) => Promise<Color | null>;
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
  arrayNotNullable: (input: Array<Color> | null, method?: string)  => Promise<Array<Color> | null> = (input: Array<Color> | null, method?: string) : Promise<Array<Color> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/arrayNotNullable`, data);
    return this.post(`${this.url}/arrayNotNullable`, data);
  }
  arrayNullable: (input: Array<Color | null> | null, method?: string)  => Promise<Array<Color | null> | null> = (input: Array<Color | null> | null, method?: string) : Promise<Array<Color | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/arrayNullable`, data);
    return this.post(`${this.url}/arrayNullable`, data);
  }
  enum: (input: Color, method?: string)  => Promise<Color> = (input: Color, method?: string) : Promise<Color> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/enum`, data);
    return this.post(`${this.url}/enum`, data);
  }
  enumList: (input: Array<Color> | null, method?: string)  => Promise<Array<Color> | null> = (input: Array<Color> | null, method?: string) : Promise<Array<Color> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/enumList`, data);
    return this.post(`${this.url}/enumList`, data);
  }
  enumListNullable: (input: Array<Color | null> | null, method?: string)  => Promise<Array<Color | null> | null> = (input: Array<Color | null> | null, method?: string) : Promise<Array<Color | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/enumListNullable`, data);
    return this.post(`${this.url}/enumListNullable`, data);
  }
  enumNullable: (input: Color | null, method?: string)  => Promise<Color | null> = (input: Color | null, method?: string) : Promise<Color | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/enumNullable`, data);
    return this.post(`${this.url}/enumNullable`, data);
  }
}

