import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import Card from '@material-ui/core/Card';
import { color, fontSize, snackbar as snackbarConstants } from '../constant';
import Icon from 'react-eva-icons';
import FacetLabel from './FacetLabel';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            minWidth: '344px !important',
        },
        padding: '1rem',
        marginLeft: '4rem'
    },
    card: {
        display: 'grid',
        backgroundColor: color.darkGray,
        width: '100%',
        height: '5rem',
        borderRadius: '3rem',
        gridTemplateColumns: '15% 85%',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #FFFFFF',
        marginTop: '-1rem'
    },
    icon: {
        textAlign: 'center'
    },
}));

const FacetSnackbar = React.forwardRef((props, ref) => {
    const classes = useStyles();
    const { closeSnackbar } = useSnackbar();
    const [expanded, setExpanded] = useState(false);

    const handleDismiss = () => {
        //@ts-ignore
        closeSnackbar(props.id);
    };
    //@ts-ignore
    const { variant, message } = props;
    return (
        //@ts-ignore
        <div ref={ref} className={classes.root}>
            <Card className={classes.card}>
                <div className={classes.icon}>
                    <Icon
                        name={snackbarConstants[variant]['iconName']}
                        size='large'
                        fill={snackbarConstants[variant]['fill']}
                    />
                </div>
                <div>
                    <FacetLabel fontSize={fontSize.medium} color={color.white} text={message} />
                </div>
            </Card>
        </div>
    );
});

export default FacetSnackbar;