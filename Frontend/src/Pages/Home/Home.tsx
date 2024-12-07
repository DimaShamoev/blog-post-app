import React from 'react'
import Content from '../../components/AllBlogs'
import HomeBlogNavigation from '../../components/HomeBlogNavigation'
import './Home.scss'
import Header from '../../components/Header'

const Home: React.FunctionComponent = () => {

  return (
    <div className='home-page-container'>
        <Header />

        <div className="container">

            <div className="homepage-container-wrapper">

                <div className="homepage-left-side">
                    <div className="homepage-left-side-wrapper">
                        <HomeBlogNavigation />
                        <Content />
                    </div>
                </div>
                <div className="homepage-right-side">
                    <div className="homepage-right-side-wrapper">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis!
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Home