


import React from 'react'
import styles from './ProjectBanner.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import SiteMainBanner from '../../../components/reuseablecomponents/sitemainbanner/SiteMainBanner'
import projectbar from '../../../assets/images/projectbar.svg'
const ProjectBanner = () => {
  return (
    <Container fluid className={`${styles.projectMainBanner}`}>
        <Container>
            <Row className={`${styles.mainbannerRow}`}>
                <Col xl={9} lg={8} sm={12} xs={12} md={12} className={`${styles.projectbannerleft}`} >
                <SiteMainBanner
                heading='Monarch HQ Project'
                image={projectbar}
                paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. '
                />
                </Col>
                <Col xl={3} lg={3} sm={12} xs={12} md={12} className={`${styles.projectbannerRight}`}>
                <p className={` text-light ${styles.bannerPara}`}>
                Date: 12 April 2018<br/>
Client: Monarch Group<br/>
Project Type: Building Renovation
                </p>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default ProjectBanner
