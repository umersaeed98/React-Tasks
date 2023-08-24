


import React,{useContext} from 'react'
import {Card} from 'react-bootstrap';
import Buttons from '../Buttons/Buttons';

import styles from './projectscards.module.scss'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../assets/theme/Theme';
const ProjectsCards = ({image,title,description,fontSize,width,border}) => {
  const cardStyles = {
'fontSize':fontSize,
'width':width,
'border':border,
  }

  const [{theme}] = useContext(ThemeContext)
  return (
    <Card style={{backgroundColor:theme.backgroundColor}} className={styles.mainCard}>
      <Card.Img variant="top" src={image} />
      <Card.Body className={styles.cardBody} style={{borderColor:theme.borderColor}}>
        <Card.Title className={styles.head} style={{color:theme.color}}>{title}</Card.Title>
        <Card.Text className={styles.desp} style={{color:theme.color}}>
         {description}
        </Card.Text>
        <div className='text-center'>
          <Link to='/project'>
          <Buttons
        color="#666666"
        backgroundColor='transparent'
        border="2px solid #666666"
        text='VIEW PROJECT'
        padding="10px 30px"
        marginTop="70px"
        hoverBackgroundColor="yellow"
        hoverColor='black'
        />
          </Link>
        
        </div>
       
      </Card.Body>
    </Card>
  )
  }

export default ProjectsCards;
