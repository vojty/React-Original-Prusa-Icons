import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { Svg } from 'src/components/helpers/svg'
import { ThemeSwitcherDuoColor } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 571.43

const FirmwareIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M454.66 196.28l59.62 0 0 19.88 -59.62 0 0 -19.88zm-237.32 97.56l32.99 0 0 -11.45 -32.99 0 0 -25.56 35.32 0 0 -11.67 -50.17 0 0 81.14 14.85 0 0 -32.46zm81.03 32.46l13.9 -51.12c2.23,-8.06 2.65,-12.73 2.65,-12.73l0.21 0c0,0 0.42,4.67 2.65,12.83l14.11 51.02 14.96 0 22.06 -81.14 -13.79 0 -12.73 50.27c-2.02,8.06 -2.55,13.26 -2.55,13.26l-0.21 0c0,0 -0.85,-5.2 -3.07,-13.37l-13.79 -50.17 -14.32 0 -13.68 50.27c-2.23,8.06 -2.76,13.26 -2.76,13.26l-0.21 0c0,0 -0.43,-5.2 -2.55,-13.37l-12.94 -50.17 -15.17 0 22.06 81.14 15.17 0zm76.78 128.36l0 59.63 -19.87 -0.01 0 -59.63 19.87 0.01zm-159 0l0 59.63 -19.88 -0.01 0 -59.63 19.88 0.01zm79.5 0l0 59.63 -19.87 -0.01 0 -59.63 19.87 0.01zm39.76 0l0 59.63 -19.88 -0.01 0 -59.63 19.88 0.01zm-79.51 0l0 59.63 -19.88 -0.01 0 -59.63 19.88 0.01zm-198.75 -258.38l59.62 0 0 19.88 -59.62 0 0 -19.88zm0 159l59.62 0 0 19.88 -59.62 -0.01 0 -19.88 0 0.01zm0 -79.5l59.62 0 0 19.87 -59.62 0 0 -19.87zm0 -39.75l59.62 0 0 19.88 -59.62 0 0 -19.88zm0 79.51l59.62 0 0 19.88 -59.62 0 0 -19.88zm318.01 -258.38l0 59.63 -19.87 -0.01 0 -59.63 19.87 0.01zm-159 0l0 59.63 -19.88 -0.01 0 -59.63 19.88 0.01zm79.5 0l0 59.63 -19.87 -0.01 0 -59.63 19.87 0.01zm39.76 0l0 59.63 -19.88 -0.01 0 -59.63 19.88 0.01zm-79.51 0l0 59.63 -19.88 -0.01 0 -59.63 19.88 0.01zm198.77 298.13l59.62 0 0 19.88 -59.62 -0.01 0 -19.88 0 0.01zm0 -79.5l59.62 0 0 19.87 -59.62 0 0 -19.87zm0 -39.75l59.62 0 0 19.88 -59.62 0 0 -19.88zm0 79.51l59.62 0 0 19.88 -59.62 0 0 -19.88z" />
                <path fill={secondaryColor?.toString()} d="M434.79 176.4c0,-21.94 -17.81,-39.75 -39.75,-39.75l-218.63 0c-21.94,0 -39.75,17.81 -39.75,39.75l0 218.63c0,21.94 17.81,39.75 39.75,39.75l218.63 0c21.94,0 39.75,-17.81 39.75,-39.75l0 -218.63zm-54.66 0c8.23,0 14.91,6.68 14.91,14.91l0 188.81c0,8.23 -6.68,14.9 -14.91,14.9l-188.82 0.01c-8.23,0 -14.91,-6.68 -14.91,-14.91l0 -188.81c0,-8.23 6.68,-14.9 14.91,-14.9l188.82 -0.01z" />
            </Scale>
        </Svg>
    )
}

export default FirmwareIcon

FirmwareIcon.defaultProps = {
    name: 'Firmware icon',
    componentName: 'FirmwareIcon',
    description: 'Firmware icon for all types of printers.',
    tags: [Tag.ICONS, Tag.SL1],

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