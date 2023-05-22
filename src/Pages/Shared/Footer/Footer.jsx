import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <div className='container mx-auto'>
            <footer className='flex'>
                <div className='flex-1 bg-[#1F2937] text-white p-4'>
                    <div className="text-end mr-6 space-y-4">
                        <h2 className="footer-title">Contact Us</h2>
                        <p className="text-lg">123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className='flex-1 bg-[#111827] text-white p-4'>
                    <div className="ml-4 space-y-4">
                        <span className="footer-title">Follow US</span>
                        <p className="text-lg">Join us on social media</p>
                        <div className="flex gap-3">
                            <FaFacebookF className="text-lg"></FaFacebookF>
                            <FaInstagram className="text-lg"></FaInstagram>
                            <FaTwitter className="text-lg"></FaTwitter>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-[#151515] py-4 text-center">
                <p className="text-white text-lg">Copyright © {getCurrentYear()} - All right reserved by <span className="text-yellow-600 font-semibold">Mahmudul Hasan</span></p>
            </div>
        </div>
    );
};

export default Footer;
