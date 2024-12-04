import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const HomeBlogNavigation: React.FunctionComponent = () => {
    const [btnIndex, setBtnIndex] = React.useState<number>(0)

    const handleNext = () => {
        setBtnIndex((prevIndex) => (prevIndex + 1) % navBtns.length)
    }

    const handlePrev = () => {
        setBtnIndex((prevIndex) => (prevIndex - 1 + navBtns.length) % navBtns.length)
    }

    interface INavBtns {
        forYou: string,
        following: string,
        trending: string,
        society: string,
        lifeStyle: string,
        work: string,
        education: string
    }

    const navBtns: INavBtns[] = [
        {
            forYou: "ForYou",
            following: "Following",
            trending: "Trending",
            society: "Society",
            lifeStyle: "LifeStyle",
            work: "Work",
            education: "Education"
        }
    ] 

    return (
        <div className='home-blog-nav'>
            
            <div className="blog-nav-scroll-btns">
                <button className='btn1 scroll-btn' onClick={handlePrev}>
                    <MdKeyboardArrowLeft />
                </button>
                <button className='btn2 scroll-btn' onClick={handleNext}>
                    <MdKeyboardArrowRight />
                </button>
            </div>

            <div className="blog-nav-content-btns">
                {navBtns.map((btn, index) => (
                    <div
                        key={index}
                        className={`content-btns`}
                    >
                        <span>{btn.forYou}</span>
                        <span>{btn.following}</span>
                        <span>{btn.trending}</span>
                        <span>{btn.society}</span>
                        <span>{btn.lifeStyle}</span>
                        <span>{btn.work}</span>
                        <span>{btn.education}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default HomeBlogNavigation
