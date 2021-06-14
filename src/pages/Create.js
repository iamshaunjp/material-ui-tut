import React, { useState } from 'react'
import {Typography} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container' 
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {makeStyles} from '@material-ui/core'
import { TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControlLabel } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles=makeStyles({
 field:{
   marginTop:20,
   marginBottom:20,
   display:'block'
 }
})

export default function Create() {
  const classes=useStyles()
  const history=useHistory()
  const [title,setTitle]=useState()
  const [details,setDetails]=useState()
   const [titleError,setTitleError]=useState(false)
  const [detailsError,setDetailsError]=useState(false)
  const [category,setCategory]=useState('todos')

  const handleSubmit=e=>{
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)
    if(title==''){
      setTitleError(true)
    }
     if(details==''){
      setDetailsError(true)
    }
    if(title && details){
      fetch('http://localhost:3001/notes',{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({title,details,category})
      }).then(()=>history.push('/'))
    }
  }
  return ( 
    <Container>
    <Typography className={classes.title}
    variant='h6' component='h2' gutterBottom color='textSecondary'
    >
    Create a New Note
      </Typography> 

      <form action="" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField className={classes.field}
      onChange={e=>setTitle(e.target.value)}
      label="Note Title"
      variant="outlined"
      color="secondary"
      fullWidth
      required
      error={titleError}
      >
      </TextField>
      <TextField className={classes.field}
      onChange={e=>setDetails(e.target.value)}
      label="Details"
      variant="outlined"
      color="secondary"
      multiline
      rows='4'
      fullWidth
      required
      error={detailsError}
      >
      </TextField>

        
      <FormControl className={classes.field}>
      <FormLabel>Note Category</FormLabel>
      <RadioGroup value={category} onChange={e=>setCategory(e.target.value)}>
      <FormControlLabel value="money" control={<Radio />} label="Money" /> 
      <FormControlLabel value="todos" control={<Radio />} label="Todos" /> 
      <FormControlLabel value="reminders" control={<Radio />} label="Reminders" /> 
      <FormControlLabel value="work" control={<Radio />} label="Work" /> 
      </RadioGroup> 
      </FormControl>

      <Button
      className={classes.btn}
      type="submit"
      color="secondary"
      variant="contained"
      endIcon={<KeyboardArrowRightIcon />}
      >
      Submit
      </Button>
      </form>
    
      <br />

    </Container>  
  )
}


      {/*<ButtonGroup color="secondary" variant="contained">
      <Button type="submit" color="primary" variant="outlined ">Submit</Button>
      <Button>One</Button>
      <Button>Two</Button>
  </ButtonGroup> */}

   {/* icons */}

      {/*<AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color='secondary' fontSize='large' />
      <AcUnitOutlinedIcon color='action' fontSize='small' />*/}

       // btn:{
  //   fontSize:60,
  //   // backgroundColor:'violet',
  //   '&:hover' : {
  //     backgroundColor:'blue'
  //   }
  // },
  // title:{
  //   textDecoration:'underline',
  //   marginBottom:20
  // }

  // <Radio value="hello" />
  //     <Radio value="Goodbye" />