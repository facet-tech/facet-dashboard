import { Divider, makeStyles } from "@material-ui/core"
import { dashboardColor } from "../constant";

const FacetDivider = (props) => {

    const useStyles = makeStyles(() => ({
        divider: {
            backgroundColor: props.color ?? dashboardColor.darkGreen,
        },
    }));

    const classes = useStyles();

    return <Divider className={classes.divider} {...props} />
}

export default FacetDivider;