import styled from 'styled-components';
import { color, documentationIds } from '../constant'


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from "@material-ui/core";


const StyledDiv = styled.div`
    background-color: white;
`

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 600,
    },
    body: {
        color: "#5D5D5D"
    },
    border: {
    },
    borderDetails: {
    },
    shadow: {
        boxShadow: "0px 2px 1px -1px #9D1757, 0px 1px 1px 0px #9D1757, 0px 1px 3px 0px #9D1757"
    }
}));


export default function FAQ() {
    const classes = useStyles();
    return (
        <StyledDiv>
            <h2 id={documentationIds.faq} style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }}>FAQ</h2>

            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                >
                    <Typography className={classes.heading}>Is your platform production-ready?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Version 1 of our product, the facet extension, is production-ready. There might be some edge cases and bugs to iron out.
                        We would be glad to receive your feedback and we are committed to providing you hands-on support on any issues that might arise during onboarding.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"

                >
                    <Typography className={classes.heading}>What is a facet?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        A facet is a set elements that construe a feature. For instance, a login form could be considered a facet, with the elements being email, password and the login button.
                    <div style={{ textAlign: 'center' }}>
                            <figure>
                                <img width='100%' src='../../images/authentication_facet_example.png' />
                                <figcaption>Facet declaration</figcaption>
                            </figure>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                >
                    <Typography className={classes.heading}>Why choose facet as your feature management solution?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Facet abstracts the rollout process that is commonly achieved by using feature flags. At facet, we believe that engineers shouldn't spend their time maintaining manual configurations like the ones feature flags require. We enable engineers to focus on building their product, while we build the rollout abstractions to support them throughout the journey.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}>What is your roadmap?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        Some of our scheduled features are the following:
                        <ol>
                            <li>Ability to schedule a rollout</li>
                            <li>CRUD facets in responsive layouts</li>
                            <li>Add environment configuration</li>
                            <li>Personalized Dashboard</li>
                            <li>OAuth 2.0 and Single Sign-On (SSO)</li>
                        </ol>
                        You can also find what we are currently working on through our <a href='https://github.com/facets-io'>GitHub page</a>. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}>Can I declare facets in my backend?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        Not yet. Our team is developing solutions to offer backend system support. Stay tuned!
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}> Is JS/HTML code delivered at all after disabling a facet?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        JS code is delivered at all times to the end user. The facet CDN script observes facets and hides them from the website, but code is still being delivered to the website.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}>Can I manage features that appear in multiple pages?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        Yes! By default, facets are declared with a global scope. You can change their visibility to non-global, which means that their rules will be applied to the current domain (pathname). Click on the desired facet {'->'} select the "more options button", and click on the "global" checkbox.
                        <br />
                        <figure>
                            <img width='100%' src='../../images/global_facet_declaration.png' />
                            <figcaption>Global facet declaration</figcaption>
                        </figure>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}>Is facet secure?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        At facet, security is at the center of our priorities. We have integrated with multiple vendors who champion DevSecOps, including <a href='https://snyk.io/'>Snyk</a> and {''}
                        <a href='https://github.com/dependabot'>Github</a>, to ensure secure codebases. We are also working on getting CCPA, GDPR, HIPAA, FERPA, PCI, SOC 2 and other data privacy regulations.                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}>Is facet open source?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        Currently, the facet extension is <a href='https://github.com/facets-io/'></a>open source. We support open source initiatives as well as the community support that comes with it, and we plan to open source more of our systems as they become more mature.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </StyledDiv>
    )
}
