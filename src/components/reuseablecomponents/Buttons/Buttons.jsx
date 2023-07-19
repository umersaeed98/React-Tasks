


import React from 'react'

const Buttons = ({text,color,backgroundColor,borderRadius,padding,fontSize,border,marginTop}) => {
    const styles = {
        'color':color,
        'backgroundColor':backgroundColor,
        'borderRadius':borderRadius,
        'padding':padding,
        'fontSize':fontSize,
        'border':border,
        'marginTop':marginTop,
        'fontweight':'600',
        'cursor':'pointer'
    }
  return (
    <div>
      <button style={styles}>
        {text}
      </button>
    </div>
  )
}

export default Buttons
