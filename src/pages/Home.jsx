import Blogs from "./Blogs";
import Contact from "./Contact";
import Features from "./Features";

const Home = () => {
    return (
        <div className="homepage">
            <div>
                <Blogs />
                < Features />
                <Contact />
            </div>
        </div>
    )
  };
  
  export default Home;