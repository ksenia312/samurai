import React from 'react';
import s from "./Profileinfo.module.css";

const Profileinfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.image}
                     src="https://sklad.freeimg.ru/rsynced_images/landscape-3803721_1280.jpg"
                     alt="main"/>
            </div>
            <div className={s.descrBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default Profileinfo