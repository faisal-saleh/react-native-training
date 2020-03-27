class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl || '';
  }

  async fetch(path, options = {}) {
    options = {headers: {}, ...options};

    const url = `${this.baseUrl}${path}`;
    return fetch(url, options).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response.json());
      } else {
        var error = new Error(response.statusText || response.status);
        error.response = response;
        return Promise.reject(error);
      }
    });
  }

  async request(path, method, options = {}) {
    return this.fetch(path, {...options, method});
  }

  async get(path, options = {}) {
    return this.request(path, 'GET', options);
  }

  async post(path, options = {}) {
    return this.request(path, 'POST', options);
  }

  async put(path, options = {}) {
    return this.request(path, 'PUT', options);
  }

  async delete(path, options = {}) {
    return this.request(path, 'DELETE', options);
  }

  async patch(path, options = {}) {
    return this.request(path, 'PATCH', options);
  }
}

export default new HttpClient();
