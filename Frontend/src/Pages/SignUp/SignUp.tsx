import React from "react";
import { useForm } from "react-hook-form";
import "./SignUp.scss";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const SignUp: React.FunctionComponent = () => {

    interface IFormProps {
        username: string,
        email: string,
        password: string,
        confirmedPassword: string,
        
    }

    const { register, handleSubmit, watch, reset, formState: { errors }} = useForm<IFormProps>();

    const password = watch('password');

    const onSubmit = (data: IFormProps) => {
        console.log(data);
        reset()
    }

    return (
        <div className="sign-up-form-container">
            <div className="container">
                <div className="sign-up-from-wrapper">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-title">Sign Up</div>

                        <div className="form-block">
                            <div className="input-block">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    {...register('username', {required: 'This Field Required'})}
                                />
                                {errors.username && <p className="error-message">{errors.username.message}</p>}
                            </div>

                            <div className="input-block">
                                <input
                                    type="text"
                                    placeholder="Email" 
                                    {...register('email', {
                                        required: "This Field Required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email"
                                        }
                                    })}
                                />
                                {errors.email && <p className="error-message">{errors.email.message}</p>}
                            </div>

                            <div className="input-block">
                                <input
                                    type="password"
                                    placeholder="Password" 
                                    {...register('password', {required: "This Field Required"})}
                                />
                                {errors.password && <p className="error-message">{errors.password.message}</p>}
                            </div>

                            <div className="input-block">
                                <input
                                    type="password"
                                    placeholder="Repeat Password"
                                    {...register('confirmedPassword', {
                                        required: "This Field Required",
                                        validate: (value) =>
                                            value === password || 'Passwords do not match',
                                    })}
                                />
                                {errors.confirmedPassword && <p className="error-message">{errors.confirmedPassword.message}</p>}
                            </div>
                            
                            <div className="submit-btn">
                                <button>Sign Up</button>
                            </div>

                            <div className="line">OR</div>

                            <div className="social-media">
                                <div className="social-media-btn">
                                    <button className='google-btn'>
                                        <FaGoogle /> Google
                                    </button>
                                </div>
                                <div className="social-media-btn">
                                    <button className='facebook-btn'>
                                        <FaFacebookF /> Facebook
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
