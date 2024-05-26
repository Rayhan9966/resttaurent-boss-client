import img1 from '../../assets/home/01.jpg';

const Banner2 = () => {
    return (
        <div>
                {/* <div>
                    <img src={img1} />
               
                </div> */}
                <div className="hero min-h-80 " style={{backgroundImage: 'url(https://i.postimg.cc/L8mQZML2/chef-service.jpg)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg   border-2  bg-white">
      <h1 className="mb-5 text-5xl text-black font-bold">Hello there</h1>
      <p className="mb-5  text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner2;