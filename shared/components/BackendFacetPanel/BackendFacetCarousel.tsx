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
import { color, dashboardColor } from '../../constant';
import FunctionCard from './FunctionCard';
import ParserBackendService from '../../../services/ParserBackendService';
import Icon from '../Icon';

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
    grid-template-columns: 95% 2%;
 `

const StyledAccordion = styled(Accordion)`
    background-color: ${color.grayB3};
    color: ${color.grayB};
`;

const StyledAccordionSummary = styled(AccordionSummary)`
    background-color: ${color.grayB3};
    color: ${color.grayB},
`

const BackendFacetCarousel = () => {
    const { backendFacets, handleEnabledChange } = useContext(AppContext);
    const classes = useStyles();
    return <div>
        <div className={classes.root}>
            {backendFacets?.map(backendFacet => {
                const value = backendFacet.value;
                const innerElement = value.map(element => {
                    const containsEndpoints = ParserBackendService.containsEndpoints(element?.annotation)
                    const pathName = containsEndpoints ? ParserBackendService.getPathName(element?.annotation) : null;
                    return <StyledAccordion style={{
                        backgroundColor: color.grayB3,
                        color: color.grayB
                    }}>
                        <StyledAccordionSummary
                            expandIcon={<ExpandMoreIcon style={{
                                color: color.grayB4,
                            }} />}
                            aria-controls={element.fullyQualifiedName + "-content"}
                            id={element.fullyQualifiedName + "-header"}
                            style={{
                                backgroundColor: color.grayB3,
                                color: color.grayB
                            }}
                        >
                            <Typography className={classes.heading}>
                                {element.fullyQualifiedName}
                                {containsEndpoints ? <>
                                    <br />
                                    <b>
                                        <Icon iconWidth="20"
                                            iconHeight="15"
                                            fill={color.grayB4}
                                            name="settings-outline"
                                            title="settings-outline" />
                                        {pathName}
                                    </b>
                                </> : null}
                            </Typography>
                        </StyledAccordionSummary>
                        <AccordionDetails classes={{
                            root: classes.accordionDetails
                        }}
                            style={{
                                backgroundColor: color.grayB3,
                                color: color.grayB
                            }}>
                            <StyledGrid>
                                {element?.signature?.map(sig => {
                                    const sigPathName = containsEndpoints ? ParserBackendService.getPathName(sig?.annotation) : undefined;
                                    const endpointType = containsEndpoints ? ` - ${ParserBackendService.getEndpointType(sig?.annotation)}` : undefined;
                                    return <SubInnerDiv>
                                        <div>
                                            <StyledAccordion>
                                                <StyledAccordionSummary
                                                    expandIcon={<ExpandMoreIcon style={{
                                                        color: color.grayB4,
                                                    }} />}
                                                    aria-controls={element.fullyQualifiedName + "--content"}
                                                    id={element.fullyQualifiedName + "--header"}
                                                    style={{
                                                        backgroundColor: '#3E4249',
                                                        color: color.grayB
                                                    }}
                                                >
                                                    <Typography>
                                                        {sig.name}
                                                        <br />
                                                        <span>{pathName}{sigPathName}</span>{' '}
                                                        {/* <span>{endpointType}</span> */}
                                                    </Typography>
                                                </StyledAccordionSummary>
                                                <AccordionDetails style={{
                                                    backgroundColor: '#3E4249',
                                                    color: color.grayB
                                                }}>
                                                    <FunctionCard parameter={sig.parameter} returnType={sig.returnType} signature={sig.signature} />
                                                </AccordionDetails>
                                            </StyledAccordion>
                                        </div>
                                        <div>
                                            <Checkbox
                                                style={{ color: dashboardColor.green }}
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                                checked={sig.enabled}
                                                onChange={() => { handleEnabledChange(sig, element) }}
                                            />
                                        </div>
                                    </SubInnerDiv>
                                })}
                            </StyledGrid>
                        </AccordionDetails>
                    </StyledAccordion>
                })
                return innerElement
            })}
        </div>
    </div >
}

export default BackendFacetCarousel;