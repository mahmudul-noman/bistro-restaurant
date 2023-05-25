import { useForm } from 'react-hook-form';
import signupImg from '../../assets/others/authentication2.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('User Profile Updated');
                        reset();
                        Swal.fire('User Created Successfully')
                        navigate('/');
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>

            <div className='p-24' style={{ backgroundImage: 'url(https://i.ibb.co/JHcpdxY/authentication.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/JHcpdxY/authentication.png)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <img src={signupImg} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <h2 className='text-2xl font-bold'>Sign Up</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered border-1 focus:outline-none shadow-xl" {...register("name", { required: true })} />
                                    {errors.name && <span className='text-red-600'>This Field is Required *</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Your Photo URL" className="input input-bordered border-1 focus:outline-none shadow-xl" {...register("photoURL", { required: true })} />
                                    {errors.photoURL && <span className='text-red-600'>This Field is Required *</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your Email" className="input input-bordered border-1 focus:outline-none shadow-xl" {...register("email", { required: true })} />
                                    {errors.email && <span className='text-red-600'>This Field is Required *</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Your Password" className="input input-bordered border-1 focus:outline-none shadow-xl" {...register("password", { required: true, minLength: 6, maxLength: 10 })} />
                                    {errors.password && <span className='text-red-600'>This Field is Required *</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn border-0 bg-[#D1A054B2]">Sign Up</button>
                                </div>
                                <p><small>Already SignUp ? <Link className='text-blue-600' to="/login">Login</Link></small></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;