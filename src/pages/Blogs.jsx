import { Outlet, Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="blog">
      <h1 style={{ color: 'purple' }}>My First React Router</h1>
      <p style={{marginBottom: '1.5em'}}>Hi, my name is micko lee. i'm currently dreaming on ReactJs and working with ReactJs. Na my first "react router" be this one !</p>
      <Link className="lm" to="/learnMore"> Learn More </Link>

      <Outlet />
    </div>
  );
};

export default Blogs;