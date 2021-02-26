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
import FacetLabel from '../FacetLabel';
import { color, fontSize } from '../../constant';
import FacetDivider from '../FacetDivider';

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
    width: 100%;
`;

const StyledInnerDiv = styled.div`
    display: grid;
    gap: .5rem;
    grid-auto-flow: column;
 `;

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
                            <Typography className={classes.heading}>{element.fullyQualifiedName}{element.interfaceSignature && ` :element.interfaceSignature[0]`}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <StyledGrid>
                                <StyledInnerDiv>
                                    <div>
                                        <FacetLabel fontSize={fontSize.medium} color={color.black} text="Name" />
                                    </div>
                                    <div style={{ justifySelf: 'end' }}>
                                        <FacetLabel fontSize={fontSize.medium} color={color.black} text="Enabled" />
                                    </div>
                                </StyledInnerDiv>
                                <FacetDivider />
                                {element?.signature?.map(sig => {
                                    return <StyledInnerDiv>
                                        <div style={{ maxWidth: '15rem' }}>
                                            <FacetLabel fontSize={fontSize.medium} color={color.black} text={sig.signature} />
                                        </div>
                                        <div style={{ justifySelf: 'end' }}>
                                            <Checkbox
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                                checked={sig.enabled}
                                            />
                                        </div>
                                    </StyledInnerDiv>
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