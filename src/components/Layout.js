import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Drawer } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {format } from 'date-fns'
import { Avatar } from '@material-ui/core';


const drawerWidth=240

const useStyles=makeStyles (theme =>{
    return {
    page:{
        background: '#f9f9f9',
        width:'100%',
        padding:theme.spacing(3)
    },
    drawer:{
        width:drawerWidth
    },
    drawPaper: {
        width:drawerWidth 
    },
    root: {
        display:'flex'
    },
    active:{
        background:'#f4f4f4'
    },
    title:{
        padding:theme.spacing(2)
    },
    appbar:{
        width:`calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date:{
        flexGrow:1
    },
    avatar:{
        marginLeft:theme.spacing(2)
    }
    }
})

const Layout = ({children}) => {
    const classes=useStyles()
    const history=useHistory()
    const location=useLocation()

    const menuItems = [
        {
            text:'My Notes',
            icon:<SubjectOutlined color='secondary' />,
            path:'/'
        },
          {
            text:'Create Note',
            icon:<AddCircleOutlined color='secondary' />,
            path:'/create'
        }
        
    ]

    return (
        <div className={classes.root}>
        {/*app bar*/}
        <AppBar
        className={classes.appbar}
        elevation={0}
        >
        <Toolbar>
        <Typography className={classes.date }>
       Today is the {format(new Date(),'do MMMM Y')}
        </Typography> 
        <Typography>
        Mario
        </Typography>
        <Avatar src="/mario.jpg" className={classes.avatar} />
        </Toolbar>
        </AppBar>

        {/*side bar */}
        <Drawer
        className={classes.drawer} variant="permanent" anchor="left" classes={{ paper:classes.drawPaper }}
        >
        <div>
        <Typography variant='h5' className={classes.title}>
        ShortHand
        </Typography>
        </div>

        {/*list / links */}
        <List>
         {menuItems.map(item=>(
             <ListItem
              key={item.text} 
              button 
              onClick={()=>history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
             >
             <ListItemIcon>{item.icon}</ListItemIcon>
             <ListItemText primary={item.text} />
             </ListItem>
         ))}
        </List>

        </Drawer>

        <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
        </div>
        </div>
    )
}

export default Layout


// <ListItem>
//         <ListItemText primary="hello" />
//         </ListItem>
//         <ListItem>
//         <ListItemText primary="hello" />
//         </ListItem> 