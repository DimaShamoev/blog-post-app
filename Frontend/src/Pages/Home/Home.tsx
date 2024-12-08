import React from 'react'
import Content from '../../components/AllBlogs'
import HomeBlogNavigation from '../../components/HomeBlogNavigation'
import './Home.scss'
import Header from '../../components/Header'
import AllBlogs from '../../components/AllBlogs'

const Home: React.FunctionComponent = () => {

  return (
    <div className='home-page-container'>
        <Header />

        <div className="container">

            <div className="homepage-container-wrapper">

                <div className="homepage-left-side">
                    <div className="homepage-left-side-wrapper">
                        <HomeBlogNavigation />
                        <AllBlogs />
                    </div>
                </div>
                <div className="homepage-right-side">
                    <div className="homepage-right-side-wrapper">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis!</p>
                        <p>Will Be Added Sooon</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Home