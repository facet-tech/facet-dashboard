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
import FunctionCard from './FunctionCard';

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

const SubInnerDiv = styled.div`
    display: grid;
    gap: 1%;
    grid-template-columns: 97% 2%;
 `

const BackendFacetCarousel = () => {
    const { backendFacets, handleEnabledChange } = useContext(AppContext);
    console.log('AA0', backendFacets);
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
                                    return <SubInnerDiv>
                                        <div>
                                            {/* <FacetLabel fontSize={fontSize.medium} color={color.black} text={sig.name} /> */}
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls={element.fullyQualifiedName + "--content"}
                                                    id={element.fullyQualifiedName + "--header"}
                                                >
                                                    <FacetLabel fontSize={fontSize.medium} color={color.black} text={sig.name} />
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <FunctionCard parameter={sig.parameter} returnType={sig.returnType} signature={sig.signature} />
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        <div style={{ justifySelf: 'end' }}>
                                            <Checkbox
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                                checked={sig.enabled}
                                                onChange={() => { handleEnabledChange(sig, backendFacets) }}
                                            />
                                        </div>
                                    </SubInnerDiv>
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