import React from 'react';
import { NavLink } from "react-router-dom";
import {
    MobileOutlined,
    MailOutlined,
    FacebookFilled,
    TwitterCircleFilled,
    InstagramFilled,
    UserOutlined
} from '@ant-design/icons';

const Header = () => {
    return (
        <div className='container'>
            {/* top bar */}
            <div className='topBar'>
                <div className='contactInfo'>
                    <ul>
                        <li>
                            <a href="tel:01822298762"><span> <MobileOutlined />01822298762</span></a>
                        </li>
                        <li>
                            <a href="mailto:contact@grocery.com"><span> <MailOutlined />contact@grocery.com</span></a>
                        </li>
                    </ul>
                </div>
                <div className='otherInfo'>
                    <ul className='socialMedia'>
                        <li><a href="https://www.facebook.com"><FacebookFilled /></a></li>
                        <li><a href="https://www.twitter.com"><TwitterCircleFilled /></a></li>
                        <li><a href="https://www.instagram.com"><InstagramFilled /></a></li>
                    </ul>
                    <button><UserOutlined />My Account</button>
                </div>
            </div>
            {/* Header */}
            <div className='header separator'>
                <div className='logo'>Grocery</div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Header;