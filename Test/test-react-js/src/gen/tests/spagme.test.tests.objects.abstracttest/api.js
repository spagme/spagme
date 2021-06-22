export class Car {
  brand;
  color;
  roofColor;
  options1;
  options2;
  /**
  * @param {string} brand
  * @param {number} color
  * @param {number} roofColor
  * @param {Array<number>} options1
  * @param {Array<number>} options2
  */
  constructor(brand, color, roofColor, options1, options2) {
    this.brand = brand;
    this.color = color;
    this.roofColor = roofColor;
    this.options1 = options1;
    this.options2 = options2;
  }
}

export class VolvoCar extends Car {
  volvoWheels;
  /**
  * @param {number} volvoWheels
  */
  constructor(volvoWheels) {
    super();
    this.volvoWheels = volvoWheels;
  }
}

export class FordCar extends Car {
  fordRoof;
  /**
  * @param {string} fordRoof
  */
  constructor(fordRoof) {
    super();
    this.fordRoof = fordRoof;
  }
}

export const Color = {
  Black: 10,
  Red: 100,
  Blue: 101,
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
  * @param {VolvoCar} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<VolvoCar>}
  */
  car = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/car`, data);
    return this.post(`${this.url}/car`, data);
  }
  /**
  * @param {FordCar} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<FordCar>}
  */
  car2 = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/car2`, data);
    return this.post(`${this.url}/car2`, data);
  }
}

export const api = new Api();
export default api;
