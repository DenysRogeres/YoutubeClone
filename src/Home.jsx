import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, IconButton, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';


const useStyles = makeStyles({
    root: {
        height: '100vh',
    },
    icons: {
        paddingRight: 5,
    },
    iconYoutube: {
        height: 30
    },
    appBar: {
        boxShadow: 'none',
    },
    grow: {
        flexGrow: 1
    }
});

export function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                    >
                        <MenuIcon />
                    </IconButton>
                    <img className={classes.iconYoutube} src="../public/images/preto.png" alt="Logo Youtube" />
                    <div className={classes.grow}/>

                    <IconButton className={classes.icons} color='inherit'>
                        <VideoCallIcon />
                    </IconButton>

                    <IconButton className={classes.icons} color='inherit'>
                        <AppsIcon />
                    </IconButton>

                    <IconButton className={classes.icons} color='inherit'>
                        <MoreVertIcon />
                    </IconButton>

                   <Button startIcon={<AccountCircleIcon />}variant="outlined" color='primary'>
                       FAZER LOGIN
                   </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

