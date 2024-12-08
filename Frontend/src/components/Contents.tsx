import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import CreateBlog from '../Pages/CreateBlog/CreateBlog'
import Profile from '../Pages/Profile/Profile'
import BlogPage from '../Pages/BlogPage/BlogPage'

const Contents: React.FunctionComponent = () => {
  return (
    <div className='content'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/createBlog' element={<CreateBlog />} />
            <Route path='/profile' element={<Profile />} />
            <Route path="/blog/:id" element={<BlogPage />} />   
        </Routes>
    </div>
  )
}

export default Contents