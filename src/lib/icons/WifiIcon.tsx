import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { ThemeSwitcher } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 235.29

const WifiIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox={`${0} ${0} ${viewBox} ${viewBox}`}>
            {props.withBackground && <rect fill={backgroundColor?.toString()} width={viewBox} height={viewBox} rx={props.backgroundRounded ? props.backgroundRadius : 0} ry={props.backgroundRounded ? props.backgroundRadius : 0} />}
            <Scale withPadding={props.withPadding} width={props.width} height={props.height} viewBox={viewBox}>
                <path fill={primaryColor?.toString()} d="M23.4 105.15c24.06,-25.64 57.46,-41.42 94.27,-41.42 36.81,0 70.08,15.78 94.27,41.42l23.4 -24.85c-30.11,-31.95 -71.66,-51.67 -117.67,-51.67 -46.02,0 -87.56,19.72 -117.67,51.67l23.4 24.85z" />
                <path fill={primaryColor?.toString()} d="M63.37 147.62c13.93,-14.73 33.13,-23.8 54.3,-23.8 21.17,0 40.36,9.07 54.3,23.8l22.88 -24.19c-19.72,-20.91 -46.94,-33.92 -77.04,-33.92 -30.11,0 -57.33,12.89 -77.04,33.92l22.88 24.19 0 0 -0.26 0z" />
                <path fill={secondaryColor?.toString()} d="M80.46 165.76c9.47,-10.12 22.62,-16.3 37.08,-16.3 14.46,0 27.61,6.18 37.07,16.3l-37.07 39.44 -37.08 -39.44z" />
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