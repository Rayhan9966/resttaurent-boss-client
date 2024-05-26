import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from '../../assets/menu/soup-bg.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import SectionTitle from '../../Component/SectionTitle';
import useMenu from '../../Hook/useMenu';
import MenuCatagory from './Menu Catagory/MenuCatagory';
// import PopularMenu from '../PopularMenu/PopularMenu';
const Menu = () => {
  const [menu]=useMenu();
  const dessert=menu.filter(item=>item.category === 'dessert');
  const salad=menu.filter(item=>item.category === 'salad');
  const pizza=menu.filter(item=>item.category === 'pizza');
  const soup=menu.filter(item=>item.category === 'soup');
  const offered=menu.filter(item=>item.category === 'offered');
    return (
  <div>
     <Helmet>
        <title>Restaurent || Menu</title>
       
      </Helmet>
    <Cover bgImg={menuImg} title='Our menu'></Cover>

<SectionTitle 
subHeading={"Don't miss"}
heading={"today's offer"}>

</SectionTitle>
{/* //offer item */}
<MenuCatagory items={offered}></MenuCatagory>
{/* desert item */}
<MenuCatagory items={dessert}
title="deserts" img={dessertImg}></MenuCatagory>
{/* salad item */}
<MenuCatagory items={salad}
title="salads" img={saladImg}></MenuCatagory>
{/* /pizza item */}
<MenuCatagory items={pizza}
title={"pizza"} img={pizzaImg}></MenuCatagory>
<MenuCatagory items={soup}
title="soup" img={soupImg}></MenuCatagory>
  </div>
    );
};

export default Menu;