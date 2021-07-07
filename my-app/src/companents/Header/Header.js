import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='https://a4files.ru/content/uploads/2017/05/K-1200x1697.jpg'
                alt='logo'/>
        </header>
    )
}
export default Header