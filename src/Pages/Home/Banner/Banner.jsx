import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
// import banner5 from '../../../assets/images/banner/5.jpg'
// import banner6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    const text = <>
        <div className="absolute  h-full left-0 right-0 top-0 space-y-7 gap5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-5 md:pl-16 pt-28">
            <h2 className='text-3xl md:text-6xl font-semibold'>Affordable <br /> Price For Car <br /> Servicing</h2>
            <p className='w-3/4'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            <div className='flex gap-10'>
                <button className='btn bg-[#FF3811] text-white'>Discover More</button>
                <button className='btn btn-outline btn-info'>Latest project</button>
            </div>
           </div></>
    return (
        <div>
            <div className="carousel w-full h-[600px] rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    {text}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide4" className="btn btn-circle bg-transparent text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] text-white outline-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    {text}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide1" className="btn btn-circle bg-transparent text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811] text-white outline-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    {text}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide2" className="btn btn-circle bg-transparent text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] text-white outline-none">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    {text}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide3" className="btn btn-circle bg-transparent text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811] text-white outline-none">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;