import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import MenuBg from '../../../assets/menu/banner3.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {

    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')


    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>

            <Cover img={MenuBg} title={"Our Menu"}   subtitle={"Would you like to try a dish?"}></Cover>
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory title={"dessert"} img={desertImg} items={dessert.slice(0, 6)}></MenuCategory>
            <MenuCategory title={"pizza"} img={pizzaImg} items={pizza.slice(0, 6)}></MenuCategory>
            <MenuCategory title={"salad"} img={saladImg} items={salad.slice(0, 8)}></MenuCategory>
            <MenuCategory title={"soup"} img={soupImg} items={soup.slice(0, 8)}></MenuCategory>
        </div> 
    );
};

export default Menu;