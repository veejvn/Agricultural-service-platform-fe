import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "@assets/images/not-found.gif";

const NotFound = () => {
    return (
        <div className="not-found-container flex flex-col items-center justify-center text-center">
            <img src={NotFoundImg} alt="Page not found" className="w-1/2 max-w-[400px] mb-6" />
            <h1 className="text-4xl font-bold text-gray-700 mb-4">
                Ôiii! Không tìm thấy trang này!
            </h1>
            <p className="text-gray-600 mb-6">
                Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
            </p>
            <Link to="/" className="text-primary hover:underline text-lg">
                Quay về trang chủ
            </Link>
        </div>
    );
}

export default NotFound;
