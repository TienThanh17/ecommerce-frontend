import axios from "../axios";
//check
let handleLoginService = (email, password) => {
  return axios.post(
    "/bamito/api/v1/user/login",
    { email: email, password: password },
    { withCredentials: true }
  );
};

let handleCheckEmailExisted = async (email) => {
  return await axios.get(`/api/user/check-email?email=${email}`, {
    withCredentials: true,
  });
};
//check
let handleGetUserAfterLoginService = async (email) => {
  return await axios.get(`bamito/api/v1/user/get-user-info?email=${email}`, {
    withCredentials: true,
  });
};
//check
let handleRegisterService = (data) => {
  return axios.post("/bamito/api/v1/user/register", data, {
    withCredentials: true,
  });
};
//check
let handleCreateANewUserService = (data) => {
  return axios.post("bamito/api/v1/user", data, {
    withCredentials: true,
  });
};

let handleSendOptService = (email) => {
  return axios.patch(`bamito/api/v1/user/send-otp?email=${email}`, {
    withCredentials: true,
  });
};

let handleSendSMSOtpService = (id) => {
  return axios.post(`/api/user/send-sms?userId=${id}`, {
    withCredentials: true,
  });
};

let handleChangePasswordService = (data) => {
  return axios.patch("bamito/api/v1/user/forgot-password", data, {
    withCredentials: true,
  });
};

let handleGetInforUserService = (id) => {
  return axios.get(`bamito/api/v1/user?id=${id}`, {
    withCredentials: true,
  });
};

let handleUpdateUser = (id, data) => {
  return axios.patch(`bamito/api/v1/user?id=${id}`, data, {
    withCredentials: true,
  });
};

let handleChangePasswordProfile = (data) => {
  return axios.patch("bamito/api/v1/user/change-password", data, {
    withCredentials: true,
  });
};
//check
let handleGetAllUserService = (limit, page) => {
  return axios.get(
    `bamito/api/v1/user/get-all-user?size=${limit}&page=${page - 1}`,
    { withCredentials: true }
  );
};
//check
let handleDeleteService = (id) => {
  return axios.delete(`bamito/api/v1/user?id=${id}`, {
    withCredentials: true,
  });
};
//check
let handleGetAllRoleService = () => {
  return axios.get(`bamito/api/v1/user/get-all-role`, {
    withCredentials: true,
  });
};

let handleCreateFavourite = (data) => {
  return axios.post("bamito/api/v1/favorite", data, {
    withCredentials: true,
  });
};

let handleDeleteFavourite = (userId, productId) => {
  return axios.delete(
    `bamito/api/v1/favorite?userId=${userId}&productId=${productId}`,
    {
      withCredentials: true,
    }
  );
};

let handleGetAllFavourite = (userId) => {
  return axios.get(`bamito/api/v1/favorite?userId=${userId}`, {
    withCredentials: true,
  });
};

export {
  handleLoginService,
  handleRegisterService,
  handleCreateANewUserService,
  handleSendOptService,
  handleChangePasswordService,
  handleGetInforUserService,
  handleUpdateUser,
  handleChangePasswordProfile,
  handleGetAllUserService,
  handleDeleteService,
  handleGetAllRoleService,
  handleCreateFavourite,
  handleDeleteFavourite,
  handleGetAllFavourite,
  handleGetUserAfterLoginService,
  handleSendSMSOtpService,
  handleCheckEmailExisted,
};
