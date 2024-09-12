//import { Button } from "../ButtonElemet"
import PropTypes from "prop-types"
import {InfosContainer, InfosWrapper, InfosRow
    , Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWraper,
    ImgWraper,
    Img, Column2
} from "./InfosElement"
import styled from "styled-components"
import { Link as LinkR } from "react-router-dom";
export const SignupBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #ff4081;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    border: none;
    outline:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

`
function Infos({id, lightBg, imgStart,
    topLine, lightText, headLine,
    darkText, description, buttonLabel, img, alt }) {
  return (
    <>

        <InfosContainer lightBg={lightBg} id={id}>
            <InfosWrapper>
                <InfosRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWraper>
                                <SignupBtnLink to="/signin">{buttonLabel}</SignupBtnLink>
                            </BtnWraper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWraper>
                             <Img src={img} alt={alt}/>
                        </ImgWraper>
                    </Column2>
                </InfosRow>
            </InfosWrapper>
        </InfosContainer>
    </>
  )
}

Infos.propTypes = {
    id: PropTypes.object,
    lightBg: PropTypes.bool,
    imgStart:PropTypes.bool,
    topLine: PropTypes.string,
    lightText: PropTypes.bool,
    headLine: PropTypes.string,
    darkText: PropTypes.bool,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    img: PropTypes.object,
    alt: PropTypes.string,


}
export default Infos

