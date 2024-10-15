"use client";
import React from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProductSizeRedux,
  fetchAllProductSizeOfTheProductTypeRedux,
  loadingAdmin,
} from "@/redux-toolkit/adminSlice";
import { handleDeleteProductSizeService } from "@/services/productService";
import GridData from "@/components/GridData/GridData";
import { LIMIT } from "@/utils";
import { handleChangePage } from "@/redux-toolkit/paginationSlice";
import { logOut } from "@/redux-toolkit/userSlice";

const ProductSizeAdmin = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.admin?.productData);
  const page = useSelector((state) => state.pagination.page);
  const totalPage = useSelector(
    (state) => state.admin.allProductSize?.totalPage
  );

  const handleDeleteProductSize = async (productSize, isLast) => {
    try {
      dispatch(loadingAdmin(true));
      let res = await handleDeleteProductSizeService(productSize.sizeResponse.id, productSize.productResponse.id);
      if (res && res.code === 0) {
        await dispatch(
          fetchAllProductSizeRedux({
            productId: productData?.productId,
            limit: LIMIT,
            page: totalPage === page && isLast ? page - 1 : page,
          })
        );
        await dispatch(
          fetchAllProductSizeOfTheProductTypeRedux(
            productData?.categoryResponse?.categoryId
          )
        );
        if (totalPage === page && isLast) dispatch(handleChangePage(page - 1));
        toast.success("Xóa kích cỡ sản phẩm thành công");
      }
    } catch (err) {
      if (err?.response?.data?.code === 20) {
        toast.error("Kích cỡ sản phẩm không tồn tại");
      } else if (err?.response?.data?.code === -4) {
        toast.error("Phiên bản đăng nhập hết hạn");
        dispatch(logOut());
      } else {
        toast.error(err?.response?.data?.message);
      }
    } finally {
      dispatch(loadingAdmin(false));
    }
  };

  const tableColumns = [
    {
      label: "STT",
      key: "",
      style: { borderTopLeftRadius: 15, paddingLeft: "2rem" },
    },
    { label: "TÊN SẢN PHẨM", key: "productResponse" },
    { label: "KÍCH CỠ", key: "sizeResponse" },
    { label: "SỐ LƯỢNG", key: "quantity" },
    { label: "", key: "", style: { borderTopRightRadius: 15 } },
  ];

  return (
    <GridData
      tableColumns={tableColumns}
      handleDelete={handleDeleteProductSize}
      headerString="Kích cỡ theo sản phẩm"
      gridType="productSize"
    />
  );
};

export default ProductSizeAdmin;
