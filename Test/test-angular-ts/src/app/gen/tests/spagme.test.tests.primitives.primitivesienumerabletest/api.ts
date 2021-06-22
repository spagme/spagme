export interface ApiInterface {
  booleanArray: (input: Array<boolean> | null, method?: string) => Promise<Array<boolean> | null>,
  booleanNullableArray: (input: Array<boolean | null> | null, method?: string) => Promise<Array<boolean | null> | null>,
  charArray: (input: Array<string> | null, method?: string) => Promise<Array<string> | null>,
  charNullableArray: (input: Array<string | null> | null, method?: string) => Promise<Array<string | null> | null>,
  dateTimeArray: (input: Array<Date> | null, method?: string) => Promise<Array<Date> | null>,
  dateTimeNullableArray: (input: Array<Date | null> | null, method?: string) => Promise<Array<Date | null> | null>,
  decimalArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>,
  decimalNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>,
  doubleArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>,
  doubleNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>,
  floatArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>,
  floatNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>,
  intArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>,
  intNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>,
  longArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>,
  longNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>,
  sbyteArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>,
  sbyteNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>,
  shortArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>,
  shortNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>,
  stringArray: (input: Array<string | null> | null, method?: string) => Promise<Array<string | null> | null>,
  uintArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>,
  uintArrayNullable: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>,
  ulongArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>,
  ulongArrayNullable: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>,
  ushortArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>,
  ushortArrayNullable: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>,
}

