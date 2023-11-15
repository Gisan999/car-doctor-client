import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provieder/AuthProvider";
import axios from "axios";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const order = {
            customerName: name,
            email,
            img,
            date,
            phone,
            service: title,
            service_id: _id,
            price: price,
        }
        console.log(order);

        axios.post('http://localhost:5000/bookings', order)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    alert('service book successfully')
                }

            })
        // fetch('http://localhost:5000/bookings', {
        //     method: "POST",
        //     headers: {
        //         "content-type": 'application/json'
        //     },
        //     body: JSON.stringify(order)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if(data.insertedId){
        //             alert('service book successfully')
        //         }
        //     });
    }
    return (
        <div>
            <h1>Check out: {title}</h1>
            <div className="max-w-screen-xl mx-auto my-10 bg-[#F3F3F3] p-12 md:p-16 lg:p-28">
                <form onSubmit={handleBookService}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="Name" className="input  w-full " />
                        <input type="date" name="date" placeholder="Date" className="input  w-full " />
                        <input type="text" name="phone" placeholder="Your Phone" className="input  w-full " />
                        <input type="email" defaultValue={user?.email} name="email" placeholder="Your Email" className="input  w-full " />
                    </div>
                    <div className="space-y-10 pt-10">
                        <textarea name="message" className="textarea textarea-bordered w-full h-60" placeholder="Your Message"></textarea>
                        <input className="btn w-full bg-[#FF3811] text-white" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;