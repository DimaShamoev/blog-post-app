import React from 'react'
import './SignIn.scss'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form'

const SignIn: React.FunctionComponent = () => {

    interface IFormProps {
        user: string
        password: string
    }
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormProps>({
        mode: 'onSubmit'
    })

    const onSubmit = (data: IFormProps) => {
        console.log(data)
        reset()
    }

    return (
        <div className='Sign-in-form-container'>
            <div className="container">

                <div className="sing-in-container-wrapper">

                    <form
                        onClick={handleSubmit(onSubmit)}
                        className='form'
                    >
                        <div className="form-title">
                            Sign In
                        </div>

                        <div className="form-block">
                            <div className="input-block">
                                <label>
                                    {/* <span>Username / Email</span> */}
                                    <input
                                        type="text"
                                        placeholder='Username / Email'
                                        {...register('user', {required: 'This Field Required'})}
                                    />
                                </label>
                                {errors.user && <p className='error-message'>{errors.user.message}</p>}
                            </div>

                            <div className="input-block">
                                <label>
                                    {/* <span>Password</span> */}
                                    <input
                                        type="text"
                                        placeholder='Password'
                                        {...register('password', {required: 'This Field Required'})}
                                    />
                                </label>
                                {errors.password && <p className='error-message'>{errors.password.message}</p>}
                            </div>

                            <div className="recovery-btn">
                                <a href="#">Forget Password?</a>
                            </div>

                            <div className="submit-btn">
                                <button type='submit'>
                                    Sign In
                                </button>
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

                            <div className="sign-up-btn">
                                Don't Have An Account <a href="#">Sign Up</a>
                            </div>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default SignIn