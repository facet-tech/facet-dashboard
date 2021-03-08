import React, { useState, useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import AppContext from '../../context/AppContext';
import { color } from '../../shared/constant';
import FacetLabel from '../../shared/components/FacetLabel';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
        },
        ul: {
            "& .MuiPaginationItem-root": {
                color: "#fff"
            }
        }
    }),
);

const PaginatedTable = () => {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const { domains } = useContext(AppContext);
    const [page, setPage] = React.useState(1);

    const startIndex = (page - 1) * 10;
    const endIndex = ((page - 1) * 10) + 10;
    const currDomains = domains?.slice(startIndex, endIndex) || [];

    const totalDomains = !domains || domains.length === 0 ? 0 : Math.ceil(domains.length / 10);
    const classes = useStyles();

    let element = totalDomains === 0 ? <div>
        <FacetLabel text="No Domains Found." />
    </div> : <div className={classes.root}>
        <Pagination classes={{ ul: classes.ul }} page={page} onChange={handleChange} count={totalDomains} />
        {currDomains?.map(domain => {
            return <li style={{ color: color.white }}>
                {domain.domain}
            </li>
        })}
    </div>
    return element
}

export default PaginatedTable;