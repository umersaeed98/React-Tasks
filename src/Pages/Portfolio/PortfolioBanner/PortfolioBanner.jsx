



import React from 'react'
import styles from './PortfolioBanner.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import SiteMainBanner from '../../../components/reuseablecomponents/sitemainbanner/SiteMainBanner'
import vectorBar from '../../../assets/images/aboutBar.svg'
const PortfolioBanner = () => {
  return (
    <Container fluid className={`${styles.projectMainBanner}`}>
        <Row className={`${styles.projectRowBanner}`}>
            <Col className={`${styles.projectBannerCol}`}>
            <SiteMainBanner
            image={vectorBar}
            heading='Our Construction <br/>Projects'
            paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis <br/> egestas pellentesque libero dolor in diam consequat ut. '
            />
            
            </Col>
        </Row>
    </Container>
  )
}

export default PortfolioBanner
