/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
    const { title, img, price, price2, _id } = data;
    console.log(typeof(parseInt(price2)))
    return (
        <div>
            <div className=" flex flex-col text-gray-700 bg-white  rounded-xl border">
                <div className=" h-56 mx-6 mt-5 overflow-hidden text-white  rounded-xl  ">
                    <img
                        className="h-full w-full" src={img}
                    />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {title}
                    </h5>
                    <div className="flex items-center justify-between">

                        <p className="text-[#FF3811] text-xl font-semibold">
                            Price : ${price}
                        </p>
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-circle bg-[#FF3811] text-white outline-none">❯</button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;