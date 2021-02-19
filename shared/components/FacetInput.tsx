import { Input, withStyles } from '@material-ui/core';
import { color } from '../constant';

const CustomInput = withStyles(
    {
        focused: {},
        disabled: {},
        error: {},
        underline: {
            '&:before': {
                borderBottom: 'none'
            },
            '&:after': {
                borderBottom: `2px solid ${color.none}`
            },
            '&:hover:not($disabled):not($focused):not($error):before': {
                borderBottom: `2px solid ${color.white}`
            }
        },
        input: {
            '&:-webkit-autofill': {
                transitionDelay: '9999s',
                transitionProperty: 'background-color, color',
            },
            '&::placeholder': {
                // fontStyle: 'italic',
            },
        },
    }
)(Input);

const defaultColor = {
    color: color.primaryGray,
    backgroundColor: color.secondaryGray,
    border: `.124rem solid ${color.black}`
};

export const electricColor = {
    color: color.black,
    backgroundColor: color.white,
};


const FacetInput = ({
    width = '100%',
    type = 'input',
    name = '',
    id = '',
    isMountainWalkWebsite = true,
    colorStyle = defaultColor,
    extraStyle = {},
    ...other }) => {

    const innerElement = <div>
        <CustomInput
            id={id}
            name={name}
            disableUnderline={true}
            style={{
                width,
                backgroundColor: colorStyle.backgroundColor,
                color: colorStyle.color,
                padding: '.3rem',
                height: '2rem',
                border: colorStyle.border,
                ...extraStyle
            }}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
                'aria-label': 'weight',
            }}
            {...other}
        />
    </div>
    const component = <div>{innerElement}</div>;

    return component;
}

export default FacetInput;