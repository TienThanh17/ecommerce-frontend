import axios from "../axios";

let handleCreateNewOrderService = (data) => {
  return axios.post("bamito/api/v1/order", data, { withCredentials: true });
};

let handleGetAllOrderService = (userId, status, limit, page) => {
  return axios.get(
    `bamito/api/v1/order/get-by-user?userId=${userId}&status=${status}&size=${limit}&page=${
      page - 1
    }`,
    { withCredentials: true }
  );
};

let handleGetOrderDetailService = (orderId, userId) => {
  return axios.get(`bamito/api/v1/order/get-detail?orderId=${orderId}`, {
    withCredentials: true,
  });
};

let handleCancleOrderService = (data) => {
  return axios.patch(`bamito/api/v1/order/cancel`, data, {
    withCredentials: true,
  });
};

let handleDeliveringOrderService = (data) => {
  return axios.patch(`bamito/api/v1/order/deliver?orderId=${data.orderId}`, {
    withCredentials: true,
  });
};

let handleSucceedOrderService = (data) => {
  return axios.patch(`bamito/api/v1/order/success?orderId=${data.orderId}`, {
    withCredentials: true,
  });
};

let handleDeleteOrderService = (orderId) => {
  return axios.delete(`bamito/api/v1/order/delete?orderId=${orderId}`, {
    withCredentials: true,
  });
};

let handleGetAllOrderAdmin = (status, limit, page) => {
  return axios.get(
    `bamito/api/v1/order/get-by-status?status=${status}&size=${limit}&page=${
      page - 1
    }`,
    { withCredentials: true }
  );
};

let handleGetAllOrderStatistics = () => {
  return axios.get(`bamito/api/v1/order/get-statistic`, {
    withCredentials: true,
  });
};

let handleGetAllProductReport = (timeStart, timeEnd, limit, page) => {
  return axios.get(
    `bamito/api/v1/order/get-product-report?startTime=${timeStart}&endTime=${timeEnd}&size=${limit}&page=${
      page - 1
    }`,
    { withCredentials: true }
  );
};

let handlePaymentByVnPayService = (data) => {
  return axios.post(`/api/order/create_payment_url`, data, {
    withCredentials: true,
  });
};

export {
  handleGetAllOrderStatistics,
  handleCreateNewOrderService,
  handleGetAllOrderService,
  handleGetOrderDetailService,
  handleCancleOrderService,
  handleDeliveringOrderService,
  handleGetAllOrderAdmin,
  handleSucceedOrderService,
  handleDeleteOrderService,
  handleGetAllProductReport,
  handlePaymentByVnPayService,
};
