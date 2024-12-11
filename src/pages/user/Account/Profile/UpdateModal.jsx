import { Modal, Spin } from "antd";
import { useEffect, useState } from "react";
import imgNoAvatar from "@assets/images/no-avatar.png"
import useMessageByApiCode from "@hooks/useMessageByApiCode";
import { Link, useNavigate } from "react-router-dom";
import UploadService from "@services/upload.service";
import AccountService from "@services/account.service";
import { toast } from "react-toastify";

const UpdateModal = ({ account, isShowModel, closeModal }) => {

    const [data, setData] = useState();
    const [avatar, setAvatar] = useState(null);
    const [errorMessage, setErrorMessage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setData(account);
    }, [account]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUploadFile = async () => {
        const hasAvatarFile = avatar instanceof File;
        let newUpload = {};
        if (hasAvatarFile) {
            const [deleteAvatarResult, deleteAvatarError] = await UploadService.deleteFile(data.avatar);
            const [uploadAvatarResult, uploadAvatarError] = await UploadService.uploadImage(avatar);
            if (!uploadAvatarError) {
                newUpload.avatar = uploadAvatarResult.data;
            }
        } else {
            newUpload.avatar = data.avatar;
        }
        return newUpload;
    }

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    }

    const onSubmit = async () => {
        const { avatar } = await handleUploadFile();
        const [result, error] = await AccountService.updateAccount({
            displayName: data.displayName,
            dob: data.dob,
            phone: data.phone,
            avatar,
        });
        if (error) {
            setErrorMessage(error.message);
            return;
        }
        toast.success("Cập nhật thông tin cá nhân thành công", {
            autoClose: 3000
        });
        closeModal();
        navigate("/account/profile");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await onSubmit(data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
    }

    return (
        <Modal
            title="Cập nhật thông tin cá nhân"
            open={isShowModel}
            onCancel={closeModal}
            onOk={handleSubmit}
            className="z-10"
        >
            <Spin spinning={isLoading}>
                <form className="grid grid-cols-1 md:grid-cols-4 gap-0 rounded-lg border">
                    <div
                        className="col-span-1 bg-primary text-center text-white rounded-l-lg p-4"
                    >
                        <img
                            src={data?.avatar || imgNoAvatar}
                            alt="Avatar"
                            className="my-5 w-20 h-20 rounded-full mx-auto"
                        />
                        <input
                            className="block mx-auto mt-3 text-gray-600 file:rounded-lg file:bg-gray-200 file:text-gray-700"
                            type="file"
                            name="avatar"
                            onChange={handleChangeFile}
                            style={{ maxWidth: "300px" }}
                        />
                    </div>
                    <div className="col-span-3 p-6 bg-white rounded-r-lg">
                        <h4 className="text-lg font-semibold mb-4">Chỉnh sửa thông tin cá nhân</h4>
                        <hr className="border-gray-300 my-2" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <h6 className="text-sm font-medium mb-2">Tên</h6>
                                <input
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                                    type="text"
                                    name="displayName"
                                    placeholder="Nguyễn Văn A"
                                    value={data?.displayName || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <hr className="border-gray-300 my-2" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <h6 className="text-sm font-medium mb-2">Số điện thoại</h6>
                                <input
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                                    type="text"
                                    name="phone"
                                    placeholder="0123456789"
                                    value={data?.phone || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <hr className="border-gray-300 my-2" />
                        <div>
                            <h6 className="text-sm font-medium mb-2">Ngày sinh</h6>
                            <input
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                                type="date"
                                name="dob"
                                value={data?.dob || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="text-red-600 mb-4">{errorMessage}</p>
                    </div>
                </form>
            </Spin>
        </Modal>
    );
}

export default UpdateModal;