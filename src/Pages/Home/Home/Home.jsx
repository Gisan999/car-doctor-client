// import { useLoaderData } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    // const services = useLoaderData();
    return (
        <div>
          <Banner/>
          <About/>
          <Services ></Services>
        </div>
    );
};

export default Home;