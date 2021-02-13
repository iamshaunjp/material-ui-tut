import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function Create() {
  return (
    <div>
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      {/* <Typography
        variant="h1" 
        color="primary"
        align="center"
      >
        Create a New Note
      </Typography>
      <Typography
        noWrap
        color="secondary"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque molestiae magnam voluptate reiciendis fuga totam facere officia, animi sint laboriosam dolorum voluptas cupiditate explicabo dolore veritatis recusandae rem inventore sunt.
      </Typography> */}
    </div>
  )
}
