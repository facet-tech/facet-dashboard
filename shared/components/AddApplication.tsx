import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import AppContext from '../../context/AppContext';
import FacetH1 from './FacetH1';
import FacetParagraph from './FacetParagraph';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { color } from '../constant';

const MapCodeBlock = () => {
    const codeString = `    byte    ->  Byte.MIN_VALUE
    short   ->  Short.MIN_VALUE
    int     -> Integer.MIN_VALUE
    long    -> Long.MIN_VALUE
    float   -> Float.MIN_VALUE
    double  -> Double.MIN_VALUE
    char    -> Character.MIN_VALUE
    boolean -> false
    void    -> void
    other   -> null`;

    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const MVNCodeBlock = () => {
    const codeString = `<dependency>
    <groupId>run.facet</groupId>
    <artifactId>facet</artifactId>
    <version>0.0.1</version>
</dependency>`;

    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const JavaAgent = () => {
    const codeString = `-javaagent:{JAR_PATH_VARIABLE}`

    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );

}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color.darkestGray
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            margin: '10rem',
            padding: '1rem'
        },
    }),
);

interface FadeProps {
    children?: React.ReactElement;
    in: boolean;
    onEnter?: () => {};
    onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

const YMLCode = () => {
    const { apiKey, workspaceId } = useContext(AppContext);
    const facetYmlString = `workspaceId: ${workspaceId}
name: My-Application
environment: dev
apiKey: ${apiKey}`

    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {facetYmlString}
        </SyntaxHighlighter>
    );
}

const AddApplication = () => {

    return <>
        <div>
            <div>
                <FacetH1>Introduction</FacetH1>
                <FacetParagraph>
                    The Facet Java SDK can be used with the Spring Framework. Facet's Java-Agent allows <b>enabling</b> and <b>disabling</b> methods and endpoints in your application.
                    When a method is disabled, a default value is returned, which is usually the minimum value of the class. On this page, you will get up and running with the Facet's SDK,
                    and be able to automatically switch methods and endpoints to enable/disable. This is how values are mapped:
                    <MapCodeBlock />
                </FacetParagraph>
                <br />
                <FacetH1>Install</FacetH1>
                <FacetParagraph>
                    Facet captures data by using an SDK within your application’s runtime. Facet-agent can be found in the {' '}
                    <a target='_blank' href='https://search.maven.org/artifact/run.facet.agent.java/facet-agent'>sonatype distribution.</a>
                    <MVNCodeBlock />
                </FacetParagraph>
                <br />
                <div>
                    <FacetH1>Verify</FacetH1>
                    <FacetParagraph>
                        Download and add the JAR in the VM options, prior to starting your server.
                                <JavaAgent />
                                Replace <i>{"JAR_PATH_VARIABLE"}</i> with the path of the JAR. This will inject the Facet agent into the application.
                                Last but not least create a <i>facet.yml</i> {' '} file in your project directory. The file contains your <i>workspaceId</i>, your project's name and your environment.
                                You can retrieve your workspaceId by login in into the dashboard.
                        <YMLCode />
                        Navigate into the <a href='https://app.facet.run' target='_blank'>dashboard</a>. Right after you login, select "Applications" -&gt; "My-Application". You should be able to see
                        all the live methods and endpoints, alongside with a checkbox allowing their enablement and disablement.
                        You should now be able to enable/disable methods and endpoints throughout the application.
                        </FacetParagraph>
                </div>
            </div>
        </div>
    </>
}

export default AddApplication;