import { React } from 'react'
import { Typography, Button, Container, makeStyles } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: "underline",
  }

})

export default function Create() {

  const classes = useStyles()

  return (
    <Container>
      <Typography className={classes.title} variant="h4" align="center" component="h2" color="primary">
        Create a New Note
      </Typography>
      <Typography color="textPrimary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa blanditiis ea, voluptatibus nostrum fuga adipisci laudantium id a, magnam recusandae minima nesciunt corporis vitae aut! Placeat dolorem velit maiores dolorum culpa quod ipsum numquam sequi a, dicta quibusdam possimus, quasi voluptas alias consequatur. Commodi amet, quibusdam quaerat quas dolor est voluptates hic deleniti adipisci pariatur suscipit magni expedita quo odio alias molestiae tenetur ipsa! Vero aperiam cumque, ducimus perferendis distinctio nobis nihil ex, voluptatibus consequuntur voluptatem obcaecati asperiores minus sequi laudantium neque, itaque eum enim iste nostrum est? Eius, amet doloremque. Placeat expedita aliquam repudiandae molestiae dolor magni quas saepe.
      </Typography>

      <Button
        className={classes.btn}
        type="submit"
        variant="contained"
        color="secondary"
        endIcon={<ArrowForwardIosIcon fontSize="small" />}
      >
        Submit
        </Button>
    </Container >
  )
}
