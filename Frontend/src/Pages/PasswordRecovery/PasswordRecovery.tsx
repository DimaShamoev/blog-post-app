import React from 'react'
import './PasswordRecovery.scss'
import { useForm } from 'react-hook-form'

const PasswordRecovery: React.FunctionComponent = () => {

    interface IFormProp {
        email: string
    }

    const { register, handleSubmit, formState: { errors } } = useForm<IFormProp>()

    const onSubmit = (data: IFormProp) => {
        console.log(data)
    }

    return (
        <div className='password-recovery-form-container'>
            <div className="container">
                <div className="pass-recovery-wrapper">

                    <form
                        className='form'
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <div className="form-title">
                            Forgot Password?
                        </div>

                        <div className="input-block">
                            <input
                                type="text"
                                placeholder='Enter Email'
                                {...register('email', {required: "This Field Required"})}
                            />
                            {errors.email && <p className='error-message'>{errors.email.message}</p>}
                        </div>

                        <div className="submit-btn">
                            <button type='submit'>Submit</button>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    )
}

export default PasswordRecovery