import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "", // URL
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

interface ILogIn {
  username: string;
  password: string;
}

export interface IRegister {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const registerAPI = (data: IRegister) => {
  console.log(data);
  return instance.post("/register", data);
};

const logInAPI = (data: ILogIn): Promise<AxiosResponse> => {
  console.log(data);
  return instance.post("/login", data);
};

/* const reSendEmail = (email: string) => {
  email

  return instance.post("/resend-email", data);
}; */

const refreshTokenAPI = (refreshToken: string) => {
  const data = {
    refreshToken,
  };
  return instance.post("/refresh-token", data);
};

/* const accessTokenAPI = (accessToken: string) => {
  const data = {
    accessToken,
  };
  return instance.post("/access-token", data);
}; */

const userProfileAPI = (accessToken: string) => {
  return instance.get("/userprofile", {
    headers: {
      Authorization: `Bearer ${accessToken}`, // access from localstoreage
    },
  });
};

/* const forGotPassword = (emailOrUserName: string) => {
  const data = {
    emailOrUserName,
  };
  return instance.put("/forgot-password", data);
}; */

export { registerAPI, logInAPI, refreshTokenAPI, userProfileAPI };
