


import React from 'react'
import {Card} from 'react-bootstrap';
import Buttons from '../Buttons/Buttons';

import styles from './projectscards.module.scss'

const ProjectsCards = ({image,title,description,fontSize,width,border}) => {
  const cardStyles = {
'fontSize':fontSize,
'width':width,
'border':border
  }
  return (
    <Card style={cardStyles} className={styles.mainCard}>
      <Card.Img variant="top" src={image} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.head}>{title}</Card.Title>
        <Card.Text className={styles.desp}>
         {description}
        </Card.Text>
        <Buttons 
        color="#666666"
        backgroundColor="white"
        border="2px solid #666666"
        text='VIEW PROJECT'
        padding="15px 35px"
        marginTop="70px"
        />
      </Card.Body>
    </Card>
  )
  }

export default ProjectsCards;
