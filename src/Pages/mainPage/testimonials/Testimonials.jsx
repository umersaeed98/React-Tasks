


import React from 'react'
import styles from './Testimonials.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col,Card } from 'react-bootstrap';
import testimonialsData from '../../../assets/data/testimonialsData';
import vector1 from '../../../assets/images/Vector 1.svg'


const Testimonials = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        }
      }
    ]
  };
  return (
    <Container fluid className={styles.testimonialMain}>
<Container>
  <Row className='pt-5'>
    <Col className='text-center'>
    <h2 className={styles.clientTesti}>Client Testimonials</h2>
    <img src={vector1} alt="" />
    </Col>
  </Row>
      <Row>
        <Slider {...settings}>
        {
          testimonialsData.map((item => (
            
              <Col key={item.id} lg={4} md={12} sm={12} xs={12}>
              <Card className={styles.mainCard}>
                <div className='d-flex justify-content-center'>
                <Card.Img variant="top" src={item.image} className={styles.reviewStars} />
                </div>
      
      <Card.Body>
        <Card.Text className={` text-muted ${styles.reviewData}`}>
         {
          item.review
         }
        </Card.Text>
        <Card.Title  className={styles.clientName}>{item.name}</Card.Title>
      </Card.Body>
    </Card>
              </Col>
            

          )))
        }
        </Slider>
        
      </Row>
    </Container>
    </Container>

    
  )
}

export default Testimonials
