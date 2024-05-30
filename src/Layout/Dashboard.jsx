import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaListAlt, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hook/useCart';
import useAdmin from '../Hook/useAdmin';

const Dashboard = () => {

    const [cart]=useCart();
    //to do:get is admin value from the database
    const [isAdmin]=useAdmin();
    return (
        <div className='flex'>
            {/* //dashsboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu p-4 mt-2'>
              {
                isAdmin ?<>
                      <li>
                        
                        <NavLink to='/dashboard/addminhome'>
                        <FaHome></FaHome>Admin Home</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/additems'>
                        <FaUtensils></FaUtensils>
                        add Items</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/manageitems'>
                        <FaListAlt></FaListAlt>Manage Items</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/bookings'>
                        <FaBook></FaBook>Manage Bookings </NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/users'>
                        <FaUsers></FaUsers>All Users</NavLink>
                    </li>
                </>:
                <>
                      <li>
                        
                        <NavLink to='/dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/home'>
                        <FaHome></FaHome>User Home </NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/reservation'>
                        <FaCalendar></FaCalendar>Reservation</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/review'>
                        <FaAd></FaAd>Review </NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/bookings'>
                        <FaList></FaList>My Booking</NavLink>
                    </li>
                    </>
              }
                    {/* //shared nav link/ */}
                    <div className="divider"></div>
                    <li>
                        
                        <NavLink to='/'>
                        <FaHome></FaHome> Home </NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/order/salad'>
                        <FaSearch></FaSearch> Menu </NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/order/contact'>
                        <FaEnvelope></FaEnvelope>Contact </NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/order/salad'>
                        <FaSearch></FaSearch> Menu </NavLink>
                    </li>
                </ul>

            </div>
            {/* //dashboard */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;