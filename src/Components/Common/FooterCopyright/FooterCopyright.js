import React from 'react';
import { BackTop } from 'antd';
import img1 from "../../../Assets/Images/payment.png"

const FooterCopyright = () => {
    return (
        <div className='footerCopyright'>
            <div className='container'>
                <div className='copyright'>©2022 Created by Grocery</div>
                <div className='toTop'>
                    <img src={img1} alt="payment" />
                </div>
                <BackTop />
            </div>
        </div>
    );
};

export default FooterCopyright;