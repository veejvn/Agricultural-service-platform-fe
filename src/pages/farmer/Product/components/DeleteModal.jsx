import ProductService from "@services/product.service";
import { Modal } from "antd";
import { toast } from "react-toastify";

const DeleteModal = ({ product, isShowModal, closeModal }) => {

    const handleSubmit = async (productId) => {
        const [result, error] = await ProductService.deleteProduct(productId);
        if(error){
            toast.error(error.message);
            return;
        }
        toast.success("Xóa sản phẩm thành công", {
            autoClose: 3000
        });
        closeModal();
    }

    return (
        <Modal
            title="Xóa sản phẩm"
            open={isShowModal}
            onCancel={closeModal}
            onOk={() => handleSubmit(product?.id)}
            className="z-11"
        >
            <span>Bạn có chắc muốn xóa sản phẩm <span className="text-warning">{product?.name}</span> không?</span>
        </Modal>
    );
}

export default DeleteModal;