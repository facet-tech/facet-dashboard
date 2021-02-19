import { useState } from 'react';
import styled from 'styled-components';
import { color, isMobile, isMobileLg } from '../constant';
import Link from 'next/link'
import FacetLabel from './FacetLabel';
import { pages } from './AppContext'
import FacetButton, { primaryBtnColor } from "./FacetButton";
import useMedia from '../hooks/useMedia';
import FacetIconButton from './FacetIconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useRouter } from 'next/router';

const LogoDiv = styled.div`
    display: grid;
    grid-template-columns: 5rem 3rem;
    cursor: pointer;
    align-items: center;

    @media (max-width: 1024px) {
        display: grid;
        grid-gap: 2%;
        grid-template-columns: 2rem;
        align-items: center;
        justify-content: start;
    }
`;

const LeftDiv = styled.div`
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    justify-content: left;
`;

const RightDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 1.5rem;
  padding: 0 60px;
  justify-content: end;
`;

const InnerDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 80%;
    align-items: center;
    justify-content: left;
`;

const OuterDiv = styled.div`
    display: grid;
    grid-template-columns: 85%; 
    justify-content: center;

    @media (max-width: 1024px) {
        display: grid;
        grid-gap: 5%;
        grid-template-columns: 50% 15% 10%;
        align-items: center;
        justify-content: center;
    }
`;

const LabelContainer = styled.div`
    cursor: pointer;
`

export default function Navbar({ activePage = '' }) {
    const media = useMedia();
    const isViewMobile = isMobileLg(media);
    const [anchorEl, setAnchorEl] = useState(null);
    const router = useRouter();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const NavLabel = ({ text }) => <FacetLabel fontFamily="Roboto" fontWeight={activePage === text ? 500 : 300} fontSize="16px" color={activePage === text ? color.primary : color.black} text={text} />;

    const LogoLink = isViewMobile ? <Link href="/">
        <LogoDiv>
            <img src="/facet_primary.svg" alt="Facet logo" />
        </LogoDiv>
    </Link> : <Link href="/">
            <LogoDiv>
                <img src="/facet_primary.svg" alt="Facet logo" />
                <img src="/facet_typography_black.svg" alt="Facet" />
            </LogoDiv>
        </Link>;

    const displayingElement = isViewMobile ? <>
        <OuterDiv>
            <div>
                {LogoLink}
            </div>
            <div style={{ justifySelf: 'end' }}>
                <FacetButton
                    onClick={() => { window.open("https://chrome.google.com/webstore/detail/facet/hpkpjkdhgldjhcopdkmljdgceeojoglh?hl=en"); }}
                    colorButtonStyle={primaryBtnColor}
                    text="Download"
                />
            </div>
            <div style={{ justifySelf: 'center' }}>
                <FacetIconButton iconWidth="40" iconHeight="70" size="medium" title="Enable" key="edit" fill={color.primary} name="menu-outline" onClick={handleClick} />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Link href="/">
                        <MenuItem onClick={handleClose}>
                            <LabelContainer>
                                <NavLabel text={pages.Home} />
                            </LabelContainer>
                        </MenuItem>
                    </Link>
                    <Link href="/pricing">
                        <MenuItem onClick={handleClose}>
                            <LabelContainer>
                                <NavLabel text={pages.Pricing} />
                            </LabelContainer>
                        </MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>
                        <Link href="/documentation">
                            <LabelContainer>
                                <NavLabel text={pages.Documentation} />
                            </LabelContainer>
                        </Link>
                    </MenuItem>
                    <Link href="/blog">
                        <MenuItem>
                            <LabelContainer>
                                <NavLabel text={pages.Blog} />
                            </LabelContainer>
                        </MenuItem>
                    </Link>
                    <Link href="/contact">
                        <MenuItem onClick={handleClose}>
                            <LabelContainer>
                                <NavLabel text={pages.Contact} />
                            </LabelContainer>
                        </MenuItem>
                    </Link>
                    <a href="https://github.com/facets-io" target="_blank" style={{
                        textDecoration: 'none'
                    }}>
                        <MenuItem onClick={handleClose}>
                            <div>
                                <FacetLabel fontFamily="Roboto" fontWeight={300} fontSize={"16px"} color={color.black} text='GitHub' />
                            </div>
                        </MenuItem>
                    </a>
                </Menu>
            </div>
        </OuterDiv>
    </> : <>
            <OuterDiv>
                <br />
                <InnerDiv>
                    <LeftDiv>
                        {LogoLink}
                    </LeftDiv>
                    <RightDiv>
                        <Link href="/">
                            <LabelContainer>
                                <NavLabel text={pages.Home} />
                            </LabelContainer>
                        </Link>
                        <Link href="/pricing">
                            <LabelContainer>
                                <NavLabel text={pages.Pricing} />
                            </LabelContainer>
                        </Link>
                        <Link href="/documentation">
                            <LabelContainer>
                                <NavLabel text={pages.Documentation} />
                            </LabelContainer>
                        </Link>
                        <Link href="/blog">
                            <LabelContainer>
                                <NavLabel text={pages.Blog} />
                            </LabelContainer>
                        </Link>
                        <Link href="/contact">
                            <LabelContainer>
                                <NavLabel text={pages.Contact} />
                            </LabelContainer>
                        </Link>
                        <a href="https://github.com/facets-io" style={{
                            textDecoration: 'none'
                        }} target="_blank">
                            <div style={{ cursor: 'pointer' }}>
                                <FacetLabel fontFamily="Roboto" fontWeight={300} fontSize={"16px"} color={color.black} text='GitHub' />
                            </div>
                        </a>
                        <div style={{ justifySelf: 'end' }}>
                            <FacetButton
                                onClick={() => { window.open("https://chrome.google.com/webstore/detail/facet/hpkpjkdhgldjhcopdkmljdgceeojoglh?hl=en") }}
                                colorButtonStyle={primaryBtnColor}
                                text="Download"
                            />
                        </div>
                    </RightDiv>
                </InnerDiv>
                <br />
            </OuterDiv>
        </>;

    return (
        displayingElement
    );
}