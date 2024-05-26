import React from 'react';
// import useMenu from '../../../Hook/useMenu';
import MenuItem from '../../Shared/MenuItem';
import Cover from '../../Shared/Cover';
import { Link } from 'react-router-dom';

const MenuCatagory = ({items,title,img}) => {
   
    // const [menu]=useMenu();
    return (
      <div className=' pt-8'>
          { title && <Cover bgImg={img} title={title}></Cover>}
        <div className='grid md:grid-cols-2  gap-10 my-16'>
            {
                items.map(item=><MenuItem
                key={item._id}
                item={item}>
                </MenuItem>)
            }
        </div>
<Link to={`/order/${title}`}>
<button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button></Link>
      </div>
    );
};

export default MenuCatagory;