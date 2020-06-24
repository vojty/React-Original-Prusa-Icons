import styled, { keyframes } from 'styled-components'

import { ColorMode } from '../../config'
import React from 'react'

interface IProps {
    size?: string,
    borderColor?: string,
    backgroundColor?: string,
    innerColor?: string,
    colorMode?: ColorMode 
}

const rotate = keyframes`
    0% {
        transform: translateX(-50%) rotate(0deg);
    }
    100% {
        transform: translateX(-50%) rotate(360deg);
    }
`
const Container = styled.div<IProps>`
    width: ${props => props.size};
    height: ${props => props.size};
    margin: 0 auto;
    background: ${props => props.backgroundColor};
    overflow: hidden;
    transform: translate(-50%, -50%);
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
 `

const Border = styled.div<IProps>`
    width: 90%;
    height: 90%;
    background: ${props => props.borderColor};
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: hidden;
    transform: translate(-50%, -50%);
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
`

const Content = styled.div<IProps>`
    width: 150%;
    height: 100%;
    background: ${props => props.innerColor};;
    position: absolute;
    top: 50%;
    left: 50%;
    animation: ${rotate} 2s infinite linear;
    transform-origin: center top;
`

const Spinner: React.FC<IProps> = (props) => {

    return (
        <Container {...props} >
            <Border >
                <Content />
            </Border>
        </Container >
    )
}

export default Spinner

Spinner.defaultProps = {
    size: '30px',
    borderColor: '#fa6831',
    backgroundColor: '#000000',
    innerColor: '#000000',
    colorMode: ColorMode.LIGHT
}