import React, { useState, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

const CustomScrollbars = ({children, onReachedBottom, ...props}) => {
  const [reachedBottom, setReachedBottom] = useState(false)

  const handleUpdate = ({ scrollTop, scrollHeight, clientHeight }) => {
    const pad = 100
    const t = ((scrollTop + pad) / (scrollHeight - clientHeight))
    if (t > 1) {
      if(scrollTop !== 0) setReachedBottom(true) 
    } else {
      setReachedBottom(false)
    }
  }

  useEffect(() => {
    if(reachedBottom === true) {
      onReachedBottom()
    }
  }, [reachedBottom, onReachedBottom])

  return (
    <Scrollbars style={props.style} onUpdate={handleUpdate}>
      { children }
    </Scrollbars>
  )
}

export default CustomScrollbars
