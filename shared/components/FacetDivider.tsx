import { Divider, makeStyles } from "@material-ui/core"
import { color } from "../constant";

const useStyles = makeStyles(() => ({
    divider: {
        backgroundColor: color.lightGray,
    },
}));

const FacetDivider = (props) => {
    const classes = useStyles();

    return <Divider className={classes.divider} {...props} />
}

export default FacetDivider;