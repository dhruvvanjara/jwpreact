import React from 'react'
import Header from './header'

const layout = ({child}) => {
  return (
    <div>
        <Header />
        <div>
          {child}
        </div>
    </div>
  )
}

export default layout