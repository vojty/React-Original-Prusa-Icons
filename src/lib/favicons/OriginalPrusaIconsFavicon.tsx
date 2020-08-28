import { Color, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'

interface IProps extends IconDetail {
    fgColor?: Color,
    shadowColor?: Color,
    bgColor?: Color
}

const OriginalPrusaIconsFavicon = (props: IProps) => {

    const [fgColor, setFgColor] = useState<Color | string | undefined>(props.fgColor)
    const [shadowColor, setShadowColor] = useState<Color | string | undefined>(props.shadowColor)
    const [bgColor, setBgColor] = useState<Color | string | undefined>(props.bgColor)


    useEffect(() => {
        switch (props.theme) {
            case Theme.CUSTOM:
                setFgColor(props.fgColor)
                setShadowColor(props.shadowColor)
                setBgColor(props.bgColor)
                break
            case Theme.LIGHT:
                setFgColor(Color.WHITE)
                setShadowColor(Color.SHADOW)
                setBgColor(Color.ORANGE)
                break
            case Theme.DARK:
                setFgColor(Color.WHITE)
                setShadowColor(Color.SHADOW)
                setBgColor(Color.ORANGE)
                break
            case Theme.GRAYSCALE:
                setFgColor(Color.WHITE)
                setShadowColor(Color.SHADOW)
                setBgColor(Color.GRAY)
                break
            case Theme.MONOCHROME:
                setFgColor(Color.WHITE)
                setShadowColor(Color.BLACK)
                setBgColor(Color.BLACK)
                break
        }
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 62.38 62.38" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
            <path fill={bgColor} d="M0 0h62.38v62.38H0z" />
            <g fillRule="nonzero">
                <path fill={shadowColor} d="M27.29 52.95h10.37V13.12H27.29z" />
                <path fill={fgColor} d="M25.44 51.1h10.38V11.27H25.44z" />
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

    Theme: Theme.LIGHT,

    fgColor: Color.WHITE,
    shadowColor: Color.SHADOW,
    bgColor: Color.ORANGE
}