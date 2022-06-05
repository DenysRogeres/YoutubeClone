import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, IconButton, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const useStyles = makeStyles({
    root: {
        height: '100vh',
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
                    <div className={classes.grow}/>
                   <Button startIcon={<AccountCircleIcon />}variant="outlined" color='primary'>
                       FAZER LOGIN
                   </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

