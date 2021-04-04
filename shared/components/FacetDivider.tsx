import { Divider, makeStyles } from "@material-ui/core"
import { color, dashboardColor } from "../constant";

const useStyles = makeStyles(() => ({
    divider: {
        backgroundColor: dashboardColor.darkGreen,
    },
}));

const FacetDivider = (props) => {
    const classes = useStyles();

    return <Divider className={classes.divider} {...props} />
}

export default FacetDivider;