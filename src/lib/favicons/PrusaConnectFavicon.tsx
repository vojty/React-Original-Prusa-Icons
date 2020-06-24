import { Color, Folder, Tag } from '../../config'

import IconDetail from '../../interfaces/Icon'
import React from 'react'

interface IProps extends IconDetail {
    fgColor?: string,
    shadowColor?: string,
    bgColor?: string
}

const PrusaConnectFavicon = (props: IProps) => {
    return (
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 50.68 50.68">
            <path fill={props.bgColor} d="M0 0h50.68v50.68H0z" />
            <path fill={props.shadowColor} fillRule="nonzero" d="M42.3 22.22c-.23-7.8-7.75-12.24-14.78-12.24-9.84 0-16.14 7.48-16.14 16.86 0 9.38 6.3 16.86 16.14 16.86 8.2 0 14.28-4.85 14.78-13.24h-8.43c-.32 3.76-2.54 5.98-6.53 5.98-5.44 0-7.52-4.76-7.52-9.61s2.09-9.61 7.52-9.61c3.58 0 6.03 1.72 6.53 4.99h8.43z" />
            <path fill={props.fgColor} fillRule="nonzero" d="M40.8 20.72c-.23-7.8-7.75-12.24-14.78-12.24-9.84 0-16.14 7.48-16.14 16.86 0 9.38 6.3 16.86 16.14 16.86 8.2 0 14.28-4.85 14.78-13.24h-8.43c-.32 3.76-2.54 5.98-6.53 5.98-5.44 0-7.52-4.76-7.52-9.61s2.09-9.61 7.52-9.61c3.58 0 6.03 1.72 6.53 4.99h8.43z" />
        </svg>
    )
}

export default PrusaConnectFavicon

PrusaConnectFavicon.defaultProps = {
    name: 'Prusa Connect favicon',
    componentName: 'PrusaConnectFavicon',
    description: 'The favicon for PRUSA CONNECT project.',
    tags: [Tag.CONNECT, Tag.FAVICON],

    folder: Folder.FAVICONS,

    width: 48,
    height: 48,

    fgColor: Color.WHITE,
    shadowColor: Color.SHADOW,
    bgColor: Color.ORANGE
}