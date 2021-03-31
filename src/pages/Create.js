import { React, Fragment } from 'react'
import { Typography, Button, Container, ButtonGroup } from '@material-ui/core'

export default function Create() {
  return (
    <Container>
      <Typography variant="h4" align="center" component="h2" color="primary">
        Create Something
      </Typography>
      <Typography color="textPrimary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa blanditiis ea, voluptatibus nostrum fuga adipisci laudantium id a, magnam recusandae minima nesciunt corporis vitae aut! Placeat dolorem velit maiores dolorum culpa quod ipsum numquam sequi a, dicta quibusdam possimus, quasi voluptas alias consequatur. Commodi amet, quibusdam quaerat quas dolor est voluptates hic deleniti adipisci pariatur suscipit magni expedita quo odio alias molestiae tenetur ipsa! Vero aperiam cumque, ducimus perferendis distinctio nobis nihil ex, voluptatibus consequuntur voluptatem obcaecati asperiores minus sequi laudantium neque, itaque eum enim iste nostrum est? Eius, amet doloremque. Placeat expedita aliquam repudiandae molestiae dolor magni quas saepe.
      </Typography>

      <Button
        type="submit"
        variant="contained"
        color="secondary"
      >
        Submit
        </Button>

      <ButtonGroup variant="contained" color="primary">
        <Button color="secondary" variant="outlined" >1</Button>
        <Button>2</Button>
        <Button>3</Button>

      </ButtonGroup>
    </Container >
  )
}
