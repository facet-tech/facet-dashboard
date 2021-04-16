import { Input, withStyles } from '@material-ui/core';
import { color, dashboardColor } from '../constant';

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
            },
        },
    }
)(Input);

const defaultColor = {
    color: color.black,
    backgroundColor: dashboardColor.lightGray,
    border: `.124rem solid ${dashboardColor.darkGray2}`
};

export const secondaryColor = {
    color: dashboardColor.lightGray,
    backgroundColor: dashboardColor.darkGray2,
    border: `none`
}

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
    maxLength = 40,
    ...other }) => {

    const innerElement = <div>
        <CustomInput
            type={type}
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
                maxLength
            }}
            {...other}
        />
    </div>
    const component = <div>{innerElement}</div>;

    return component;
}

export default FacetInput;