import { Link } from "react-router-dom";

export default function Navbar() {
  const menuItems = (
    <>
      <li>
        <Link to="/book-table">All Book's</Link>
      </li>
      <li>
        <Link to="/add-book">Add-Book</Link>
      </li>

      <li>
        <Link to="/borrow-summary">Book-Summary</Link>
      </li>
      <li>
        <Link to="/blogs">Blog's</Link>
      </li>
      <li>
        <Link to="/benifits">Project Benifits</Link>
      </li>
      <li>
        <Link to="/not-found">Dashboard</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-blue-950 text-white rounded-lg lg:shadow-xl">
      {/* Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-900 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost lg:text-xl text-[17px] normal-case"
        >
          Book Libary
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-medium">
          {menuItems}
        </ul>
      </div>

      {/* End */}
      <div className="navbar-end">
        <Link to="/add-book">
          <button className="btn btn-active">Add Book</button>
        </Link>
      </div>
    </div>
  );
}
