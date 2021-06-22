class Car {
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

class VolvoCar extends Car {
  volvoWheels;
  /**
  * @param {number} volvoWheels
  */
  constructor(volvoWheels) {
    super();
    this.volvoWheels = volvoWheels;
  }
}

class FordCar extends Car {
  fordRoof;
  /**
  * @param {string} fordRoof
  */
  constructor(fordRoof) {
    super();
    this.fordRoof = fordRoof;
  }
}

const Color = {
  Black: 10,
  Red: 100,
  Blue: 101,
}

class PolestarCar extends VolvoCar {
  polestarEngine;
  /**
  * @param {string} polestarEngine
  */
  constructor(polestarEngine) {
    super();
    this.polestarEngine = polestarEngine;
  }
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
  * @param {Array<Car>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<Car>>}
  */
  arrayOfCars = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/arrayOfCars`, data);
    return this.post(`${this.url}/arrayOfCars`, data);
  }
  /**
  * @param {Array<PolestarCar>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<PolestarCar>>}
  */
  arrayOfPolestarCars = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/arrayOfPolestarCars`, data);
    return this.post(`${this.url}/arrayOfPolestarCars`, data);
  }
  /**
  * @param {Array<VolvoCar>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<VolvoCar>>}
  */
  arrayOfVolvoCars = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/arrayOfVolvoCars`, data);
    return this.post(`${this.url}/arrayOfVolvoCars`, data);
  }
  /**
  * @param {Car} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Car>}
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
  fordCar = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/fordCar`, data);
    return this.post(`${this.url}/fordCar`, data);
  }
  /**
  * @param {Array<Car>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<Car>>}
  */
  iEnumerableOfCars = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/iEnumerableOfCars`, data);
    return this.post(`${this.url}/iEnumerableOfCars`, data);
  }
  /**
  * @param {Array<PolestarCar>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<PolestarCar>>}
  */
  iEnumerableOfPolestarCars = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/iEnumerableOfPolestarCars`, data);
    return this.post(`${this.url}/iEnumerableOfPolestarCars`, data);
  }
  /**
  * @param {Array<VolvoCar>} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<Array<VolvoCar>>}
  */
  iEnumerableOfVolvoCars = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/iEnumerableOfVolvoCars`, data);
    return this.post(`${this.url}/iEnumerableOfVolvoCars`, data);
  }
  /**
  * @param {PolestarCar} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<PolestarCar>}
  */
  polestarCar = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/polestarCar`, data);
    return this.post(`${this.url}/polestarCar`, data);
  }
  /**
  * @param {VolvoCar} input
  * @param {string} method 'get' or 'post'
  * @returns {Promise<VolvoCar>}
  */
  volvoCar = (input, method = 'post') => {
    const data = {};
    data.input = JSON.stringify(input);
    if(method === 'get') return this.get(`${this.url}/volvoCar`, data);
    return this.post(`${this.url}/volvoCar`, data);
  }
}

const api = new Api();
module.exports = api;
module.exports.api = api;
module.exports.Api = Api;
module.exports.Car = Car;
module.exports.VolvoCar = VolvoCar;
module.exports.FordCar = FordCar;
module.exports.Color = Color;
module.exports.PolestarCar = PolestarCar;
