

import React from 'react'
import styles from './SiteMainBanner.module.scss'

const SiteMainBanner = ({ image, heading, paragraph }) => {
    return (
        <div >
            <div className={` d-flex align-items-center ${styles.mainPageHeading}`}>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='px-4'>
                    <h2 className={` text-light ${styles.mainBannerHeading}`} dangerouslySetInnerHTML={{ __html: heading }}/>
                        
                </div>
            </div>
            <p className={`text-light pt-4 ${styles.bannerText}`}  dangerouslySetInnerHTML={{ __html: paragraph }}/>
                
            
        </div>
    )
}

export default SiteMainBanner
