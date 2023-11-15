import about1 from '../../../assets/images/about_us/parts.jpg'
import about2 from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 px-5 lg:px-0">
                <div className='relative lg:py-20'>
                    <img className='w-3/4  rounded-lg' src={about2} alt="" />
                    <img className='w-2/4 absolute top-1/2  right-12 md:right-24 border-8 border-white rounded-lg' src={about1} alt="" />
                </div>
                <div className='space-y-6 lg:py-20'>
                    <h1 className='text-xl text-red-500 font-bold' >About Us</h1>
                    <h2 className='text-5xl font-bold'>We are qualified <br />  & of experience <br /> in this field</h2>
                    <p className='w-3/4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. <br /> <br />
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. 
                     </p>
                     <button className=' btn bg-red-500 text-white'>Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default About;