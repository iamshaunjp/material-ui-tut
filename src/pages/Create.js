import React, { useState } from 'react'
import { Typography, Button, Container, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('hello')

  const handleSubmit = e => {
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
      console.log(title, details, category);
    }
  }

  return (
    <Container size="sm">
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form 
        noValidate 
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField 
          onChange={e => setTitle(e.target.value)}
          className={classes.field}
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />
        <TextField 
          onChange={e => setDetails(e.target.value)}
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

      <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={e => setCategory(e.target.value)}>
          <FormControlLabel value='hello' control={<Radio/>} label='hello'/>
          <FormControlLabel value='bye' control={<Radio/>} label='bye'/>
          <FormControlLabel value='thanks' control={<Radio/>} label='thanks'/>
        </RadioGroup>
      </FormControl>  
        
        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>

      

      
    </Container>
  )
}
