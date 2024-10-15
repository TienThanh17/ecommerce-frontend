"use client";
import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import "./DisplayFeedbacks.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import {
  handleAllFeedbackService,
  handleDeleteFeedbackService,
} from "../../services/productService";
import EditFeedback from "../EditFeedback/EditFeedback";
import Image from "next/image";
import { logOut } from "@/redux-toolkit/userSlice";
import { useDispatch } from "react-redux";
import { setCheckUpdateFeedback } from "@/redux-toolkit/productSlice";

const formatDate = (date) => {
  const dateTime = dayjs(date);
  const formattedTime = dateTime.format("DD/MM/YYYY HH:mm:ss");
  return formattedTime;
};

const DisplayFeedbacks = ({ productId }) => {
  const [allFeedback, setAllFeeddack] = useState([]);
  const [currentFeedback, setCurrentFeedback] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const userId = useSelector((state) => state.user.userInfo.id);
  const dispatch = useDispatch();

  let getAllDataFeedback = async () => {
    try {
      let res = await handleAllFeedbackService(productId);
      if (res && res.code === 0) {
        let result = res?.data?.map((item) => {
          item.userId === userId
            ? (item.myReview = true)
            : (item.myReview = false);
          return item;
        });
        setAllFeeddack(result);
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.code === -4) {
        toast.error("Phiên bản đăng nhập hết hạn");
        dispatch(logOut());
      } else {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    getAllDataFeedback();
  }, [userId]);

  let handleUpdateFeedback = (description, rating, productId) => {
    setCurrentFeedback({
      productId: productId,
      description: description,
      rating: rating,
    });
    setIsOpen(true);
  };

  let handleDeleteFeedback = async (productId) => {
    try {
      let res = await handleDeleteFeedbackService(productId, userId);
      if (res && res.code === 0) {
        getAllDataFeedback();
        toast.success("Xóa đánh giá thành công");
        dispatch(setCheckUpdateFeedback(true));
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.code === -4) {
        toast.error("Phiên bản đăng nhập hết hạn");
        dispatch(logOut());
      } else {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div className="feedback-product-container">
      <div className="comment-rating-form">
        {allFeedback &&
          allFeedback.length > 0 &&
          allFeedback.map((review, index) => (
            <div key={index} className="review-item">
              <div className="user-info">
                <Image
                  src={
                    review.avatarURL ? review.avatarURL : "/images/default-avatar.png"
                  }
                  alt="Avatar"
                  height={60}
                  width={60}
                  className="user-avatar"
                />
                <div className="wrap-user-name">
                  <div className="user-name">{review.username}</div>
                  <div className="timestamp">
                    {formatDate(review.updatedAt)}
                  </div>
                </div>
              </div>
              <Rating
                name={`rating-${index}`}
                style={{ fontSize: "3.675rem", margin: "10px 0" }}
                value={review.rating}
                precision={0.5}
                readOnly
              />
              <div className="user-comment">{review.description}</div>
              {review.myReview ? (
                <div className="edit-feedback">
                  <div
                    className="edit-feedback-btn"
                    style={{ marginLeft: "auto" }}
                    onClick={() =>
                      handleUpdateFeedback(
                        review.description,
                        review.rating,
                        review.productId
                      )
                    }
                  >
                    Chỉnh sửa
                  </div>
                  <div
                    className="edit-feedback-btn"
                    onClick={() => handleDeleteFeedback(review.productId)}
                  >
                    Xóa
                  </div>
                </div>
              ) : null}
            </div>
          ))}
      </div>
      <EditFeedback
        setIsOpen={setIsOpen}
        data={currentFeedback}
        isOpen={isOpen}
        getAllDataFeedback={getAllDataFeedback}
      ></EditFeedback>
    </div>
  );
};

export default DisplayFeedbacks;
