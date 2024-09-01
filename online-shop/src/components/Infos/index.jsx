import { Button } from "../ButtonElemet"
import PropTypes from "prop-types"
import {InfosContainer, InfosWrapper, InfosRow
    , Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWraper,
    ImgWraper,
    Img, Column2
} from "./InfosElement"
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
                                <Button to="home">{buttonLabel}</Button>
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

