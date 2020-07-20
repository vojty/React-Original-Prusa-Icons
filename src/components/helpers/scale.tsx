import { DefaultPaddingRatio } from 'src/config'
import React from 'react'

interface IProps {
    withBackground: boolean | undefined
}

export const Scale: React.FC<IProps> = (props) => {
    return (
        <>
            {!props.withBackground ?
                <g transform={`scale(${1 + DefaultPaddingRatio})`}>
                    {props.children}
                </g>
                :
                <>{props.children}</>
            }
        </>
    )
}