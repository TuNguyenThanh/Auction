class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    };
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, verb) {
    const host = 'http://192.168.1.151:3000';
    const url = `${host}${route}`;
    console.log(url);
    const options = Object.assign(
      { method: verb }, params ? { body: JSON.stringify(params) } : null
    );
    options.headers = Api.headers();
    //console.log(options);
    return fetch(url, options).then(resp => {
      const json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => { throw err; });
    }).then(json => json);
  }
}
export default Api;
