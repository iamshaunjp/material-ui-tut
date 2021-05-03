import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// import { ButtonGroup } from '@material-ui/core'
import Container from '@material-ui/core/Container'

export default function Create() {
  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        color='textSecondary'
        gutterBottom
      >
        Create a New Note
      </Typography>

      {/* <Typography 
        variant='h1' 
        color='primary'
        align='center'
      >
        Create a New Note
    </Typography>

    <Typography 
        color='secondary'
        noWrap
      >
        Officia proident eu in deserunt pariatur non officia sit. Sunt non mollit sit deserunt cupidatat commodo amet. Do consectetur sit do id aliquip voluptate cillum id. Sunt commodo cillum consectetur ad excepteur do adipisicing reprehenderit sit elit fugiat tempor esse. Nulla dolore eu laborum ex laborum est commodo reprehenderit. Elit deserunt non voluptate magna deserunt id sint. Consequat non anim eiusmod dolor exercitation culpa aliqua ex elit voluptate voluptate magna.
    </Typography> */}

    <Button 
      type='submit' 
      color='secondary' 
      variant='contained' 
      // disableElevation
      onClick={() => console.log('Submit button clicked')}
    >
      Submit
    </Button>

    {/* <Button type='submit' color='primary'>Submit</Button>
    <Button type='submit' color='secondary'>Submit</Button>
    <Button type='submit' color='secondary' variant='outlined' >Submit</Button>

    <ButtonGroup color='secondary' variant='contained'>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup> */}
    </Container>
  )
}
