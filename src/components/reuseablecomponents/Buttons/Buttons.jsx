


import React from 'react'
import styles from './Buttons.module.scss' 
import '../../../assets/Style/hover-min.css'
import '../../../assets/Style/hover.css'

const Buttons = ({text,color,backgroundColor,borderRadius,padding,fontSize,border,marginTop,width,classname}) => {



    const buttonstyles = {
        'color':color,
        'backgroundColor':backgroundColor,
        'borderRadius':borderRadius,
        'padding':padding,
        'fontSize':fontSize,
        'border':border,
        'marginTop':marginTop,
        'fontweight':'600',
        'cursor':'pointer',
        'width':width,

    }


  
  return (
    <div>
      <button
      style={buttonstyles} 
      id='reusable-button' className={` hvr-sweep-to-right  ${styles.mainButton}`}>
        {text}
      </button>
    </div>
  )
}

export default Buttons
