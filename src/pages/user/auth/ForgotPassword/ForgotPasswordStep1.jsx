import useMessageByApiCode from "@hooks/useMessageByApiCode";
import AuthService from "@services/auth.service";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPasswordStep1 = ({onNextStep2}) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const getMessage = useMessageByApiCode();

    const handleChange = (name, value) => {
        setErrors({
            ...errors,
            [name]: "",
        });
        data[name] = value;
        setData(data);
    }

    const handleChangeEmail = ((e) => {
        handleChange("email", e.target.value)
    });

    const onSubmit = async ({email}) => {
        const [result, error] = await AuthService.forgotPassword(email);
        if (error) {
            setErrorMessage(getMessage(error.code));
            toast.error(getMessage(error.code), {
                autoClose: 3000,
            });
            return;
        }
        toast.success(getMessage(result.code), {
            autoClose: 3000,
        });
        onNextStep2();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
    }

    return (
        <section className="flex items-center justify-center min-h-screen ">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Quên mật khẩu
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="abc@gmail.com" required=""
                                onChange={(e) => handleChangeEmail(e)}
                            />
                        </div>
                        <p className="text-red-600 mb-4">{errorMessage}</p>
                        <button type="submit" className={`w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                            ${loading && "opacity-50 cursor-not-allowed"}`} disabled={loading}>
                            {loading ? "Đang xử lý..." : "Xác nhận"}
                        </button>
                        <div className="flex">
                            <p className="mx-auto text-sm text-gray-800">
                                Bạn đã có tài khoản? <Link to="/login" className="font-medium text-primary hover:underline hover:text-[#aff531]">Đăng nhập ngay</Link>
                            </p>
                        </div>
                        <div className="flex">
                            <p className="mx-auto text-sm text-gray-800">
                                Bạn chưa có tài khoản? <Link to="/register" className="font-medium text-primary hover:underline hover:text-[#aff531]">Đăng kí ngay</Link>
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <Link to="/" className="font-medium text-primary hover:underline hover:text-[#aff531]">Về trang chủ</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ForgotPasswordStep1;