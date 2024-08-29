import {LandingContenair, LandindBg, VideoBg,
    LandingContent, LandingH1, LandingP,LandingBtnWrapper, Button, ArrowForward, ArrowRight
} from "./LandingElement"
import video from '../../videos/video.mp4'

import { useState } from "react"
function LandingPage() {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }
  return (
    <LandingContenair>
        <LandindBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
        </LandindBg>
        <LandingContent>
            <LandingH1> Hello Shop</LandingH1>
            <LandingP> Sign Up for New Account here</LandingP>
            <LandingBtnWrapper>
                <Button to="signup" onMouseEnter={onHover}>Sign Up {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
            </LandingBtnWrapper>
        </LandingContent>
    </LandingContenair>
  )
}

export default LandingPage

