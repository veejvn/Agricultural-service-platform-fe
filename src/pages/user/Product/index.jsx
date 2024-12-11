import ProductService from "@services/product.service";
import { Card, Col, Divider, Pagination, Rate, Row, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const Product = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const page = query.get("page") || 1;
    const size = query.get("size") || 16;
    const [productsPage, setProductsPage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!query.get("page") || !query.get("size")) {
            query.set("page", page);
            query.set("size", size);
            navigate({ search: query.toString() }, { replace: true });
        } else {
            fetchProduct();
        }
    }, [location.search]);

    const fetchProduct = async () => {
        setIsLoading(true);
        const [result, error] = await ProductService.getAllProduct({ page: page - 1, size });
        if (error) {
            console.log(error);
            return;
        }
        setProductsPage(result.data);
        setIsLoading(false);
    }

    const handlePageChange = (page) => {
        query.set("page", page);
        query.set("size", size);
        navigate({ search: query.toString() });
    };

    return (
        <div>
            <div className="container">
                <Divider orientation="left">Danh mục sản phẩm</Divider>
                <Row>
                    <Col span={20} offset={2}>
                        <Row gutter={[16, 16]}>
                            {isLoading ? (
                                Array.from({ length: 20 }).map((_, index) => (
                                    <Col key={index} span={6} xs={24} sm={12} md={8} lg={6}>
                                        <Card className="w-auto h-80 mx-auto rounded-lg flex flex-col p-0">
                                            <Skeleton.Image className="rounded-t-lg w-full h-48 object-cover" />
                                            <div className="pl-2.5 pt-2.5">
                                                <Skeleton
                                                    active
                                                    paragraph={{ rows: 1 }}
                                                    title={{ width: "80%" }}
                                                />
                                                <Skeleton
                                                    active
                                                    paragraph={{ rows: 1 }}
                                                    title={{ width: "50%" }}
                                                />
                                            </div>
                                        </Card>
                                    </Col>
                                ))
                            ) :
                                productsPage?.content.map((product) => (
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
                                                        <button className="p-1 w-full bg-white text-primary hover:text-white hover:bg-secondary rounded-full border border-secondary">
                                                            <Row>
                                                                <FaShoppingBag className="my-auto" />
                                                                <span>Thêm vào giỏ hàng</span>
                                                            </Row>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                        <Row justify="center" style={{ marginTop: "20px" }}>
                            {isLoading ? (
                                <Skeleton.Button active size="large" style={{ width: 200 }} />
                            ) : (
                                <Pagination
                                    onChange={handlePageChange}
                                    current={page}
                                    total={productsPage?.totalElements}
                                    pageSize={size}
                                />
                            )}
                        </Row>
                    </Col>
                </Row>
            </div >
        </div >
    );
}

export default Product;