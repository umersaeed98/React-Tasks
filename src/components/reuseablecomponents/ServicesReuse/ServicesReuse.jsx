


import React, { useContext } from 'react'
import styles from './ServicesReuse.module.scss'
import { ThemeContext } from '../../../assets/theme/Theme';

const ServicesReuse = ({heading,image,description,children,paddingTop}) => {
  const [{theme}] = useContext(ThemeContext)
  return (
    <div className={styles.container} style={{ paddingTop }}>
<div>
<div className={` ${styles.content}`}>
<h2 className={`m-0 ${styles.headconstruct}`} dangerouslySetInnerHTML={{__html:heading}} style={{color:theme.color}}/>
<img src={image} alt="" className={`py-4 ${styles.image}`} />
<p className={`m-0 ${styles.description}`} dangerouslySetInnerHTML={{__html:description}} style={{color:theme.color}} />
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
