import React from 'react'

interface IProps {
    width?: number,
    height?: number,
    fgColor?: string,
    shadowColor?: string,
    bgColor?: string,
}

const OriginalPrusaIconsFavicon = (props: IProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 62.38 62.38" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
            <path fill={props.bgColor} d="M0 0h62.38v62.38H0z" />
            <g fillRule="nonzero">
                <path fill={props.shadowColor} d="M27.29 52.95h10.37V13.12H27.29z" />
                <path fill={props.fgColor} d="M25.44 51.1h10.38V11.27H25.44z" />
            </g>
        </svg>
    )
}

export default OriginalPrusaIconsFavicon

OriginalPrusaIconsFavicon.defaultProps = {
    width: 48,
    height: 48,
    fgColor: '#fefefe',
    shadowColor: '#2b2a29',
    bgColor: '#fa6831'
}