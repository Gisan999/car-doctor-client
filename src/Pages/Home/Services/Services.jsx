/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import useServices from "../../../useAuth/useServices";


const Services = () => {
    // const services = useLoaderData();
    // const [data, setData] = useState([]);
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    const services = useServices(asc, search);
    
    
    // console.log(services);
    // console.log(data);

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[asc])

    // const handleSearch = e => {
    //     e.preventDefault();
    //     const search = e.target.search.value;
    //     setSearch(search);
    // }

    return (
        <div>
            <h2 className="text-red-500 text-xl font-medium text-center mb-5">Service</h2>
            <h3 className="text-5xl font-bold text-center mb-5">Our Service Area</h3>
            <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don`t look even slightly believable. </p>
            <div className="flex justify-center">
                <form onChange={(e)=>setSearch(e.target.value)}
                //  onSubmit={handleSearch}
                 className="flex">
                <input name="search" type="text" placeholder="Type here" className="input input-bordered rounded-none input-secondary w-full max-w-xs" />
                    <input className="btn btn-outline btn-secondary relative right-0 rounded-none" type="submit" value="search" />
                </form>
            </div>
            <div className="flex justify-center my-5">

            <button onClick={()=>setAsc(!asc)}
             className="btn btn-info  btn-outline"
            > {asc ? 'Price: high to low' : 'price: low to high'}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {
                    services?.map(data => <ServiceCard key={data._id} data={data}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;