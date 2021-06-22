const Color = {
  Black: 10,
  Red: 100,
  Blue: 101,
}

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
  * @param {number} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<number>}
  */
  enum = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/enum`, data);
    return this.post(`${this.url}/enum`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  enumList = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/enumList`, data);
    return this.post(`${this.url}/enumList`, data);
  }
  /**
  * @param {Array<number>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<number>>}
  */
  enumListNullable = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/enumListNullable`, data);
    return this.post(`${this.url}/enumListNullable`, data);
  }
  /**
  * @param {number} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<number>}
  */
  enumNullable = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/enumNullable`, data);
    return this.post(`${this.url}/enumNullable`, data);
  }
}

const api = new Api();
module.exports = api;
module.exports.api = api;
module.exports.Api = Api;
module.exports.Color = Color;
