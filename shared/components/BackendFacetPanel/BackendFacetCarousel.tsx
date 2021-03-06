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
        accordionDetails: {
            display: 'inherit !important'
        }
    }),
);

const StyledGrid = styled.div`
    display: grid;
    gap: .5rem;
    grid-template-columns: 100%;
`;

const SubInnerDiv = styled.div`
    display: grid;
    gap: 1%;
    grid-template-columns: 90% 2%;
 `

const BackendFacetCarousel = () => {
    const { backendFacets, handleEnabledChange } = useContext(AppContext);
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
                        <AccordionDetails classes={{
                            root: classes.accordionDetails
                        }}>
                            <StyledGrid>
                                {element?.signature?.map(sig => {
                                    return <SubInnerDiv>
                                        <div>
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
                                        <div>
                                            <Checkbox
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                                checked={sig.enabled}
                                                onChange={() => { handleEnabledChange(sig, element) }}
                                            />
                                        </div>
                                    </SubInnerDiv>
                                })}
                            </StyledGrid>
                        </AccordionDetails>
                    </Accordion>
                })
                return innerElement
            })}
        </div>
    </div>
}

export default BackendFacetCarousel;