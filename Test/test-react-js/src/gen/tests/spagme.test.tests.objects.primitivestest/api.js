export class Primitives {
  bool;
  sbyte;
  char;
  decimal;
  double;
  float;
  int;
  uint;
  long;
  ulong;
  short;
  ushort;
  dateTime;
  /**
  * @param {boolean} bool
  * @param {number} sbyte
  * @param {string} char
  * @param {number} decimal
  * @param {number} double
  * @param {number} float
  * @param {number} int
  * @param {number} uint
  * @param {number} long
  * @param {number} ulong
  * @param {number} short
  * @param {number} ushort
  * @param {Date} dateTime
  */
  constructor(bool, sbyte, char, decimal, double, float, int, uint, long, ulong, short, ushort, dateTime) {
    this.bool = bool;
    this.sbyte = sbyte;
    this.char = char;
    this.decimal = decimal;
    this.double = double;
    this.float = float;
    this.int = int;
    this.uint = uint;
    this.long = long;
    this.ulong = ulong;
    this.short = short;
    this.ushort = ushort;
    this.dateTime = dateTime;
  }
}

export class PrimitivesNullable {
  string;
  bool;
  sbyte;
  char;
  decimal;
  double;
  float;
  int;
  uint;
  long;
  ulong;
  short;
  ushort;
  dateTime;
  /**
  * @param {string} string
  * @param {boolean} bool
  * @param {number} sbyte
  * @param {string} char
  * @param {number} decimal
  * @param {number} double
  * @param {number} float
  * @param {number} int
  * @param {number} uint
  * @param {number} long
  * @param {number} ulong
  * @param {number} short
  * @param {number} ushort
  * @param {Date} dateTime
  */
  constructor(string, bool, sbyte, char, decimal, double, float, int, uint, long, ulong, short, ushort, dateTime) {
    this.string = string;
    this.bool = bool;
    this.sbyte = sbyte;
    this.char = char;
    this.decimal = decimal;
    this.double = double;
    this.float = float;
    this.int = int;
    this.uint = uint;
    this.long = long;
    this.ulong = ulong;
    this.short = short;
    this.ushort = ushort;
    this.dateTime = dateTime;
  }
}

export class Api {
  url= "";
  init= {};
  revive = (key, value) => {
    if (value !== null && value !== undefined) {
      if(/\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])T(?:[0-1]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+|)(?:Z|(?:\+|-)(?:\d{2}):?(?:\d{2}))/.exec(value)) {
        return new Date(value);
      }
    }
    return value;
  };
  post = (url, data) => {
    return new Promise( (resolve, reject) => {
      let formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
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
  };
  get = (url, data) => {
    return new Promise( (resolve, reject) => {
      const u = new URL(url);
      Object.keys(data).forEach((key) => {
        u.searchParams.append(key, data[key])
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
  };
  /**
  * @param {Primitives} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Primitives>}
  */
  primitives = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitives`, data);
    return this.post(`${this.url}/primitives`, data);
  }
  /**
  * @param {Array<Primitives>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<Primitives>>}
  */
  primitivesArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitivesArray`, data);
    return this.post(`${this.url}/primitivesArray`, data);
  }
  /**
  * @param {Array<Array<Primitives>>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<Array<Primitives>>>}
  */
  primitivesArrayOfArrays = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitivesArrayOfArrays`, data);
    return this.post(`${this.url}/primitivesArrayOfArrays`, data);
  }
  /**
  * @param {Array<Array<Primitives>>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<Array<Primitives>>>}
  */
  primitivesArraysOfLists = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitivesArraysOfLists`, data);
    return this.post(`${this.url}/primitivesArraysOfLists`, data);
  }
  /**
  * @param {Array<Array<Primitives>>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<Array<Primitives>>>}
  */
  primitivesListOfArrays = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitivesListOfArrays`, data);
    return this.post(`${this.url}/primitivesListOfArrays`, data);
  }
  /**
  * @param {PrimitivesNullable} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<PrimitivesNullable>}
  */
  primitivesNullable = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitivesNullable`, data);
    return this.post(`${this.url}/primitivesNullable`, data);
  }
  /**
  * @param {Array<PrimitivesNullable>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<PrimitivesNullable>>}
  */
  primitivesNullableArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/primitivesNullableArray`, data);
    return this.post(`${this.url}/primitivesNullableArray`, data);
  }
}

export const api = new Api();
export default api;
