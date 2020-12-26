import React, { useEffect } from 'react'
import './Contact.scss'

function Contact() {

    const goFacebook = () => {
        window.open('https://www.facebook.com/jiayi.co.tw')
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="contact_layout">
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.152172972016!2d120.50211154981761!3d23.491027784642856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI5JzI3LjciTiAxMjDCsDMwJzE1LjUiRQ!5e0!3m2!1szh-TW!2stw!4v1608965123076!5m2!1szh-TW!2stw"></iframe>
            </div>

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
