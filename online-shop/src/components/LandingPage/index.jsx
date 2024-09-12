import {LandingContenair, LandindBg, VideoBg,
    LandingContent, LandingH1, LandingP,LandingBtnWrapper, ArrowForward, ArrowRight
} from "./LandingElement"
import video from '../../videos/video2.mp4'
//import {Button} from "../ButtonElemet"
import { useState } from "react"
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
            <LandingH1>Discover Your Unique Style</LandingH1>
            <LandingP> Explore the latest trends in fashion with Keita-Fashion</LandingP>
            <LandingBtnWrapper>
                <SignupBtnLink to="/signup" onMouseEnter={onHover}
                 onMouseLeave={onHover}
                 primary= "true"
                 dark= "true"
                 >
                    Shop Now {hover ? <ArrowForward/> : <ArrowRight/>}
                </SignupBtnLink>
            </LandingBtnWrapper>
        </LandingContent>
    </LandingContenair>
  )
}

export default LandingPage

