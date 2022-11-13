import { ClassNames } from "@emotion/react"
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material"
import { AppBar, Avatar, avatarClasses, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useHistory, useLocation } from "react-router-dom"
import { format } from "date-fns"

const drawerWidth = 160

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    root: {
      display: 'flex'
    },
    active: {
      backgroundColor: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2)
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    },
    avatar: {
      marginLeft: theme.spacing(2)
    }
  }
})

export const Layout = ({children}) => {
  const history = useHistory()
  const classes = useStyles()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary'/>,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlined color='secondary'/>,
      path: '/create'
    }
  ]

  return (
    <div className={classes.root}>

      <AppBar 
        className={classes.appBar}
        elevation={0}
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is the { format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>
            Mario
          </Typography>
          <Avatar className={classes.avatar} src='/mario-av.png' />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper}}
      >
        <div>
          <Typography variant='h5' className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        <List>
          {menuItems.map(item => (
            <ListItem 
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItem>
          ))}
        </List>

      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}>
        </div>
        {children}
      </div>
    </div>
  )
}