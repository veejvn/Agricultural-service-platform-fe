import ProductService from "@services/product.service";
import { Card, Col, Divider, Rate, Row } from "antd";
import { result } from "lodash";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteModal from "./components/DeleteModal";
import UpdateModal from "./components/UpdateModal";

const AllProduct = () => {

    const [products, setProducts] = useState([]);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowUpdateModal, setIsShowUpdateModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const [data, error] = await ProductService.getAllProductByFarmer();
        if (error) {
            console.log(error);
            result;
        }
        setProducts(data)
    }

    const handleShowDeleteModal = (product) => {
        setIsShowDeleteModal(true);
        setSelectedProduct(product);
    }

    const handleCloseDeleteModal = () => {
        setIsShowDeleteModal(false);
        setSelectedProduct(null);
        fetchProducts();
    }

    const handleShowUpdateModal = (product) => {
        setIsShowUpdateModal(true);
        setSelectedProduct(product);
    }

    const handleCloseUpdateModal = () => {
        setIsShowUpdateModal(false);
        setSelectedProduct(null);
        fetchProducts();
    }

    return (
        <div className="container">
            <Divider orientation="left">Danh mục sản phẩm</Divider>
            <Row>
                <Col span={20} offset={2}>
                    <Row gutter={[16, 16]}>
                        {products?.map((product) => (
                            <Col
                                key={product.id}
                                span={6}
                                xs={24}
                                sm={12}
                                md={8}
                                lg={6}
                            >
                                <Card
                                    className="w-auto h-96 mx-auto rounded-lg hover:shadow-2xl flex flex-col p-0 border border-secondary"
                                    hoverable
                                >
                                    <Link to={`/product/${product.id}`}>

                                        <img
                                            className="rounded-t-lg w-full h-48 object-cover"
                                            src={product.thumbnail}
                                            alt={product.name}
                                        />
                                    </Link>
                                    <div className="flex-grow flex flex-col justify-between">
                                        <div className="pl-2.5 pt-2.5">
                                            <h3 className="product-name p-px">
                                                {product.name}
                                            </h3>
                                            <p className="text-red-400 font-semibold">
                                                {product.price.toLocaleString()} VND
                                            </p>
                                            <div>
                                                <Rate
                                                    disabled
                                                    defaultValue={product.rating || 5.0}
                                                    className="text-[14px]"
                                                    allowHalf
                                                />
                                            </div>
                                            <div>
                                                Đã bán: {product.sold}
                                            </div>
                                            <div>
                                                <button className="p-1 w-full">
                                                    <Row className="justify-between">
                                                        <button onClick={() => handleShowDeleteModal(product)}>
                                                            <MdDelete className="size-6 text-red-600" />
                                                        </button>
                                                        <button onClick={() => handleShowUpdateModal(product)}>
                                                            <FaEdit className="size-6 text-success" />
                                                        </button>
                                                    </Row>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                <DeleteModal product={selectedProduct} isShowModal={isShowDeleteModal} closeModal={handleCloseDeleteModal}/>
                                <UpdateModal product={selectedProduct} isShowModal={isShowUpdateModal} closeModal={handleCloseUpdateModal}/>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default AllProduct;