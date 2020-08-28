import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { ThemeSwitcher } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 363.65

const SettingsIcon = (props: IProps) => {
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
                <path fill={secondaryColor?.toString()} d="M181.82 109.16c-40.1,0 -72.67,32.56 -72.67,72.67 0,40.14 32.56,72.67 72.67,72.67 40.1,0 72.67,-32.56 72.67,-72.67 0,-40.1 -32.56,-72.67 -72.67,-72.67zm0 29.11c24.01,0 43.56,19.58 43.56,43.56 0,24.01 -19.58,43.56 -43.56,43.56 -24.01,0 -43.55,-19.58 -43.55,-43.56 0,-24.01 19.58,-43.56 43.55,-43.56z" />
                <path fill={primaryColor?.toString()} d="M363.65 214.96l0 -66.27c-32.62,-11.69 -41.37,-12.19 -45.84,-23.19 -4.62,-10.99 1.21,-17.68 16.16,-48.94l-46.88 -46.88c-30.72,14.6 -37.79,20.62 -48.94,16.16 -10.99,-4.62 -11.69,-13.4 -23.19,-45.84l-66.27 0c-11.5,32.47 -12.19,41.37 -23.19,45.84 -11.34,4.81 -18.21,-1.55 -48.94,-16.16l-46.88 46.88c14.76,31.07 20.62,37.79 16.16,48.94 -4.62,10.99 -13.4,11.5 -45.84,23.19l0 66.27c32.47,11.5 41.37,12.19 45.84,23.19 4.63,11.15 -1.2,17.68 -16.16,48.94l46.88 46.88c30.41,-14.41 37.44,-20.78 48.94,-16.16 10.99,4.62 11.5,13.4 23.19,45.84l66.27 0c11.5,-32.28 12.19,-41.21 23.34,-46.03 11.34,-4.62 18.02,1.55 48.78,16.16l46.88 -46.88c-14.76,-31.08 -20.62,-37.79 -16.16,-48.94 4.63,-10.99 13.4,-11.5 45.84,-23.19l0 0 0 0.16 0 0.03zm-74 11.66c-8.74,21.13 -1.04,37.25 7.38,54.26l-16.47 16.5c-16.66,-8.24 -32.78,-16.31 -54.26,-7.38 -21.13,8.74 -27.15,25.59 -33.14,43.62l-23.19 0c-6.02,-18.02 -12.01,-34.84 -33.14,-43.62 -21.48,-8.93 -37.95,-0.7 -54.26,7.38l-16.5 -16.5c8.42,-17.01 16.16,-33.14 7.38,-54.26 -8.74,-21.13 -25.59,-27.15 -43.62,-33.14l0 -23.19c18.02,-6.02 34.84,-12.01 43.62,-33.14 8.74,-21.13 1.04,-37.25 -7.38,-54.26l16.5 -16.48c16.47,8.08 32.79,16.31 54.26,7.38 21.13,-8.74 27.12,-25.59 33.14,-43.62l23.19 0c6.02,18.02 12.01,34.84 33.14,43.62 21.48,8.93 37.95,0.7 54.26,-7.38l16.47 16.48c-8.42,17.01 -16.16,33.13 -7.38,54.26 8.74,21.13 25.59,27.15 43.62,33.14l0 23.19c-18.02,6.02 -34.84,12.01 -43.62,33.14l0 0z" />
            </Scale>
        </svg>
    )
}

export default SettingsIcon

SettingsIcon.defaultProps = {
    name: 'Settings icon',
    componentName: 'SettingsIcon',
    description: 'Universal settings icon for all types of printers.',
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