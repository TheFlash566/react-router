import Blogs from "./Blogs";
import Contact from "./Contact";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="homepage">
            <div>
                <Blogs />
                < Skills />
                <Contact />
            </div>
        </div>
    )
  };
  
  export default Home;