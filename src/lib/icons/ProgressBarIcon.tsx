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

const viewBox: number = 307.69

const ProgressBarIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M192.31 141.02l-153.85 0c-7.08,0 -12.82,5.74 -12.82,12.82 0,7.08 5.74,12.82 12.82,12.82l153.85 0c7.08,0 12.82,-5.74 12.82,-12.82 0,-7.08 -5.74,-12.82 -12.82,-12.82z" />
                <path fill={primaryColor?.toString()} d="M307.69 153.85c0,-21.24 -17.22,-38.46 -38.46,-38.46l-230.76 0c-21.24,0 -38.46,17.22 -38.46,38.46 0,21.25 17.22,38.46 38.46,38.46l230.77 0c21.24,0 38.46,-17.22 38.46,-38.46l-0 0zm-38.46 -25.64c14.14,0 25.64,11.5 25.64,25.64 0,14.14 -11.5,25.64 -25.64,25.64l-230.77 0c-14.14,0 -25.64,-11.5 -25.64,-25.64 0,-14.14 11.5,-25.64 25.64,-25.64l230.77 0z" />
            </Scale>
        </Svg>
    )
}

export default ProgressBarIcon

ProgressBarIcon.defaultProps = {
    name: 'Progress Bar icon',
    componentName: 'ProgressBarIcon',
    description: 'Progress bar icon for all types of printers.',
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