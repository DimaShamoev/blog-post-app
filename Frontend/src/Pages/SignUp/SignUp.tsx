import React from 'react'
import { useForm } from 'react-hook-form'

const SignUp: React.FunctionComponent = () => {

    const { register, handleSubmit, formState: {errors} } = useForm()

    return (
        <div className='sign-up-form-container'>
            <div className="container">
                
                <div className="sign-up-from-wrapper">

                    <form className="form">

                        

                    </form>

                </div>

            </div>
        </div>
    )
}

export default SignUp