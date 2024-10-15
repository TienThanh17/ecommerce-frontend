import axios from "../axios";

let handleGetProductTypeService = (id) => {
  return axios.get(`/api/product-type/get-product-type?id=${id}`, {
    withCredentials: true,
  });
};
//check
let handleGetAllProductTypeService = (limit, page, name, pagination) => {
  const params = {
    page: page !== null && page !== undefined ? page - 1 : undefined,
    size: limit !== null && limit !== undefined ? limit : undefined,
    name: name !== null && name !== undefined ? name : undefined,
    pagination:
      pagination !== null && pagination !== undefined ? pagination : undefined,
  };
  return axios.get(`bamito/api/v1/category`, {
    withCredentials: true,
    params: params,
  });
};

let handleCreateProductTypeService = (data) => {
  return axios.post(`bamito/api/v1/category`, data, {
    withCredentials: true,
  });
};

let handleUpdateProductTypeService = (id, data) => {
  return axios.put(`bamito/api/v1/category/${id}`, data, {
    withCredentials: true,
  });
};
//check
let handleDeleteProductTypeService = (id) => {
  return axios.delete(`bamito/api/v1/category/${id}`, {
    withCredentials: true,
  });
};
//check
let handleGetAllBrandService = (limit, page, name, pagination) => {
  return axios.get(
    `bamito/api/v1/brand?page=${page ? page - 1 : 0}&size=${
      limit ? limit : 1
    }&pagination=${pagination === undefined ? true : false}`,
    {
      withCredentials: true,
    }
  );
};
//check
let handleCreateBrandService = (data) => {
  return axios.post(`bamito/api/v1/brand`, data, { withCredentials: true });
};
//check
let handleUpdateBrandService = (id, data) => {
  return axios.put(`bamito/api/v1/brand/${id}`, data, {
    withCredentials: true,
  });
};
//check
let handleDeleteBrandService = (id) => {
  return axios.delete(`bamito/api/v1/brand/${id}`, {
    withCredentials: true,
  });
};

let handleGetAllSizeService = (limit, page, name) => {
  return axios.get(
    `bamito/api/v1/size?limit=${limit}&page=${
      page === 0 ? page : page - 1
    }&name=${name ? name : ""}`,
    {
      withCredentials: true,
    }
  );
};

let handleCreateSizeService = (data) => {
  return axios.post(`bamito/api/v1/size`, data, { withCredentials: true });
};

let handleUpdateSizeService = (id, data) => {
  return axios.put(`bamito/api/v1/size/${id}`, data, { withCredentials: true });
};

let handleDeleteSizeService = (id) => {
  return axios.delete(`bamito/api/v1/size/${id}`, {
    withCredentials: true,
  });
};

let handleGetAllProductService = (limit, page, name) => {
  const params = {
    page: page !== null && page !== undefined ? page - 1 : undefined,
    size: limit !== null && limit !== undefined ? limit : undefined,
    filter: name !== null && name !== undefined ? name : undefined,
  };
  return axios.get(
    `bamito/api/v1/product`,
    { withCredentials: true, params: params }
  );
};

let handleCreateProductService = (data) => {
  return axios.post(`bamito/api/v1/product`, data, {
    withCredentials: true,
  });
};

let handleUpdateProductService = (id, data) => {
  return axios.patch(`/bamito/api/v1/product/${id}`, data, {
    withCredentials: true,
  });
};

let handleDeleteProductService = (id) => {
  return axios.delete(`/bamito/api/v1/product/${id}`, {
    withCredentials: true,
  });
};
let handleGetProductService = (productId) => {
  return axios.get(`bamito/api/v1/product/${productId}`, {
    withCredentials: true,
  });
};

let handleGetAllProductSizeService = (productId, limit, page) => {
  return axios.get(
    `bamito/api/v1/product-size?productId=${productId}&limit=${limit}&page=${
      page === 0 ? page - 1 : 0
    }`,
    { withCredentials: true }
  );
};

let handleGetAllProductOfTheProductType = (
  productTypeId,
  limit,
  page,
  sort,
  filter
) => {
  const params = {
    page: page !== null && page !== undefined ? page - 1 : undefined,
    size: limit !== null && limit !== undefined ? limit : undefined,
    sort: sort !== null && sort !== undefined ? sort : undefined,
    filter: filter !== null && filter !== undefined ? filter : undefined,
    categoryId: productTypeId,
  };
  return axios.get(`bamito/api/v1/product/get-all-by-category`, {
    withCredentials: true,
    params: params,
  });
};

