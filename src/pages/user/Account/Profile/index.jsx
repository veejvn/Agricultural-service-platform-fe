import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import imgNoAvatar from "@assets/images/no-avatar.png"
import AccountService from "@services/account.service";
import { Button } from "antd";
import UpdateModal from "./UpdateModal";

const Profile = () => {

    const [account, setAccount] = useState({});
    const [isShowModel, setIsShowModel] = useState(false);

    useEffect(() => {
        fetchAccountInfo();
    }, []);

    const fetchAccountInfo = async () => {
        const [data, error] = await AccountService.getAccount();
        if (error) {
            console.log(error);
            return;
        }
        setAccount(data);
    }

    const handleShowModal = () => {
        setIsShowModel(true)
    }

    const handleCloseModal = () => {
        setIsShowModel(false)
        fetchAccountInfo();
    }

    return (
        <section className="bg-gray-100 rounded">
            <div className="container mx-auto py-5 h-full">
                <div className="flex justify-center items-center h-full">
                    <div className="w-full mb-4">
                        <div className="bg-white rounded-lg shadow-lg mx-3">
                            <div className="flex flex-wrap">
                                <div
                                    className="w-full md:w-1/3 bg-gradient-to-b text-white text-center rounded-t-lg md:rounded-t-none md:rounded-l-lg p-5"
                                >
                                    <img
                                        src={account?.avatar || imgNoAvatar}
                                        alt="Avatar"
                                        className="rounded-full mx-auto mb-5 w-20 h-20 object-cover"
                                    />
                                    <div className="mt-3">
                                        <Button onClick={handleShowModal} className="text-primary hover:text-[#b7e465]">
                                            <FaEdit className="size-6 mx-auto" />
                                        </Button>
                                    </div>
                                </div>
                                {/* Thông tin bên phải */}
                                <div className="w-full md:w-2/3 p-6">
                                    <h6 className="text-lg font-bold">Thông tin cá nhân</h6>
                                    <hr className="my-4" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h6 className="text-sm font-medium">Tên</h6>
                                            <p className="text-gray-600">{account?.displayName}</p>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h6 className="text-sm font-medium">Số điện thoại</h6>
                                            <p className="text-gray-600">{account?.phone}</p>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h6 className="text-sm font-medium">Email</h6>
                                            <p className="text-gray-600">{account?.email}</p>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h6 className="text-sm font-medium">Ngày sinh</h6>
                                            <p className="text-gray-600">{account?.dob}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UpdateModal account={account} isShowModel={isShowModel} closeModal={handleCloseModal} />
        </section>
    );
}

export default Profile;