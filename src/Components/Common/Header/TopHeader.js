import React from 'react';
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
            </div>
        </div>
    );
};

export default Header;