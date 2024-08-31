import { Button } from "react-scroll"
import PropTypes from "prop-types"
import {InfosContainer, InfosWrapper, InfosRow
    , Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWraper
} from "./InfosElement"
function Infos({id}) {
  return (
    <>
        <InfosContainer id={id}>
            <InfosWrapper>
                <InfosRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Top Line</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWraper>
                                <Button to="home">Button</Button>
                            </BtnWraper>
                        </TextWrapper>
                    </Column1>
                </InfosRow>
            </InfosWrapper>
        </InfosContainer>
    </>
  )
}

Infos.propTypes = {
    id: PropTypes.id
}
export default Infos

