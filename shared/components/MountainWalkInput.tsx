import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import styled from 'styled-components';
import { color as colorConstant, mountainWalkColors } from '../constant';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '20rem',
        borderRadius: '1rem',
        backgroundColor: `${colorConstant.grayA}`
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: colorConstant.white
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const StyledPaper = styled(Paper)`
    padding: .8rem;
    display: flex;
    alignItems: center;
    width: 20rem;
    border-radius: 3rem !important;
    background-color: ${mountainWalkColors.gray}!important;
`;

const StyledInputBase = styled(InputBase)`
        flex: 1;
        color: ${colorConstant.white}!important;
        input::placeholder {
            color: white !important;
            opacity: 1;
        }
        input:-ms-input-placeholder {
            color: white !important;
        }
        input::-ms-input-placeholder {
            color: white !important;
        }
`;

export default () => {
    const classes = useStyles();

    return <StyledPaper>
        <StyledInputBase
            className='mountain-website-input'
            placeholder="Type your search here"
            inputProps={{ 'aria-label': 'mountain-walk search' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon style={{ color: colorConstant.white }} />
        </IconButton>
    </StyledPaper>
}