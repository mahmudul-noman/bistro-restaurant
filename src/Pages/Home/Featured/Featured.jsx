import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
    return (
        <div className="feature-bg bg-fixed text-white pt-8 my-20">
            <div className="content">
                <SectionTitle
                    subHeading={"Check it out"}
                    heading={"FROM OUR MENU"}
                ></SectionTitle>

                <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                    <div>
                        <img className="shadow-xl rounded-lg" src={featureImg} alt="" />
                    </div>
                    <div className="md:ml-10 space-y-4">
                        <p>March 20, 2023</p>
                        <h3>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, blanditiis! Numquam quas inventore officia? Ratione nemo dolorem quisquam, perferendis distinctio, nam suscipit deserunt cupiditate quam beatae consequatur, ea excepturi illo.</p>
                        <button className="btn btn-outline border-0 tracking-widest font-bold border-b-4 border-white text-white hover:text-yellow-600 rounded-[8px]">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;