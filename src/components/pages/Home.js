import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Home.scss'
import images from '../images'


function Home({ topBtn }) {

    let history = useHistory();

    const motorMixImg = images.Home_MotorMixImg.map(img => {
        return <div key={img} className="motor_mix_content_img_box"><img src={img} /></div>
    })

    const displayImg = images.Home_DisplayImg.map(img => {
        return <img key={img} src={img} />
    })

    const goFacebook = () => {
        window.open('https://www.facebook.com/jiayi.co.tw')
    }

    const toTop = () => window.scrollTo(0, 0);

    useEffect(() => {
        toTop();
    }, []);

    return (
        <div className="home_layout">
            <div className="home_banner">
                <img src={images.Home_ServeItemImg.banner} />
            </div>

            <div className="service_items_layout">
                <div className="service_items_title">
                    <div>服務項目</div>
                </div>
                <div className="service_items_content">
                    <div>
                        <div className="service_items_content_img_box">
                            <img src={images.Home_ServeItemImg.service01} />
                        </div>
                        <div className="service_items_content_img_title">畜牧消毒降溫</div>
                    </div>
                    <div>
                        <div className="service_items_content_img_box">
                            <img src={images.Home_ServeItemImg.service02} />
                        </div>
                        <div className="service_items_content_img_title">溫室加濕降溫</div>
                    </div>
                    <div>
                        <div className="service_items_content_img_box">
                            <img src={images.Home_ServeItemImg.service03} />
                        </div>
                        <div className="service_items_content_img_title">車輛消毒系統</div>
                    </div>
                </div>
            </div>

            <div className="motor_mix_layout">
                <div className="motor_mix_title">
                    <div>噴霧馬達組</div>
                </div>
                <div className="motor_mix_content">{motorMixImg}</div>
            </div>


            <div className="achiev_display_layout">
                <div className="achiev_display_title">
                    <div>成果展示</div>
                </div>
                <div className="achiev_display_content">
                    <div className="achiev_display_content_img_box">{displayImg}</div>
                    <div><button onClick={() => history.push("/achievement-display")}> 更多實例</button></div>
                </div>
            </div>

            <div className="home_contact_layout">
                <div className="home_contact_title">
                    <div>聯絡我們</div>
                </div>
                <div>
                    <div className="home_contact_info_fb" onClick={goFacebook}><i className="fab fa-facebook-square"></i>嘉藝造霧工程行</div>
                    <div className="home_contact_info"><i className="fas fa-map-marker-alt"></i>嘉義縣竹崎鄉灣橋村325巷28號</div>
                    <div className="home_contact_info"><i className="fas fa-phone"></i>0928-299-367</div>
                </div>
            </div>

            <div className={topBtn ? "to-top show" : "to-top"} onClick={toTop}><i className="fas fa-chevron-up"></i></div>
        </div >
    )
}

export default Home
