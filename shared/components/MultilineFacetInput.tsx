import React from 'react';
import TextField from '@material-ui/core/TextField';

const MultilineFacetInput = () => {
    return <>
        <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={3}
            defaultValue="Default Value"
            variant="outlined"
        />
    </>
}

export default MultilineFacetInput;