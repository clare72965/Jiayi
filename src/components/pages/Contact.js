import React, { useEffect } from 'react'
import images from '../images'
import './Contact.scss'

function Contact() {

    const goFacebook = () => {
        window.open('https://www.facebook.com/jiayi.co.tw')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="contact_layout">
            <div><img src={images.contact.contact} alt="" /></div>
            <div>
                <div className="contact_title_en">CONTACT<span>US</span></div>
                <div className="contact_title_zh">聯絡我們</div>
                <div className="contact_info_box">
                    <div><i className="fas fa-map-marker-alt"></i>嘉義縣竹崎鄉灣橋村325巷28號</div>
                    <div><i className="fas fa-phone"></i>0928-299-367</div>
                    <div>服務範圍- 雲嘉南地區</div>
                    <div className="contact_info_fb" onClick={goFacebook}><i className="fab fa-facebook-square"></i>嘉藝造霧工程行</div>
                </div>
            </div>
        </div>
    )
}

export default Contact
