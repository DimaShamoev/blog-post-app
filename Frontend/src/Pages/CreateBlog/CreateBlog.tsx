import React from 'react'
import { useForm } from 'react-hook-form';
import './CreateBlog.scss'

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

    return (
        <div className='blog-container'>
            <header className='header'>
                <div className="container">
                    
                    <div className="header-wrapper">

                        <div className="logo">
                            <a href="#">SpaceBlog</a>
                        </div>
                        
                        <div className="profile-pic">
                            pfp
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