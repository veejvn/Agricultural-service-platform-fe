import { Carousel } from 'antd';

import "./style.scss"
import img1 from "@assets/images/hero-img-1.png"
import img2 from "@assets/images/hero-img-2.jpg"

const contentStyle = {
    height: '280px',
    textAlign: 'center',
};

function Home() {
    return (
        <div className="container-fluid py-5 mb-5 bg-center bg-no-repeat bg-cover hero-header"
            style={{
                backgroundImage: `linear-gradient(rgba(248, 223, 173, 0.1), rgba(248, 223, 173, 0.1))`,
            }}
        >
            <div className="container py-5">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-5 items-center">
                    <div className="col-span-1 lg:col-span-4">
                        <h4 className="mb-3 text-secondary text-xl font-semibold">100% Thực phẩm hữu cơ</h4>
                        <h1 className="mb-5 text-4xl lg:text-6xl text-primary font-bold">
                            Rau củ quả hữu cơ & Thực phẩm
                        </h1>
                        <div className="relative mx-auto w-full lg:w-3/4">
                            <input
                                className="form-control border-2 border-secondary w-full py-3 px-4 rounded-full 
                                    focus:outline focus:outline-[#a4c567] focus:outline-4"
                                type="number"
                                placeholder="Search"
                            />
                            <button
                                type="submit"
                                className="absolute top-0 right-0 py-3 px-4 bg-primary border border-secondary text-white rounded-full h-full
                                    focus:outline focus:outline-[#a4c567] focus:outline-4 hover:bg-secondary font-semibold
                                ">
                                Submit Now
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-3">
                        <Carousel arrows infinite={true} autoplay={false} className='mx-auto rounded'>
                            <div className='relative'>
                                <img
                                    src={img1}
                                    className="w-full object-cover bg-gray-200 rounded"
                                    style={contentStyle}
                                    alt="First slide"
                                />
                                <a className='absolute text-white bg-secondary top-[31%] left-[38%] p-4 rounded bg-opacity-65 hover:text-white font-semibold text-lg'
                                    href="">Trái cây</a>
                            </div>
                            <div className='relative'>
                                <img
                                    src={img2}
                                    className="w-full object-cover bg-gray-200 rounded"
                                    style={contentStyle}
                                    alt="Second slide"
                                />
                                 <a className='absolute text-white bg-secondary top-[31%] left-[38%] p-4 rounded bg-opacity-65 hover:text-white font-semibold text-lg'
                                    href="">Rau củ</a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;