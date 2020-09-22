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

const viewBox: number = 363.64

const LanIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M227.18 272.69l-90.96 0 0 90.96 90.96 0 0 -90.96zm-136.22 0l-90.96 0 0 90.96 90.96 0 0 -90.96zm-30.4 30.4l0 30.4 -30.4 0 0 -30.4 30.4 0zm303.09 -30.4l-90.96 0 0 90.96 90.96 0 0 -90.96zm-30.4 30.4l0 30.4 -30.4 0 0 -30.4 30.4 0zm-136.22 -136.46l0 -45.51 -30.4 0 0 45.51 -136.22 0 0 75.67 30.16 0 0 -45.27 106.07 0 0 45.27 30.4 0 0 -45.27 106.07 0 0 45.27 30.16 0 0 -75.67 -136.22 0zm-0.23 136.46l0 30.4 -30.4 0 0 -30.4 30.4 0z" />
                <path fill={secondaryColor?.toString()} d="M242.29 0l-121.17 0 0 90.96 121.17 0 0 -90.96zm-30.4 30.4l0 30.4 -60.56 0 0 -30.4 60.56 0z" />
            </Scale>
        </Svg>
    )
}

export default LanIcon

LanIcon.defaultProps = {
    name: 'LAN icon',
    componentName: 'LanIcon',
    description: 'Universal LAN icon for all types of printers.',
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