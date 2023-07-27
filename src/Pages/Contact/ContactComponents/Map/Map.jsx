


import React from 'react'
import {  Container } from 'react-bootstrap'
import styles from './Map.module.scss'

const Map = () => {
  return (
    <Container fluid className={` gx-0 ${styles.mapContact}`}>
        
            
            <div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9204889514103!2d144.8087243754066!3d-37.74500953011093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65fa12370524b%3A0x9f776c6f5feae9b0!2s2%20McArthur%20Ave%2C%20St%20Albans%20VIC%203021%2C%20Australia!5e0!3m2!1sen!2s!4v1684319951588!5m2!1sen!2s" width="100%" height="550" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
            
        
    </Container>
  )
}

export default Map
