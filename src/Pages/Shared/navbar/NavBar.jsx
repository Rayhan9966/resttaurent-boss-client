import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import{ FaShoppingCart} from 'react-icons/fa';
import useCart from '../../../Hook/useCart';
import { FaCartShopping } from 'react-icons/fa6';

const NavBar = () => {
  const [cart]=useCart();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));


  }
  const navOption =
    <>
      <li><Link to='/'>Home</Link></li>

      <li><Link to='/menu'>Our Menu</Link></li>
      <li><Link to='order/salad'>Order Food</Link></li>
      <li><Link to='/menu'>Our Menu</Link></li>
      <li><Link to='/topsecret'>Topsecret</Link></li>
      <li><Link to='/dashboard/cart'>
        <button className="btn">
         <FaShoppingCart className='mr-2'></FaShoppingCart>
          <div className="badge badge-secondary">Cart{cart.length}</div>
        </button></Link></li>

      {
        user ? <>
          {/* <span>{user?.displayName}</span> */}
          {/* <span>{user?.photoURL}</span> */}
          <button onClick={handleLogOut} className="btn btn-active btn-ghost">Logout</button>
        </>
          :
          <>
            <li><Link to='/login'>Login</Link></li>
          </>
      }

    </>
  return (

    <>
      <div className="navbar bg-black text-white max-w-screen-xl mx-auto bg-opacity-50 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Restaurent Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;