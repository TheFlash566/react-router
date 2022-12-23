import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{paddingTop: '20px',
    paddingBottom: '20px',
    background: 'purple',}}>
        <ul style={{listStyleType: 'none', display: 'flex',
    gap: '3em', fontSize: '30px',
    width: '50%', margin: 'auto',}}>
          <li>
            <Link style={{textDecoration: 'none', color: 'black',}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: 'black',}} to="/blogs">Blog</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: 'black',}} to="/features">Skills</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none', color: 'black',}} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;