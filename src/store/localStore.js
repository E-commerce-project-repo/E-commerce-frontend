export const browserStore = (data) => {
  localStorage.setItem("id", data.id);
  localStorage.setItem("name", data.name);
  localStorage.setItem("token", data.token);
  localStorage.setItem("email", data.email);
  return;
};

export const browserClear = () => {
  return localStorage.clear();
};

export const browserGet = () => {
  return {
    id: localStorage.getItem("id"),
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    token: localStorage.getItem("token"),
  };
};

export const isCleared = () => {
  var isCleared = true;
  if (localStorage.getItem("token")) {
    isCleared = false;
  }
  return isCleared;
};
