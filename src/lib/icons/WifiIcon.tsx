import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import { BackgroundSwitcher } from 'src/components/helpers/backgroundSwitcher'
import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { ThemeSwitcher } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 235.29

const WifiIcon = (props: IProps) => {
    const [viewBoxStart, setViewBoxStart] = useState<number>(0)
    const [viewBoxEnd, setViewBoxEnd] = useState<number>(viewBox)
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
        BackgroundSwitcher(props.withBackground, viewBoxStart, setViewBoxStart, viewBoxEnd, setViewBoxEnd)
    }, [props.theme]) // eslint-disable-line

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox={`${viewBoxStart} ${viewBoxStart} ${viewBoxEnd} ${viewBoxEnd}`}>
            {props.withBackground && <rect fill={backgroundColor?.toString()} width={viewBoxEnd} height={viewBoxEnd} rx={props.backgroundRounded ? props.backgroundRadius : 0} ry={props.backgroundRounded ? props.backgroundRadius : 0} />}
            <Scale withBackground={props.withBackground}>
                <path fill={primaryColor?.toString()} d="M66.97 110.58c12.92,-13.77 30.85,-22.24 50.62,-22.24 19.77,0 37.63,8.47 50.62,22.24l12.57 -13.34c-16.17,-17.15 -38.48,-27.74 -63.18,-27.74 -24.71,0 -47.02,10.59 -63.18,27.74l12.57 13.34z" />
                <path fill={primaryColor?.toString()} d="M88.43 133.38c7.48,-7.91 17.79,-12.78 29.16,-12.78 11.36,0 21.67,4.87 29.16,12.78l12.28 -12.99c-10.59,-11.22 -25.2,-18.21 -41.37,-18.21 -16.17,0 -30.78,6.92 -41.37,18.21l12.28 12.99 0 0 -0.14 0z" />
                <path fill={secondaryColor?.toString()} d="M97.61 143.12c5.08,-5.44 12.14,-8.75 19.91,-8.75 7.76,0 14.83,3.32 19.91,8.75l-19.91 21.18 -19.91 -21.18z" />
            </Scale>
        </svg>
    )
}

export default WifiIcon

WifiIcon.defaultProps = {
    name: 'Wifi icon',
    componentName: 'WifiIcon',
    description: 'Universal Wifi icon for all types of printers.',
    tags: [Tag.ICONS, Tag.MINI, Tag.SL1],

    folder: Folder.ICONS,

    width: 48,
    height: 48,

    theme: Theme.LIGHT,

    primaryColor: Color.DARK_GRAY,
    secondaryColor: Color.ORANGE,

    withBackground: true,
    backgroundColor: Color.WHITE,
    backgroundRounded: true,
    backgroundRadius: (viewBox * DefaultRadiusRatio),
}