import { useContext, useEffect, useState } from 'react';
import logImg from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {

    // const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }


    const handleValidateCaptcha = e => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true);
        }
    }


    return (
        <>

            <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
            <div className='p-24' style={{ backgroundImage: 'url(https://i.ibb.co/JHcpdxY/authentication.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/JHcpdxY/authentication.png)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }}>
                    <div className="hero-content flex">
                        <div className="text-center w-1/2 lg:text-left">
                            <img src={logImg} alt="" />
                        </div>
                        <div className="card w-1/2 max-w-sm">
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <h2 className='text-2xl font-bold'>Log In</h2>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered border-1 focus:outline-none shadow-xl" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="Type Password" className="input input-bordered border-1 focus:outline-none shadow-xl" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <LoadCanvasTemplate />
                                        </label>
                                        <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered border-1 focus:outline-none shadow-xl" />
                                    </div>

                                    <div className="form-control mt-6">
                                        <input disabled={disabled} type="submit" value="Login" className="btn border-0 bg-[#D1A054B2]" />
                                    </div>
                                </form>
                                <p><small>New Here ? <Link className='text-blue-600' to="/signup">Sign Up</Link></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;