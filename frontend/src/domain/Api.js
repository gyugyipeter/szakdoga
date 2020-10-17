import axios from "axios";

const signup = (values) => {
  axios
    .post(
      process.env.REACT_APP_API_URL +
        ":" +
        process.env.REACT_APP_PORT +
        "/api/auth/register",
      {
        username: values.username,
        email: values.email,
        password: values.password,
      },
      {
        withCredentials: false,
      }
    )
    .then((resp) => {
      if (resp.data) {
        login(values);
      }
    });
};

const login = (values) => {
  axios
    .post(
      process.env.REACT_APP_API_URL +
        ":" +
        process.env.REACT_APP_PORT +
        "/api/auth/login",
      {
        username: values.username,
        password: values.password,
      }
    )
    .then(({ data }) => {
      data == -1
        ? (window.location.href = "/login")
        : axios
            .get(
              `${
                process.env.REACT_APP_API_URL + ":" + process.env.REACT_APP_PORT
              }/api/users/${data}`
            )
            .then(({ data }) => {
              storage.setItem("user", JSON.stringify(data));
              window.location.href = "/home";
            });
    });
};
