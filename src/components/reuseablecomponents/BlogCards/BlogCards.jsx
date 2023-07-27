


import React from 'react'
import {Card} from 'react-bootstrap';

import styles from './BlogCards.module.scss'

const BlogCards = ({image,title,description,fontSize,width,border,info}) => {
  const cardStyles = {
'fontSize':fontSize,
'width':width,
'border':border
  }
  return (
    <Card style={cardStyles} className={styles.BlogMainCard}>
      <Card.Img variant="top" src={image} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.head}>{title}</Card.Title>
        <Card.Text className={` text-muted ${styles.infoText}`}>
            {info}
        </Card.Text>
        <Card.Text className={styles.desp}>
         {description}
        </Card.Text>
       
      </Card.Body>
    </Card>
  )
  }

export default BlogCards
