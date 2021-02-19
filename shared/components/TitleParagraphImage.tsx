import styled from 'styled-components';
import { isMobile } from '../constant';
import useMedia from '../hooks/useMedia';

const InnerDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 40% 40%;
    text-align: initial;
    justify-content: center;
    margin-top: 2rem;

    @media (max-width: 720px) {
        display: grid;
        grid-template-columns: 85%;
        justify-content: center;
        text-align: initial;
    }
`;

const TitleParagraphImage = ({ element, isReverse = false }) => {
    const media = useMedia();
    const isViewMobile = isMobile(media);

    const result = isViewMobile ? <InnerDiv>
        <div>
            {element.title}
            <br />
            {element.paragraph}
            <br />
            <br />
            <div style={{ width: '100%!important' }}>
                {element.image}
            </div>
            {element.extraElement ? <>
                <br />
                <div>
                    {element.extraElement}
                </div>
            </> : null}
        </div>
    </InnerDiv> : !isReverse ? <InnerDiv>
        <div>
            {element.title}
            <br />
            {element.paragraph}
            <br />
            {element.extraElement ? <>
                {element.extraElement}
            </> : null}
        </div>
        <div>
            <br />
            {element.image}
        </div>
    </InnerDiv> : <InnerDiv>
                <div>
                    <br />
                    {element.image}
                </div>
                <div>
                    {element.title}
                    <br />
                    {element.paragraph}
                </div>
            </InnerDiv>
    return result;
}

export default TitleParagraphImage;