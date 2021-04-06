import React from 'react';
import TextField from '@material-ui/core/TextField';
import { color, dashboardColor } from '../constant';
import { makeStyles } from '@material-ui/core';

const defaultColor = {
    color: color.white,
    backgroundColor: dashboardColor.darkGray2,
    border: `.124rem solid ${dashboardColor.darkGray2}`
};

const useStyles = makeStyles({
    root: {
        color: 'white'
    },
});

const MultilineFacetInput = (props) => {
    const classes = useStyles();

    return <>
        <TextField
            classes={{
                root: classes.root
            }}
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={3}
            defaultValue="Default Value"
            variant="outlined"
            style={{
                width: '100%',
                backgroundColor: defaultColor.backgroundColor,
                color: 'white !important',
                padding: '.3rem',
                height: '2rem',
                border: defaultColor.border,
            }}
            {...props}
        />
    </>
}

export default MultilineFacetInput;