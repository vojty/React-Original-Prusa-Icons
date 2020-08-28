import { DefaultPaddingRatio } from 'src/config'
import React from 'react'

interface IProps {
    withPadding: boolean | undefined,
    width: number | undefined,
    height: number | undefined,
    viewBox: number
}

export const Scale: React.FC<IProps> = (props) => {
    const padding: number = props.width ? ((props.width - (props.width * (1 + DefaultPaddingRatio))) / 2) : 0
    const offset = (props.viewBox / (props.width ? props.width : 0)) * padding
    
    return (
        <>
            {props.withPadding ?
                <g transform={`scale(${1 + DefaultPaddingRatio}) translate(${offset}, ${offset})`}>
                    {props.children}
                </g>
                :
                <>{props.children}</>
            }
        </>
    )
}