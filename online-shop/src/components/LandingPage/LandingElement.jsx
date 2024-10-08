import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
export const LandingContenair = styled.div`

    background:#0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
    height: 800px;
    position: relative;
    z-index:1;


`
export const LandindBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`

width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const LandingContent = styled.div`

    z-index:3;
    max-width:1200px;
    position:absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const LandingH1 = styled.h1`

    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen  and (min-width: 768px) {
        font-size: 40px;
    }

    @media screen  and (min-width: 480px) {
        font-size: 32px;
    }
`
export const LandingP = styled.p`

    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;


    @media screen  and (min-width: 768px) {
        font-size: 24px;
    }

    @media screen  and (min-width: 480px) {
        font-size: 18px;
    }
`

export const LandingBtnWrapper = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
export const Button = styled.button`
    color: #01d;
`
