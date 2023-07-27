

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SiteMainBanner from '../../../../components/reuseablecomponents/sitemainbanner/SiteMainBanner'
import news from '../../../../assets/images/news.svg'
import styles from './Blogbanner.module.scss'

const BlogBanner = () => {
  return (
    <Container fluid className={`${styles.newsMain}`}>
        <Container>
            <Row>
                <Col className={`${styles.newsHeroHead}`}>
                <SiteMainBanner
                image={news}
                heading='NEWS'
                />
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default BlogBanner
