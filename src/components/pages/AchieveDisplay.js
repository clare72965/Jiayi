import React, { useState, useEffect } from 'react'
import './AchieveDisplay.scss'
import images from '../images'

function AchieveDisplay() {

    const [tab, setTab] = useState(0);

    const getImg = images.Achieve_DisplayImg.map(img => {
        return <img key={img} src={img} alt="" />
    });


    const getVideo = images.Achieve_DisplayVideo.map(video => {
        return <video key={video.src} poster={video.poster} controls={true}>
            <source src={video.src} type="video/mp4" />
            <source src={video.src} type="video/mov" />
        </video>
    });


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="achieve_display_layout">
            <div className="achieve_display_menu">
                <div className={tab === 0 ? "clicked" : ""} onClick={() => setTab(0)}>照片</div>
                <div className={tab === 1 ? "clicked" : ""} onClick={() => setTab(1)}>影片</div>
            </div>
            <div className="achieve_display_content">{tab === 0 ? getImg : getVideo}</div>
        </div>
    )
}

export default AchieveDisplay
