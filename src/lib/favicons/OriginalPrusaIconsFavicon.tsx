import { Color, ColorMode, Folder, Tag } from '../../config'

import IconDetail from '../../interfaces/Icon'
import React from 'react'

interface IProps extends IconDetail {
    fgColor?: string,
    shadowColor?: string,
    bgColor?: string
}

const OriginalPrusaIconsFavicon = (props: IProps) => {
    return (
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 62.38 62.38" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
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
    name: 'Original Prusa Icons favicon',
    componentName: OriginalPrusaIconsFavicon.name,
    description: 'The favicon for ORIGINAL PRUSA ICONS library.',
    tags: [Tag.ICONS, Tag.FAVICON],

    folder: Folder.FAVICONS,

    width: 48,
    height: 48,

    colorMode: ColorMode.LIGHT,

    fgColor: Color.WHITE,
    shadowColor: Color.SHADOW,
    bgColor: Color.ORANGE
}