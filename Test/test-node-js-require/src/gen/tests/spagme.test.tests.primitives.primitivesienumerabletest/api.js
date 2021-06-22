class Api {
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
  * @param {Array<boolean>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<boolean>>}
  */
  booleanArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/booleanArray`, data);
    return this.post(`${this.url}/booleanArray`, data);
  }
  /**
  * @param {Array<boolean>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<boolean>>}
  */
  booleanNullableArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/booleanNullableArray`, data);
    return this.post(`${this.url}/booleanNullableArray`, data);
  }
  /**
  * @param {Array<string>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<string>>}
  */
  charArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/charArray`, data);
    return this.post(`${this.url}/charArray`, data);
  }
  /**
  * @param {Array<string>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<string>>}
  */
  charNullableArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/charNullableArray`, data);
    return this.post(`${this.url}/charNullableArray`, data);
  }
  /**
  * @param {Array<Date>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<Date>>}
  */
  dateTimeArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/dateTimeArray`, data);
    return this.post(`${this.url}/dateTimeArray`, data);
  }
  /**
  * @param {Array<Date>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<Date>>}
  */
  dateTimeNullableArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/dateTimeNullableArray`, data);
    return this.post(`${this.url}/dateTimeNullableArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  decimalArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/decimalArray`, data);
    return this.post(`${this.url}/decimalArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  decimalNullableArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/decimalNullableArray`, data);
    return this.post(`${this.url}/decimalNullableArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  doubleArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/doubleArray`, data);
    return this.post(`${this.url}/doubleArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  doubleNullableArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/doubleNullableArray`, data);
    return this.post(`${this.url}/doubleNullableArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  floatArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/floatArray`, data);
    return this.post(`${this.url}/floatArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  floatNullableArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/floatNullableArray`, data);
    return this.post(`${this.url}/floatNullableArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  intArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/intArray`, data);
    return this.post(`${this.url}/intArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  intNullableArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/intNullableArray`, data);
    return this.post(`${this.url}/intNullableArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  longArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/longArray`, data);
    return this.post(`${this.url}/longArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  longNullableArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/longNullableArray`, data);
    return this.post(`${this.url}/longNullableArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  sbyteArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/sbyteArray`, data);
    return this.post(`${this.url}/sbyteArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  sbyteNullableArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/sbyteNullableArray`, data);
    return this.post(`${this.url}/sbyteNullableArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  shortArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/shortArray`, data);
    return this.post(`${this.url}/shortArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  shortNullableArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/shortNullableArray`, data);
    return this.post(`${this.url}/shortNullableArray`, data);
  }
  /**
  * @param {Array<string>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<string>>}
  */
  stringArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/stringArray`, data);
    return this.post(`${this.url}/stringArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  uintArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/uintArray`, data);
    return this.post(`${this.url}/uintArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  uintArrayNullable = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/uintArrayNullable`, data);
    return this.post(`${this.url}/uintArrayNullable`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  ulongArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/ulongArray`, data);
    return this.post(`${this.url}/ulongArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  ulongArrayNullable = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/ulongArrayNullable`, data);
    return this.post(`${this.url}/ulongArrayNullable`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  ushortArray = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/ushortArray`, data);
    return this.post(`${this.url}/ushortArray`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  ushortArrayNullable = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/ushortArrayNullable`, data);
    return this.post(`${this.url}/ushortArrayNullable`, data);
  }
}

const api = new Api();
module.exports = api;
module.exports.api = api;
module.exports.Api = Api;
