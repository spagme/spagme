export interface Primitives {
  bool: boolean;
  sbyte: number;
  char: string;
  decimal: number;
  double: number;
  float: number;
  int: number;
  uint: number;
  long: number;
  ulong: number;
  short: number;
  ushort: number;
  dateTime: Date;
}

export interface PrimitivesNullable {
  string?: string | null | undefined;
  bool?: boolean | null | undefined;
  sbyte?: number | null | undefined;
  char?: string | null | undefined;
  decimal?: number | null | undefined;
  double?: number | null | undefined;
  float?: number | null | undefined;
  int?: number | null | undefined;
  uint?: number | null | undefined;
  long?: number | null | undefined;
  ulong?: number | null | undefined;
  short?: number | null | undefined;
  ushort?: number | null | undefined;
  dateTime?: Date | null | undefined;
}

export interface ApiInterface {
  primitives: (input: Primitives | null, method?: string) => Promise<Primitives | null>,
  primitivesArray: (input: Array<Primitives | null> | null, method?: string) => Promise<Array<Primitives | null> | null>,
  primitivesArrayOfArrays: (input: Array<Array<Primitives | null> | null> | null, method?: string) => Promise<Array<Array<Primitives | null> | null> | null>,
  primitivesArraysOfLists: (input: Array<Array<Primitives | null> | null> | null, method?: string) => Promise<Array<Array<Primitives | null> | null> | null>,
  primitivesListOfArrays: (input: Array<Array<Primitives | null> | null> | null, method?: string) => Promise<Array<Array<Primitives | null> | null> | null>,
  primitivesNullable: (input: PrimitivesNullable | null, method?: string) => Promise<PrimitivesNullable | null>,
  primitivesNullableArray: (input: Array<PrimitivesNullable | null> | null, method?: string) => Promise<Array<PrimitivesNullable | null> | null>,
}

export abstract class ApiBase implements ApiInterface {
  abstract primitives: (input: Primitives | null, method?: string) => Promise<Primitives | null>;
  abstract primitivesArray: (input: Array<Primitives | null> | null, method?: string) => Promise<Array<Primitives | null> | null>;
  abstract primitivesArrayOfArrays: (input: Array<Array<Primitives | null> | null> | null, method?: string) => Promise<Array<Array<Primitives | null> | null> | null>;
  abstract primitivesArraysOfLists: (input: Array<Array<Primitives | null> | null> | null, method?: string) => Promise<Array<Array<Primitives | null> | null> | null>;
  abstract primitivesListOfArrays: (input: Array<Array<Primitives | null> | null> | null, method?: string) => Promise<Array<Array<Primitives | null> | null> | null>;
  abstract primitivesNullable: (input: PrimitivesNullable | null, method?: string) => Promise<PrimitivesNullable | null>;
  abstract primitivesNullableArray: (input: Array<PrimitivesNullable | null> | null, method?: string) => Promise<Array<PrimitivesNullable | null> | null>;
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
  primitives: (input: Primitives | null, method?: string)  => Promise<Primitives | null> = (input: Primitives | null, method?: string) : Promise<Primitives | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitives`, data);
    return this.post(`${this.url}/primitives`, data);
  }
  primitivesArray: (input: Array<Primitives | null> | null, method?: string)  => Promise<Array<Primitives | null> | null> = (input: Array<Primitives | null> | null, method?: string) : Promise<Array<Primitives | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitivesArray`, data);
    return this.post(`${this.url}/primitivesArray`, data);
  }
  primitivesArrayOfArrays: (input: Array<Array<Primitives | null> | null> | null, method?: string)  => Promise<Array<Array<Primitives | null> | null> | null> = (input: Array<Array<Primitives | null> | null> | null, method?: string) : Promise<Array<Array<Primitives | null> | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitivesArrayOfArrays`, data);
    return this.post(`${this.url}/primitivesArrayOfArrays`, data);
  }
  primitivesArraysOfLists: (input: Array<Array<Primitives | null> | null> | null, method?: string)  => Promise<Array<Array<Primitives | null> | null> | null> = (input: Array<Array<Primitives | null> | null> | null, method?: string) : Promise<Array<Array<Primitives | null> | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitivesArraysOfLists`, data);
    return this.post(`${this.url}/primitivesArraysOfLists`, data);
  }
  primitivesListOfArrays: (input: Array<Array<Primitives | null> | null> | null, method?: string)  => Promise<Array<Array<Primitives | null> | null> | null> = (input: Array<Array<Primitives | null> | null> | null, method?: string) : Promise<Array<Array<Primitives | null> | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitivesListOfArrays`, data);
    return this.post(`${this.url}/primitivesListOfArrays`, data);
  }
  primitivesNullable: (input: PrimitivesNullable | null, method?: string)  => Promise<PrimitivesNullable | null> = (input: PrimitivesNullable | null, method?: string) : Promise<PrimitivesNullable | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitivesNullable`, data);
    return this.post(`${this.url}/primitivesNullable`, data);
  }
  primitivesNullableArray: (input: Array<PrimitivesNullable | null> | null, method?: string)  => Promise<Array<PrimitivesNullable | null> | null> = (input: Array<PrimitivesNullable | null> | null, method?: string) : Promise<Array<PrimitivesNullable | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitivesNullableArray`, data);
    return this.post(`${this.url}/primitivesNullableArray`, data);
  }
}

