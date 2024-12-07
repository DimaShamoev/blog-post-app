import React from 'react'
import { useForm } from 'react-hook-form';
import './CreateBlog.scss'
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
const CreateBlog: React.FunctionComponent = () => {
    interface IFormData {
        title: string
        content: string
        blogType: string
    }

    const { register, handleSubmit, formState: { errors } } = useForm<IFormData>()

    const onsubmit = (data: IFormData) => {
        // Change
        console.log(data);
    }

    const {user} = useUser()
    const navigate = useNavigate()

    return (
        <div className='blog-container'>
            <header className='header-block'>
                <div className="container">
                    
                    <div className="header-wrapper">

                        <div className="logo">
                            <Link to="/">SpaceBlog</Link>
                        </div>
                        
                        <div className="profile-pic">
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action
                                        label="Profile"
                                        labelIcon={<FaUser />}
                                        onClick={() => navigate("/profile")}
                                    />
                                </UserButton.MenuItems>
                            </UserButton>
                            <span>{user?.username}</span>
                        </div>

                    </div>

                </div>
            </header>
            <main className='main'>
                <div className="container">

                    <div className="main-wrapper">

                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className="publish-btn">
                                <button type='submit'>
                                    Publish
                                </button>
                            </div>

                            <div className="input-block">
                                <div className="select-wrapper">
                                    <select
                                        {...register('blogType', {required: 'This Field Required'})}
                                    >
                                        <option value="">Select Blog</option>
                                        <option value="trending">Trending</option>
                                        <option value="society">Society</option>
                                        <option value="lifestyle">LifeStyle</option>
                                        <option value="work">Work</option>
                                        <option value="education">Education</option>
                                    </select>
                                </div>
                                {errors.blogType && <span className='error-message'>{errors.blogType.message}</span>}
                            </div>

                            <div className="input-block">
                                <input
                                    type="text"
                                    placeholder='Title'
                                    {...register('title', {required: 'This Field Required'})}
                                />
                                {errors.title && <span className='error-message'>{errors.title.message}</span>} 
                            </div>

                            <div className="input-block">
                                <textarea
                                    placeholder='Tell Your Story...'
                                    {...register('content', {required: 'This Field Required'})}
                                />
                                {errors.content && <span className='error-message'>{errors.content.message}</span>} 
                            </div>

                        </form>

                    </div>

                </div>
            </main>
        </div>
    )
}

export default CreateBlog