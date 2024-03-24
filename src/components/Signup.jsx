import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { user_data } from "../store/User-credential";
import axios from 'Axios'


const Signup = () => {

    const email = useRef();
    const password = useRef();
    const { add_user } = useContext(user_data);
    const navigate = useNavigate();



    async function formsubmithandler(e) {
        e.preventDefault();
        console.log("Loged in..");
        const em = email.current.value;
        const ps = password.current.value;
        const body = {
            email: em,
            password: ps
        }
        try {
            const request = await axios.post("http://localhost:8000/login", body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const obj = { email: em, password: ps, token: request.data };
            await add_user(obj)
        }
        catch {
            (err) => {
                console.log(err);
            }
        }
        navigate("/");
    }


    return <div className="body-content login-body">
        <div className="title">
            <span className="double-border">TODO</span>
        </div>
        <div className="content ">
            <form onSubmit={formsubmithandler}>
                <div className="login-form">
                    <div className="email-div">
                        <label htmlFor="input">Email:</label>
                        <input className="input email-input" type="text" ref={email} />
                    </div>
                    <div className="password-div">
                        <label htmlFor="input">password:</label>
                        <input
                            className="input password-input"
                            type="Password"
                            ref={password}
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn-primary login-form-button">
                            Signup
                        </button>
                    </div>
                    <div className="new-user">
                        <a onClick={() => navigate('../login')}>already-user? login</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
}
export default Signup;