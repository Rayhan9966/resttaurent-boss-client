import { useState } from 'react';
import ordercover from'../../assets/shop/order.jpg'
import Cover from '../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hook/useMenu';

import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories=['salad','pizza','dessert','soup','drinks']

    const {category}=useParams();
    const initialIndex =categories.indexOf(category);

    const [tabIndex,setTabIndex]=useState(initialIndex);
    const[menu]=useMenu();
  
  const salad=menu.filter(item=>item.category === 'salad');
  const pizza=menu.filter(item=>item.category === 'pizza');
  const dessert=menu.filter(item=>item.category === 'dessert');
  const soup=menu.filter(item=>item.category === 'soup');
  const drinks=menu.filter(item=>item.category === 'drinks');
//   const offered=menu.filter(item=>item.category === 'offered');
  
    return (
        <div>
            <Helmet>
        <title>Restaurent || Order Food</title>
       
      </Helmet>
           <Cover bgImg={ordercover} title="order Food"></Cover>
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Dessert</Tab>
    <Tab>Soup</Tab>
    <Tab>Drinks</Tab>
  
  </TabList>
  <TabPanel>
<OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
<OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
<OrderTab items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
<OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
<OrderTab items={drinks}></OrderTab>
  </TabPanel>
 
</Tabs>
        </div>
    );
};

export default Order;