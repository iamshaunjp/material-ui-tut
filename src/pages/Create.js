import React from 'react'
import { useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// import { ButtonGroup } from '@material-ui/core'
import Container from '@material-ui/core/Container'
// import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined'
import SendIcon from '@material-ui/icons/Send'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { FormControlLabel, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)
    
    if (title == '') {
      setTitleError(true)
    }

    if (details == '') {
      setDetailsError(true)
    }

    if (title && details) {
      // console.log(title, details, category)
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    }
  }

  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        color='textSecondary'
        gutterBottom
        className={classes.title}
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField 
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label='Note Title' 
          variant='outlined' 
          color='secondary' 
          fullWidth 
          required
          error={titleError}
        />

        <TextField 
        onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label='Details' 
          variant='outlined' 
          color='secondary' 
          multiline
          rows={4}
          fullWidth 
          required
          error={detailsError}
        />

        {/* <RadioGroup>
          <Radio value='hello' />
          <Radio value='goodbye' />
        </RadioGroup> */}

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value='money' control={<Radio />} label='Money' />
            <FormControlLabel value='todos' control={<Radio />} label='Todos' />
            <FormControlLabel value='reminders' control={<Radio />} label='Reminders' />
            <FormControlLabel value='work' control={<Radio />} label='Work' />
          </RadioGroup>
        </FormControl>
      
        <Button 
          type='submit' 
          color='primary' 
          variant='contained' 
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
      

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

      {/* <Button 
        type='submit' 
        color='secondary' 
        variant='contained' 
        // disableElevation
        onClick={() => console.log('Submit button clicked')}
        className={classes.btn}
      >
        Submit
      </Button> */}

      {/* <Button type='submit' color='primary'>Submit</Button>
      <Button type='submit' color='secondary'>Submit</Button>
      <Button type='submit' color='secondary' variant='outlined' >Submit</Button>

      <ButtonGroup color='secondary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}

      {/* icons */}
      {/* <br></br>
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color='secondary' fontSize='large' />
      <AcUnitOutlinedIcon color='secondary' fontSize='small' />
      <AcUnitOutlinedIcon color='action' fontSize='small' />
      <AcUnitOutlinedIcon color='error' fontSize='small' />
      <AcUnitOutlinedIcon color='disabled' fontSize='small' /> */}

      {/* <Button 
        type='submit' 
        color='secondary' 
        variant='contained' 
        // disableElevation
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button> */}
    </Container>
  )
}
