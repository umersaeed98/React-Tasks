


import React from 'react'
import styles from './ServicesReuse.module.scss'

const ServicesReuse = ({heading,image,description,children,paddingTop}) => {
  return (
    <div className={styles.container} style={{ paddingTop }}>
<div>
<div className={` ${styles.content}`}>
<h2 className={`m-0 ${styles.headconstruct}`} dangerouslySetInnerHTML={{__html:heading}}/>
<img src={image} alt="" className={`py-4 ${styles.image}`} />
<p className={`m-0 ${styles.description}`} dangerouslySetInnerHTML={{__html:description}} />
</div>

</div>

<div className={styles.listContainer}>
<ul className={styles.list}>
{children}
</ul>
</div>
</div>
  )
}

export default ServicesReuse
