import axios from "axios";
export async function api(endpoint, headers, { body, ...customConfig } = {}) {
  let formData;
  if (headers["Content-Type"] === "application/json") {
    formData = body;
  } else {
    formData = new FormData();
    for (let key in body) {
      if (key === "item_images") {
        for (let previewKey in body[key]) {
          formData.append(
            `item_images[${previewKey}]image`,
            body[key][previewKey].image
          );
        }
      } else {
        formData.append(key, body[key]);
      }
    }
  }

  const config = {
    headers: headers,
    method: customConfig.method,
    url: endpoint,
  };

  if (body) {
    config.data = formData;
  }
  return axios(config)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return Promise.reject({
        status: error.response.status,
        ok: false,
        statusText: error.response.statusText,
        body: error.response?.data,
      });
    });
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
  return api(endpoint, headers, { ...customConfig, method: "DELETE" });
};
