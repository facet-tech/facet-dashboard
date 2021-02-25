import React, { useContext } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppContext from '../../../context/AppContext';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

const StyledGrid = styled.div`
    display: grid;
    gap: .5rem;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit);
`;

const StyledInnerDiv = styled.div`
    display: grid;
    gap: .5rem;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit);
`

const BackendFacetCarousel = () => {
    const { backendFacets } = useContext(AppContext);
    const classes = useStyles();
    return <div>
        <div className={classes.root}>
            {backendFacets?.map(backendFacet => {
                const value = backendFacet.value;
                const innerElement = value.map(element => {
                    return <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={element.fullyQualifiedName + "-content"}
                            id={element.fullyQualifiedName + "-header"}
                        >
                            <Typography className={classes.heading}>{element.fullyQualifiedName}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <StyledGrid>
                                {element?.signature?.map(sig => {
                                    return <div>
                                        {sig.name}
                                        <Checkbox
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                            checked={sig.enabled}
                                        />
                                    </div>
                                })}
                            </StyledGrid>
                        </AccordionDetails>
                    </Accordion>
                })
                return <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={backendFacet.name + "-content"}
                        id="panel5a-header"
                    >
                        <Typography className={classes.heading}>{backendFacet.name}</Typography>
                    </AccordionSummary>

                    {innerElement}

                </Accordion>
            })}

        </div>
    </div>
}

export default BackendFacetCarousel;