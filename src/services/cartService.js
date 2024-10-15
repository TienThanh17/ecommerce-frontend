import axios from "../axios";

//check
let handleGetCartService = (userId) => {
  return axios.get(`/bamito/api/v1/cart?userId=${userId}`, {
    withCredentials: true,
  });
};

let hadnleAddProductToCart = (data) => {
  return axios.post(`bamito/api/v1/cart/add-product`, data, {
    withCredentials: true,
  });
};

let handleGetAllProductCart = (userId) => {
  return axios.get(`bamito/api/v1/cart/get-cart-detail?userId=${userId}`, {
    withCredentials: true,
  });
};

let handleUpdateProductCartService = (data) => {
  return axios.put("bamito/api/v1/cart/update-product", data, {
    withCredentials: true,
  });
};

let handleDeleteProductCartService = (productId, sizeId, userId) => {
  return axios.delete(
    `bamito/api/v1/cart/delete-product?productId=${productId}&sizeId=${sizeId}&userId=${userId}`,
    { withCredentials: true }
  );
};

export {
  handleGetCartService,
  hadnleAddProductToCart,
  handleGetAllProductCart,
  handleUpdateProductCartService,
  handleDeleteProductCartService,
};
