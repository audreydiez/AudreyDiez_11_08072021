import * as React from 'react'
import './index.scss'

const Star = ({ fill, className }) => (

<svg
     viewBox="0 0 30 30"
     fill={fill}
     xmlns="http://www.w3.org/2000/svg"
     className={'star-icon ${className}'}
>
    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
          fill={fill}
    />
</svg>

)

export default Star
