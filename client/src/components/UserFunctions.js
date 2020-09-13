import axios from "axios";

export const register = (newUser) => {
  return axios
    .post("/users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then((response) => {
      console.log("Zarejestrowany");
      return response.data;
    });
};
export const login = (user) => {
  return axios
    .post("/users/login", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const reset = (user) => {
  return axios
    .post("/users/reset", {
      email: user.email,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const newpassword = (user) => {
  return axios
    .post("/users/newpassword", {
      email: user.email,
      password: user.password,
      password2: user.password2,
      verify: user.verify,
    })
    .then((response) => {
      // localStorage.setItem("usertoken", response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};