import { DefaultPaddingRatio } from '../../config'
import React from 'react'

interface IProps {
    withPadding: boolean | undefined,
    width: number | undefined,
    height: number | undefined,
    viewBox: number
}

export const Svg: React.FC<IProps> = (props) => {

    const viewBox = () => {
        if (props.withPadding) {
            return `${0 - (props.viewBox * Math.abs(DefaultPaddingRatio))} ${0 - (props.viewBox * Math.abs(DefaultPaddingRatio))} ${props.viewBox + (props.viewBox * Math.abs(DefaultPaddingRatio))} ${props.viewBox + (props.viewBox * Math.abs(DefaultPaddingRatio))}`
        }
        else {
            return `${0} ${0} ${props.viewBox} ${props.viewBox}`
        }
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox={viewBox()}>
            {props.children}
        </svg>
    )
}