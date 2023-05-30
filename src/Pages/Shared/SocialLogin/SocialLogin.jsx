import { useContext } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }




    return (
        <div className="text-center">
            <div className="divider"></div>
            <div className="space-x-2">
                <button onClick={handleGoogleSignIn} className="btn btn-circle bg-gradient-to-r from-blue-400 to-yellow-400 via-green-400 border-0">
                    <FaGoogle className="text-xl"></FaGoogle>
                </button>
                <button className="btn btn-circle bg-gradient-to-r from-teal-400 to-teal-400 via-teal-500 border-0">
                    <FaGithub className="text-xl"></FaGithub>
                </button>
                <button className="btn btn-circle bg-gradient-to-r from-blue-300 to-blue-700 via-blue-500 border-0">
                    <FaTwitter className="text-xl"></FaTwitter>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;




