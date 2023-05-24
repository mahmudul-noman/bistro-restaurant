import { useState } from 'react';
import orderBg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')


    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <Cover img={orderBg} title={"Order Food"} subtitle={"Would u like to try a desert ?"}></Cover>

            <Tabs className="mb-6" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Deserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel><OrderTab items={salad}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;