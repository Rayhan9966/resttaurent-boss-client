
import SectionTitle from '../../Component/SectionTitle';
import MenuItem from '../Shared/MenuItem';
import useMenu from '../../Hook/useMenu';

const PopularMenu = () => {
    const [menu]=useMenu();
    const popular=menu.filter(item=>item.category === 'popular');
  
    return (
     <section className='mb-12'>
        <SectionTitle
        heading={"For Our Menu"}
        subHeading={"Popular Items"}>

        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-10'>
            {
                popular.map(item=><MenuItem
                key={item._id}
                item={item}>
                </MenuItem>)
            }
        </div>
        <button className='btn btn-outline border-0  border-b-4 mt-4'>View Full Menu</button>
     </section>
    );
};

export default PopularMenu;