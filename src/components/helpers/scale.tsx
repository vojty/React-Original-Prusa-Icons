import { Color, DefaultPaddingRatio } from 'src/config'

import React from 'react'

interface IProps {
    withPadding: boolean | undefined,
    withBackground: boolean | undefined,
    backgroundColor?: String | Color | undefined,
    backgroundRounded?: boolean,
    backgroundRadius?: number,
    width: number | undefined,
    height: number | undefined,
    viewBox: number
}

export const Scale: React.FC<IProps> = (props) => {
    const padding: number = Math.round((props.viewBox - (props.viewBox * (1 - DefaultPaddingRatio))) / 2)
    const background = () => {
        if (props.withBackground) {
            return <rect
                transform={props.withPadding ? `translate(${-2 * padding}, ${-2 * padding})` : ''}
                fill={props.backgroundColor?.toString()}
                width={props.viewBox * (1 + (props.withPadding ? Math.abs(DefaultPaddingRatio) : 0))}
                height={props.viewBox * (1 + (props.withPadding ? Math.abs(DefaultPaddingRatio) : 0))}
                rx={props.backgroundRounded ? props.backgroundRadius : 0}
                ry={props.backgroundRounded ? props.backgroundRadius : 0}
            />
        }
    }
    return (
        <>
            {background()}
            {
                props.withPadding ?
                    <g transform={`translate(${-padding}, ${-padding})`}>
                        {props.children}
                    </g>
                    :
                    <>
                        {props.children}
                    </>
            }
        </>

    )
}