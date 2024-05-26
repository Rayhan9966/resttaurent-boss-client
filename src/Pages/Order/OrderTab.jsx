
import FoodOrder from './FoodOrder';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10' >
        {
               items.map(item=><FoodOrder
               key={item._id}
               item={item}></FoodOrder>)
           }
        </div>
    );
};

export default OrderTab;