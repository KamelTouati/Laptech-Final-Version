import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/apiCalls/authApiCall";
import logo from "/public/assets/logo.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Logout Handler
  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const { user } = useSelector((state) => state.auth);

  const guestLinks = () => (
    <Fragment>
      <li>
        <Link
          to="/login"
          className="block py-2 pl-3 pr-4 m-2 text-white bg-color5 rounded md:text-white"
          aria-current="page"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/signup"
          className="block py-2 pl-3 pr-4 m-2 text-white bg-color5 rounded md:text-white"
          aria-current="page"
        >
          Register
        </Link>
      </li>
    </Fragment>
  );
  const customerUserLinks = () => (
    <Fragment>
      <li>
        <div className="flex items-center">
          <input
            id="toggle"
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={handleToggle}
          />
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <div className="relative w-[120px] ">
              <div className="bg-color2 rounded-xl shadow-inner flex justify-between items-center ml-1 px-4 py-3 w-full ">
                <h1 className="font-bold z-50">Buy</h1>
                <h1 className="font-bold z-50">Sell</h1>
              </div>
              <div className="absolute w-[45px] h-[80%] ml-0 top-1.5 w-[50%] mb-2 shadow-inner bg-color6 rounded-xl border border-r-2 border-b-3 border-stone-300  toggle-dot transition-all duration-300 "></div>
            </div>
          </label>
        </div>
      </li>
      <li>
        <Link
          to="/products/favorite-products"
          className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
          aria-current="page"
        >
          <CiHeart className="text-3xl" />
        </Link>
      </li>
      <li>
        <Link
          to="/products/cart"
          className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
          aria-current="page"
        >
          <CiShoppingCart className="text-3xl" />
        </Link>
      </li>
      <li>
        <div className="relative block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0">
          <button
            onClick={toggleUserMenu}
            aria-expanded={isUserMenuOpen}
            type="button"
            className="flex text-sm md:me-0"
            id="user-menu-button"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            {/* <CiUser className="text-3xl" /> */}
            <img
              className="w-[30px] h-[30px] rounded-[20px]"
              src={user.profilePhoto.url}
              alt=""
            />
          </button>
          <div
            className={`absolute md:right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow ${
              isUserMenuOpen ? "block" : "hidden"
            }`}
            id="user-dropdown"
          >
            <div className="py-3">
              <span className="block text-sm text-gray-900">
                <Link
                  to={`/profile/${user?._id}`}
                  className="text-sm block py-2 pl-3 pr-4
                        rounded text-blue-700
                        "
                >
                  {user ? user.username : ""}
                </Link>
              </span>
              {/* <span className="block text-sm text-gray-500 truncate">
                <span
                  className="text-sm block py-2 pl-3 pr-4
                        rounded text-blue-700
                        "
                >
                  {user ? user.email : ""}
                </span>
              </span> */}
            </div>

            <ul className="py-2">
              <li>
                <Link
                  onClick={logoutHandler}
                  to="/"
                  className="text-sm block py-2 pl-3 pr-4 md:m-2 md:text-white md:bg-color3 rounded text-blue-700"
                  aria-current="page"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </Fragment>
  );
  const adminUserLinks = () => (
    <Fragment>
      <li>
        <div className="relative block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0">
          <button
            onClick={toggleUserMenu}
            aria-expanded={isUserMenuOpen}
            type="button"
            className="flex text-sm md:me-0"
            id="user-menu-button"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <CiUser className="text-3xl" />
          </button>
          <div
            className={`absolute md:right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow ${
              isUserMenuOpen ? "block" : "hidden"
            }`}
            id="user-dropdown"
          >
            <div className="py-3">
              <span className="block text-sm text-gray-900">
                <Link
                  to="admin-dashboard"
                  className="text-sm block py-2 pl-3 pr-4
                        rounded text-blue-700
                        "
                >
                  {user ? user.username : ""}
                </Link>
              </span>
              <span className="block text-sm text-gray-500 truncate">
                <span
                  className="text-sm block py-2 pl-3 pr-4
                        rounded text-blue-700
                        "
                >
                  {user ? user.email : ""}
                </span>
              </span>
            </div>

            <ul className="py-2">
              <li>
                <Link
                  onClick={logoutHandler}
                  to="/"
                  className="text-sm block py-2 pl-3 pr-4 md:m-2 md:text-white md:bg-color3 rounded text-blue-700"
                  aria-current="page"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </Fragment>
  );
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
    // Redirect based on the toggle state
    if (isChecked) {
      navigate("/products"); // Redirect to Buy page
    } else {
      navigate("/products/sell"); // Redirect to Sell page
    }
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            LapTech
          </span> */}
        </Link>
        <button
          onClick={toggleMenu}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:items-center p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:text-black font-bold  md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            {user ? (
              user.isAdmin ? (
                <>
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pl-3 pr-4 m-2 text-white bg-blue-700 rounded md:bg-transparent md:text-black font-bold  md:p-0 hover:-translate-y-1 hover:scale-110 duration-300"
                      aria-current="page"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      className="block py-2 pl-3 pr-4 m-2 text-white bg-blue-700 rounded hover:-translate-y-1 hover:scale-110 duration-300 md:bg-transparent md:text-black font-bold  md:p-0"
                      aria-current="page"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="block py-2 pl-3 pr-4 m-2 text-white bg-blue-700 rounded hover:-translate-y-1 hover:scale-110 duration-300 md:bg-transparent md:text-black font-bold  md:p-0"
                      aria-current="page"
                    >
                      Contact
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 m-2 text-white bg-blue-700 rounded md:bg-transparent md:text-black font-bold  md:p-0 hover:-translate-y-1 hover:scale-110 duration-300"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="block py-2 pl-3 pr-4 m-2 text-white bg-blue-700 rounded hover:-translate-y-1 hover:scale-110 duration-300 md:bg-transparent md:text-black font-bold  md:p-0"
                    aria-current="page"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 pl-3 pr-4 m-2 text-white bg-blue-700 rounded hover:-translate-y-1 hover:scale-110 duration-300 md:bg-transparent md:text-black font-bold  md:p-0"
                    aria-current="page"
                  >
                    Contact
                  </Link>
                </li>
              </>
            )}
            {user ? "" : guestLinks()}

            {user
              ? user.isAdmin
                ? adminUserLinks()
                : customerUserLinks()
              : ""}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
