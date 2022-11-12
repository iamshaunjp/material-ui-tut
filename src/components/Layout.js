import { ClassNames } from "@emotion/react"
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material"
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useHistory } from "react-router-dom"

const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: 'flex'
  }
})

export const Layout = ({children}) => {
  const history = useHistory()
  const classes = useStyles()
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
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper}}
      >
        <div>
          <Typography variant='h5'>
            Ninja Notes
          </Typography>
        </div>

        <List>
          {menuItems.map(item => (
            <ListItem 
              key={item.text}
              button
              onClick={() => history.push(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItem>
          ))}
        </List>

      </Drawer>
      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
}