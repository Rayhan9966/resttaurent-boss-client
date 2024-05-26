import Swal from "sweetalert2";
import UseAuth from "../../Hook/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import useCart from "../../Hook/useCart";




const FoodOrder = ({item}) => {
    const{image,price,recipe,name,_id}=item;
    const {user}=UseAuth();
const navigate=useNavigate();
const location=useLocation();
//const axiosSecure=useAxiosSecure();
const[,refetch]=useCart();


    const handleAddToCart= food=>{
      if (user && user.email){
        //send cart to database
        // console.log(user.email,food);
const cartItem={
  menuId:_id,
  email: user.email,
  name,
  image,
  price

}
axiosSecure.post('/carts', cartItem)
.then(res=>{
  console.log(res.data)
  if(res.data.insertedId){
    
Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${name} added to your cart`,
  showConfirmButton: false,
  timer: 1500
});
//refetc update cart
refetch()
  }
})
      }
      else{
        Swal.fire({
          title: "You are not login",
          text: "Please login for add to cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, log in!"
        }).then((result) => {
          if (result.isConfirmed) {
navigate('/login',{state: {from: location}})
          
          }
        });
      }
      console.log(food,user.email);

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image}alt="Shoes" /></figure>
        <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4'>${price}</p>
        <div className="card-body flex flex-1 items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          
          <div className="card-actions justify-end">
            <button onClick={handleAddToCart} className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodOrder;