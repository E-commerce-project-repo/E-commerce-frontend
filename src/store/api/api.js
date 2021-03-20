export async function api(endpoint, header, { body, ...customConfig } = {}) {
  let formData = new FormData();
  for (let name in body) {
    formData.append(name, body[name]);
  }
  const headers =
    Object.keys(header).length !== 0
      ? header
      : { "Content-Type": "application/json" };

  const config = {
    headers: headers,
  };
  const requestOptions = {
    method: customConfig.method,
    config,
  };
  if (body) {
    requestOptions.body = formData;
  }
  let data;
  try {
    const response = await fetch(endpoint, requestOptions);
    const data = await response.json();

    if (response.ok) {
      return data;
    }
    return Promise.reject({
      status: response.status,
      ok: false,
      statusText: response.statusText,
      body: data,
    });
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}

api.get = function (endpoint, headers, customConfig = {}) {
  return api(endpoint, headers, { ...customConfig, method: "GET" });
};

api.post = function (endpoint, headers = {}, body, customConfig = {}) {
  return api(endpoint, headers, { ...customConfig, body, method: "POST" });
};
api.put = function (endpoint, headers = {}, body, customConfig = {}) {
  return api(endpoint, headers, { ...customConfig, body, method: "PUT" });
};

api.delete = function (endpoint, headers = {}, customConfig = {}) {
  return api(endpoint, headers, { ...customConfig, method: "PUT" });
};
