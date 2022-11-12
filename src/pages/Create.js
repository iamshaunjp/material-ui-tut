import React from 'react'
import { Typography, Button, Container } from '@mui/material'
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
// import SendIcon from '@mui/icons-material/SendIcon';
import { makeStyles } from '@mui/material'

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  }
})

export default function Create() {
  const classes = useStyles()

  return (
    <Container>
      Create page
      <Typography 
        variant='h4'
        color='primary'
        align='left'
      >
        Create a New Note
      </Typography>
      <Typography 
        color='secondary'
        // noWrap
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia est quaerat odio similique obcaecati repellendus impedit maiores sed dicta doloribus, perspiciatis deleniti, provident ea. Aut praesentium magni fuga optio?
      </Typography>
      <Typography 
        variant='h6'
        component='h2'
        color='textSecondary'
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        className={classes.btn}
        type='submit'
        color='secondary'
        variant='contained'
        onClick={() => console.log('you clicked me')}
        // startIcon={SendIcon}
      >
        Submit
      </Button>
      <br />
      <AccountBalanceWalletTwoToneIcon />
      <AccountBalanceWalletTwoToneIcon 
        color='secondary'
        fontSize='large'
      />
      <AccountBalanceWalletTwoToneIcon 
        color='error'
        fontSize='small'
      />
      <AccountBalanceWalletTwoToneIcon 
        color='action'
        fontSize='large'
      />
    </Container>
  )
}
