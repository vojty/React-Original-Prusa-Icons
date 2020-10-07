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

const ErrorIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M153.84 225.99c-7.95,0 -14.42,-6.46 -14.42,-14.42 0,-7.96 6.46,-14.42 14.42,-14.42 7.95,0 14.42,6.46 14.42,14.42 0,7.95 -6.46,14.42 -14.42,14.42zm-17.3 -141.35l34.6 0 -11.54 92.28 -11.53 0 -11.54 -92.28z" />
                <path fill={primaryColor?.toString()} d="M211.2 15.38l-114.7 0 -81.11 81.11 0 114.7 81.11 81.11 114.7 0 81.11 -81.11 0 -114.7 -81.11 -81.11 0 0zm-9.56 23.07l67.61 67.6 0 95.59 -67.61 67.61 -95.64 0 -67.61 -67.61 0 -95.59 67.61 -67.6 95.64 0z" />
            </Scale>
        </Svg>
    )
}

export default ErrorIcon

ErrorIcon.defaultProps = {
    name: 'Error Icon',
    componentName: 'ErrorIcon',
    description: 'Icon for error event.',
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