import React from 'react';
import SectionTitle from '../../Component/SectionTitle';
import fimg from '../../assets/home/featured.jpg';
import '../Home/Featured.css';

const Featured = () => {
    return (
        <div className='bg-fixed featured-item text-white pt-8 my-20'>
            <SectionTitle subHeading={"Check it out"}
                heading="Featured Item">

            </SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36'>
                <div>
                    <img src={fimg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug,8, 1996</p>
                    <p className='uppercase'> Where can i get some?</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos aliquam quisquam architecto, quis nemo recusandae delectus commodi, iusto cum, est harum quas minus. Porro, esse sint ut sapiente corporis quae rem ipsa officiis accusantium id voluptas. Rerum corrupti voluptate quidem cumque numquam enim iste, a quam quibusdam, architecto iusto!
                    </p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;