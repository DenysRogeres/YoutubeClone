import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, IconButton, Toolbar } from '@mui/material';


const useStyles = makeStyles({
    root: {
        height: '100vh',
    },
});

export function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <IconButton>
                     
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

