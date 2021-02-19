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
                borderBottom: `2px solid ${color.white}`
            },
            '&:hover:not($disabled):not($focused):not($error):before': {
                borderBottom: `2px solid ${color.white}`
            }
        },
        input: {
            backgroundColor: color.pricingGray,
            fontSize: 'large',
            padding: '0 1rem 0 1rem',
            height: '100%',
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
    color: color.black,
    backgroundColor: color.grayA,
};

export const electricColor = {
    color: color.black,
    backgroundColor: color.white,
};

export default ({
    width = '100%',
    height = '100%',
    type = 'input',
    name = '', id = '',
    isMountainWalkWebsite = true,
    colorStyle = defaultColor,
    ...other }) => {

    const innerElement = <>
        <CustomInput
            id={id}
            name={name}
            disableUnderline={true}
            style={{
                width,
                backgroundColor: colorStyle.backgroundColor,
                color: colorStyle.color,
                height,
                textAlign: 'center'
            }}
            aria-describedby="standard-weight-helper-text"
            // mui prop for aligning to center
            inputProps={{ style: { textAlign: 'center' } }}
            {...other}
        />
    </>
    const component = <>{innerElement}</>;

    return component;
}