import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from '../helpers/scale'
import { Svg } from '../helpers/svg'
import { ThemeSwitcherDuoColor } from '../helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 1322.56

const ProgressIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M1224.72 1007.41c-116.4,189.03 -325.17,315.15 -563.46,315.15 -365.21,0 -661.26,-296.07 -661.26,-661.27 0,-352.46 275.75,-640.47 623.27,-660.16l0 139.2c-270.76,19.46 -484.36,245.24 -484.36,520.95 0,288.49 233.85,522.35 522.35,522.35 185.38,0 348.16,-96.58 440.86,-242.16l122.6 65.94 0 0.02z" />
                <path fill={secondaryColor?.toString()} d="M661.24 661.27l0 -661.27c365.21,0 661.26,296.07 661.26,661.27 0,109.34 -27.11,216.97 -78.93,313.26l-582.36 -313.26 0.03 0z" />
            </Scale>
        </Svg>
    )
}

export default ProgressIcon

ProgressIcon.defaultProps = {
    name: 'Progress icon',
    componentName: 'ProgressIcon',
    description: 'Progress icon for all types of printers.',
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