let handleGetAllSizeOfTheProductType = (productTypeId) => {
  return axios.get(
    `bamito/api/v1/size/get-all-by-category?categoryId=${productTypeId}`,
    { withCredentials: true }
  );
};

let handleCreateProductSizeService = (data) => {
  return axios.post(`bamito/api/v1/product-size`, data, {
    withCredentials: true,
  });
};

let handleDeleteProductSizeService = (sizeId, productId) => {
  return axios.delete(
    `bamito/api/v1/product-size?sizeId=${sizeId}&productId=${productId}`,
    {
      withCredentials: true,
    }
  );
};

let handleUpdateProductSizeService = (data) => {
  return axios.patch(`bamito/api/v1/product-size`, data, {
    withCredentials: true,
  });
};

let handleCreateNewVoucher = (data) => {
  return axios.post(`bamito/api/v1/voucher`, data, {
    withCredentials: true,
  });
};

let handleUpdateVoucherService = (id, data) => {
  return axios.patch(`bamito/api/v1/voucher/${id}`, data, {
    withCredentials: true,
  });
};

let handleDeleteVoucher = (id) => {
  return axios.delete(`bamito/api/v1/voucher/${id}`, {
    withCredentials: true,
  });
};
let handleGetAllVoucher = (limit, page, pagination) => {
  return axios.get(
    `bamito/api/v1/voucher?size=${limit}&page=${
      page ? page - 1 : 0
    }&pagination=${pagination}`,
    { withCredentials: true }
  );
};

let handleGetAllVoucherUserService = () => {
  return axios.get(`bamito/api/v1/voucher/get-all-user-voucher`, {
    withCredentials: true,
  });
};

let handleGetAllProductFeedback = (userId) => {
  return axios.get(
    `bamito/api/v1/order/get-product-feedback?userId=${userId}`,
    {
      withCredentials: true,
    }
  );
};

let handleCreateFeedbackService = (data) => {
  return axios.post(`bamito/api/v1/feedback`, data, {
    withCredentials: true,
  });
};

let handleAllFeedbackService = (productId) => {
  return axios.get(`bamito/api/v1/feedback?productId=${productId}`, {
    withCredentials: true,
  });
};

let handleUpdateFeedbackService = (data) => {
  return axios.patch(`bamito/api/v1/feedback`, data, {
    withCredentials: true,
  });
};

let handleDeleteFeedbackService = (productId, userId) => {
  return axios.delete(
    `bamito/api/v1/feedback?productId=${productId}&userId=${userId}`,
    { withCredentials: true }
  );
};

let handleGetAllProductSaleOffService = (limit, page) => {
  return axios.get(
    `bamito/api/v1/product/get-all-sale?size=${limit}&page=${page - 1}`,
    { withCredentials: true }
  );
};

let handleGetAllProductFavorute = (limit, page, userId) => {
  const params = {
    page: page !== null && page !== undefined ? page - 1 : undefined,
    size: limit !== null && limit !== undefined ? limit : undefined,
    userId: userId !== null && userId !== undefined ? userId : undefined,
  };

  return axios.get(`bamito/api/v1/product/get-all-by-user`, {
    withCredentials: true,
    params: params,
  });
};

let handleGetProductName = (productId) => {
  return axios.get(`/api/product/get-product-name?productId=${productId}`, {
    withCredentials: true,
  });
};

export {
  handleGetProductTypeService,
  handleGetAllProductTypeService,
  handleCreateProductTypeService,
  handleUpdateProductTypeService,
  handleDeleteProductTypeService,
  handleGetAllBrandService,
  handleCreateBrandService,
  handleUpdateBrandService,
  handleDeleteBrandService,
  handleGetAllSizeService,
  handleCreateSizeService,
  handleUpdateSizeService,
  handleDeleteSizeService,
  handleGetAllProductService,
  handleCreateProductService,
  handleUpdateProductService,
  handleDeleteProductService,
  handleGetProductService,
  handleGetAllProductSizeService,
  handleGetAllSizeOfTheProductType,
  handleCreateProductSizeService,
  handleDeleteProductSizeService,
  handleUpdateProductSizeService,
  handleGetAllProductOfTheProductType,
  handleCreateNewVoucher,
  handleUpdateVoucherService,
  handleDeleteVoucher,
  handleGetAllVoucher,
  handleGetAllVoucherUserService,
  handleGetAllProductFeedback,
  handleCreateFeedbackService,
  handleAllFeedbackService,
  handleUpdateFeedbackService,
  handleDeleteFeedbackService,
  handleGetAllProductSaleOffService,
  handleGetAllProductFavorute,
  handleGetProductName,
};
