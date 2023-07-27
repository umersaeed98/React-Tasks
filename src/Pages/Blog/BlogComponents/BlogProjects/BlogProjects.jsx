


import React from 'react'
import styles from './BlogProjects.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import BlogCards from '../../../../components/reuseablecomponents/BlogCards/BlogCards'
import firstNews from '../../../../assets/images/news1.svg'
import secondNews from '../../../../assets/images/news2.svg'
import thirdNews from '../../../../assets/images/news3.svg'
import fourthNews from '../../../../assets/images/news4.svg'
import fifthNews from '../../../../assets/images/news5.svg'
import sixthNews from '../../../../assets/images/news6.svg'
const BlogProjects = () => {
  return (
<Container fluid className={`${styles.BlogCardsMainBg}`}>
<Container>
        <Row className='py-5'>
            <Col lg={4} md={12} sm={12} xs={12}>
            <BlogCards
            image={firstNews}
            title='Nunc Volutpat Venenatis'
            info='May 9, 2014 | Category'
            description='Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi.'
            border='none'
            />
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
            <BlogCards
            image={secondNews}
            title='Vestibulum Nisl Felis'
            info='May 9, 2014 | Category'
            description='Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi.'
            border='none'
            />
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
            <BlogCards
            image={thirdNews}
            title='Proin Eu Augue Efficitur'
            info='May 9, 2014 | Category'
            description='Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi.'
            border='none'
            />
            </Col>
        </Row>
    </Container>
    <Container>
        <Row className='pb-5'>
            <Col lg={4} md={12} sm={12} xs={12}>
            <BlogCards
            image={fourthNews}
            title='Nunc Volutpat Venenatis'
            info='May 9, 2014 | Category'
            description='Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi.'
            border='none'
            />
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
            <BlogCards
            image={fifthNews}
            title='Donec Sit Amet Nibh'
            info='May 9, 2014 | Category'
            description='Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi.'
            border='none'
            />
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
            <BlogCards
            image={sixthNews}
            title='Maecenas Fringilla Augue'
            info='May 9, 2014 | Category'
            description='Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi.'
            border='none'
            />
            </Col>
        </Row>
    </Container>
</Container>
    
  )
}

export default BlogProjects