export abstract class ApiBase implements ApiInterface {
  abstract booleanArray: (input: Array<boolean> | null, method?: string) => Promise<Array<boolean> | null>;
  abstract booleanNullableArray: (input: Array<boolean | null> | null, method?: string) => Promise<Array<boolean | null> | null>;
  abstract charArray: (input: Array<string> | null, method?: string) => Promise<Array<string> | null>;
  abstract charNullableArray: (input: Array<string | null> | null, method?: string) => Promise<Array<string | null> | null>;
  abstract dateTimeArray: (input: Array<Date> | null, method?: string) => Promise<Array<Date> | null>;
  abstract dateTimeNullableArray: (input: Array<Date | null> | null, method?: string) => Promise<Array<Date | null> | null>;
  abstract decimalArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>;
  abstract decimalNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>;
  abstract doubleArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>;
  abstract doubleNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>;
  abstract floatArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>;
  abstract floatNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>;
  abstract intArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>;
  abstract intNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>;
  abstract longArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>;
  abstract longNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>;
  abstract sbyteArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>;
  abstract sbyteNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>;
  abstract shortArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>;
  abstract shortNullableArray: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>;
  abstract stringArray: (input: Array<string | null> | null, method?: string) => Promise<Array<string | null> | null>;
  abstract uintArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>;
  abstract uintArrayNullable: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>;
  abstract ulongArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>;
  abstract ulongArrayNullable: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>;
  abstract ushortArray: (input: Array<number> | null, method?: string) => Promise<Array<number> | null>;
  abstract ushortArrayNullable: (input: Array<number | null> | null, method?: string) => Promise<Array<number | null> | null>;
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
  booleanArray: (input: Array<boolean> | null, method?: string)  => Promise<Array<boolean> | null> = (input: Array<boolean> | null, method?: string) : Promise<Array<boolean> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/booleanArray`, data);
    return this.post(`${this.url}/booleanArray`, data);
  }
  booleanNullableArray: (input: Array<boolean | null> | null, method?: string)  => Promise<Array<boolean | null> | null> = (input: Array<boolean | null> | null, method?: string) : Promise<Array<boolean | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/booleanNullableArray`, data);
    return this.post(`${this.url}/booleanNullableArray`, data);
  }
  charArray: (input: Array<string> | null, method?: string)  => Promise<Array<string> | null> = (input: Array<string> | null, method?: string) : Promise<Array<string> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/charArray`, data);
    return this.post(`${this.url}/charArray`, data);
  }
  charNullableArray: (input: Array<string | null> | null, method?: string)  => Promise<Array<string | null> | null> = (input: Array<string | null> | null, method?: string) : Promise<Array<string | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/charNullableArray`, data);
    return this.post(`${this.url}/charNullableArray`, data);
  }
  dateTimeArray: (input: Array<Date> | null, method?: string)  => Promise<Array<Date> | null> = (input: Array<Date> | null, method?: string) : Promise<Array<Date> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/dateTimeArray`, data);
    return this.post(`${this.url}/dateTimeArray`, data);
  }
  dateTimeNullableArray: (input: Array<Date | null> | null, method?: string)  => Promise<Array<Date | null> | null> = (input: Array<Date | null> | null, method?: string) : Promise<Array<Date | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/dateTimeNullableArray`, data);
    return this.post(`${this.url}/dateTimeNullableArray`, data);
  }
  decimalArray: (input: Array<number> | null, method?: string)  => Promise<Array<number> | null> = (input: Array<number> | null, method?: string) : Promise<Array<number> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/decimalArray`, data);
    return this.post(`${this.url}/decimalArray`, data);
  }
  decimalNullableArray: (input: Array<number | null> | null, method?: string)  => Promise<Array<number | null> | null> = (input: Array<number | null> | null, method?: string) : Promise<Array<number | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/decimalNullableArray`, data);
    return this.post(`${this.url}/decimalNullableArray`, data);
  }
  doubleArray: (input: Array<number> | null, method?: string)  => Promise<Array<number> | null> = (input: Array<number> | null, method?: string) : Promise<Array<number> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/doubleArray`, data);
    return this.post(`${this.url}/doubleArray`, data);
  }
  doubleNullableArray: (input: Array<number | null> | null, method?: string)  => Promise<Array<number | null> | null> = (input: Array<number | null> | null, method?: string) : Promise<Array<number | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/doubleNullableArray`, data);
    return this.post(`${this.url}/doubleNullableArray`, data);
  }
  floatArray: (input: Array<number> | null, method?: string)  => Promise<Array<number> | null> = (input: Array<number> | null, method?: string) : Promise<Array<number> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/floatArray`, data);
    return this.post(`${this.url}/floatArray`, data);
  }
  floatNullableArray: (input: Array<number | null> | null, method?: string)  => Promise<Array<number | null> | null> = (input: Array<number | null> | null, method?: string) : Promise<Array<number | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/floatNullableArray`, data);
    return this.post(`${this.url}/floatNullableArray`, data);
  }
  intArray: (input: Array<number> | null, method?: string)  => Promise<Array<number> | null> = (input: Array<number> | null, method?: string) : Promise<Array<number> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/intArray`, data);
    return this.post(`${this.url}/intArray`, data);
  }
  intNullableArray: (input: Array<number | null> | null, method?: string)  => Promise<Array<number | null> | null> = (input: Array<number | null> | null, method?: string) : Promise<Array<number | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/intNullableArray`, data);
    return this.post(`${this.url}/intNullableArray`, data);
  }
  longArray: (input: Array<number> | null, method?: string)  => Promise<Array<number> | null> = (input: Array<number> | null, method?: string) : Promise<Array<number> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/longArray`, data);
    return this.post(`${this.url}/longArray`, data);
  }
  longNullableArray: (input: Array<number | null> | null, method?: string)  => Promise<Array<number | null> | null> = (input: Array<number | null> | null, method?: string) : Promise<Array<number | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/longNullableArray`, data);
    return this.post(`${this.url}/longNullableArray`, data);
  }
  sbyteArray: (input: Array<number> | null, method?: string)  => Promise<Array<number> | null> = (input: Array<number> | null, method?: string) : Promise<Array<number> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/sbyteArray`, data);
    return this.post(`${this.url}/sbyteArray`, data);
  }
  sbyteNullableArray: (input: Array<number | null> | null, method?: string)  => Promise<Array<number | null> | null> = (input: Array<number | null> | null, method?: string) : Promise<Array<number | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/sbyteNullableArray`, data);
    return this.post(`${this.url}/sbyteNullableArray`, data);
  }
  shortArray: (input: Array<number> | null, method?: string)  => Promise<Array<number> | null> = (input: Array<number> | null, method?: string) : Promise<Array<number> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/shortArray`, data);
    return this.post(`${this.url}/shortArray`, data);
  }
  shortNullableArray: (input: Array<number | null> | null, method?: string)  => Promise<Array<number | null> | null> = (input: Array<number | null> | null, method?: string) : Promise<Array<number | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/shortNullableArray`, data);
    return this.post(`${this.url}/shortNullableArray`, data);
  }
  stringArray: (input: Array<string | null> | null, method?: string)  => Promise<Array<string | null> | null> = (input: Array<string | null> | null, method?: string) : Promise<Array<string | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/stringArray`, data);
    return this.post(`${this.url}/stringArray`, data);
  }
  uintArray: (input: Array<number> | null, method?: string)  => Promise<Array<number> | null> = (input: Array<number> | null, method?: string) : Promise<Array<number> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/uintArray`, data);
    return this.post(`${this.url}/uintArray`, data);
  }
  uintArrayNullable: (input: Array<number | null> | null, method?: string)  => Promise<Array<number | null> | null> = (input: Array<number | null> | null, method?: string) : Promise<Array<number | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/uintArrayNullable`, data);
    return this.post(`${this.url}/uintArrayNullable`, data);
  }
  ulongArray: (input: Array<number> | null, method?: string)  => Promise<Array<number> | null> = (input: Array<number> | null, method?: string) : Promise<Array<number> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/ulongArray`, data);
    return this.post(`${this.url}/ulongArray`, data);
  }
  ulongArrayNullable: (input: Array<number | null> | null, method?: string)  => Promise<Array<number | null> | null> = (input: Array<number | null> | null, method?: string) : Promise<Array<number | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/ulongArrayNullable`, data);
    return this.post(`${this.url}/ulongArrayNullable`, data);
  }
  ushortArray: (input: Array<number> | null, method?: string)  => Promise<Array<number> | null> = (input: Array<number> | null, method?: string) : Promise<Array<number> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/ushortArray`, data);
    return this.post(`${this.url}/ushortArray`, data);
  }
  ushortArrayNullable: (input: Array<number | null> | null, method?: string)  => Promise<Array<number | null> | null> = (input: Array<number | null> | null, method?: string) : Promise<Array<number | null> | null> => {
    const data: any = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/ushortArrayNullable`, data);
    return this.post(`${this.url}/ushortArrayNullable`, data);
  }
}

