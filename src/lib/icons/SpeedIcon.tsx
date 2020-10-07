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

const viewBox: number = 307.66

const SpeedIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M153.83 269.21c-16.59,0 -30.03,-13.44 -30.03,-30.03 0,-11.32 6.27,-21.18 15.51,-26.29l14.52 -71.87 14.53 71.85c9.25,5.12 15.51,14.97 15.51,26.29 0,16.6 -13.44,30.05 -30.04,30.05l0 0z" />
                <path fill={primaryColor?.toString()} d="M307.66 192.29c0,28 -7.51,54.27 -20.64,76.9l-22.25 -12.86c10.91,-18.86 17.25,-40.69 17.25,-64.05 0,-70.8 -57.39,-128.19 -128.19,-128.19 -70.8,0 -128.19,57.39 -128.19,128.19 0,23.36 6.35,45.19 17.25,64.05l-22.25 12.86c-13.13,-22.64 -20.64,-48.91 -20.64,-76.9 0,-84.82 69.01,-153.83 153.83,-153.83 84.82,0 153.83,69.01 153.83,153.83l-0 0z" />
            </Scale>
        </Svg>
    )
}

export default SpeedIcon

SpeedIcon.defaultProps = {
    name: 'Speed icon',
    componentName: 'SpeedIcon',
    description: 'Speed icon for FDM printers.',
    tags: [Tag.ICONS, Tag.MINI],

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