import React from 'react'

const ServicesFooter = (props) => {
  return (
    <div>
      <Typography variant='h2' sx={{ fontSize: '18px', color: 'white', marginTop:'10px' }}>
        {props.name}
      </Typography>
    </div>
  )
}

export default ServicesFooter
