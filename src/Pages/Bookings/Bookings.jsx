import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provieder/AuthProvider";
// import axios from "axios";
import useAxiosSecure from "../../useAuth/useAxiosSecure";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const axiosSecure = useAxiosSecure();
    // const uri = `/bookings?email=${user?.email}`;
    useEffect(() => {
        axiosSecure.get(`/bookings?email=${user?.email}`)
            .then(res => {
                setBooking(res.data)
            })

    }, [user?.email, axiosSecure])
    const handleDelete = id => {
        const proceed = confirm('are you sure want to delete');
        if (proceed) {

            axiosSecure.delete(`/bookings/${id}`)
                .then(res => {
                    const data = res.data;
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = booking.filter(data => data._id !== id);
                        setBooking(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <h2>my booking item {booking.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>email</th>
                            <th>Date</th>
                            <th>price</th>
                            <th>action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            booking?.map(data => <tr key={data._id} >


                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className=" avatar rounded-md w-16 h-16">
                                                <img src={data.img} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{data.service}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {data.email}
                                </td>
                                <td>
                                    {data.date}
                                </td>
                                <td>
                                    {data.price}
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(data?._id)} className="btn btn-square btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                            </tr>)
                        }



                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Bookings;