import CategorySelector from "@components/CategorySelector";
import ProductService from "@services/product.service";
import UploadService from "@services/upload.service";
import { Spin } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
    const [data, setData] = useState({});
    const [thumbnail, setThumbnail] = useState(null);
    const [errorMessage, setErrorMessage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [categoryId, setCategoryId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        setThumbnail(file);
        e.target.blur();
    }

    const handleUploadFile = async () => {
        const hasAvatarFile = thumbnail instanceof File;
        let newUpload = {};
        if (hasAvatarFile) {
            const [uploadAvatarResult, uploadAvatarError] = await UploadService.uploadImage(thumbnail);
            if (!uploadAvatarError) {
                newUpload.thumbnail = uploadAvatarResult.data;
            }
        } else {
            newUpload.thumbnail = data.thumbnail;
        }
        return newUpload;
    }

    const onSubmit = async () => {
        const { thumbnail } = await handleUploadFile();
        const [result, error] = await ProductService.createProduct({
            ...data,
            thumbnail,
            categoryId
        });
        if (error) {
            setErrorMessage(error.message);
            return;
        }
        toast.success("Tạo sản phẩm thành công", {
            autoClose: 3000
        });
        navigate("/@farmer/product/all-product")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await onSubmit(data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
    }

    return (
        <Spin spinning={isLoading}>
            <main className="border rounded">
                <div className="p-3">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Tên sản phẩm</label>
                            <div className="relative">
                                <input type="text" id="name" name="name" placeholder="Nông sản, sản phẩm chăn nuôi, thủy sản ..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                                focus:ring-primary"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Mô tả sản phẩm</label>
                            <div className="relative">
                                <input type="text" id="description" name="description"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                                focus:ring-primary"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700 font-medium mb-2">Đơn giá</label>
                            <div className="relative">
                                <input type="number" id="price" name="price"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                                focus:ring-primary"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="inventory" className="block text-gray-700 font-medium mb-2">Số lượng</label>
                            <div className="relative">
                                <input type="number" id="inventory" name="inventory"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                                focus:ring-primary"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="my-4">
                            <label className="block text-gray-700 font-medium mb-2">Ảnh bìa</label>
                            <div className="relative">
                                <input type="file" id="thumbnail" name="thumbnail"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                                focus:ring-primary"
                                    onChange={handleChangeFile}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="thumbnail" className="block text-gray-700 font-medium mb-2">Loại sản phẩm</label>
                            <div className="relative">
                                <CategorySelector setCategory={setCategoryId} />
                            </div>
                        </div>
                        <p className="text-red-600 mb-4">{errorMessage}</p>
                        <div className="flex mb-4">
                            <button
                                type="submit"
                                className={` bg-primary rounded mx-auto p-2 text-white hover:bg-[#a1ce4e] ${isLoading ? "disabled" : ""}`}
                                disabled={isLoading}
                                style={{ width: '150px' }}
                            >
                                {isLoading ? "Đang xử lý..." : "Tạo sản phẩm"}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </Spin>
    );
}

export default AddProduct;