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

const viewBox: number = 235.29

const NetworkIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M223.53 170.59l-70.59 0 0 52.94 70.59 0 0 -52.94zm-26.47 -44.12l38.23 0 0 -17.65 -108.82 0 0 -26.47 -17.65 0 0 26.47 -108.82 -0 0 17.65 38.23 0 0 26.47 17.65 0 0 -26.47 123.53 0 0 26.47 17.65 -0 0 -26.47zm-114.71 44.12l-70.59 0 0 52.94 70.59 0 0 -52.94zm-17.65 17.65l0 17.65 -35.29 -0 0 -17.65 35.29 0zm141.18 0l0 17.65 -35.29 -0 0 -17.65 35.29 0z" />
                <path fill={secondaryColor?.toString()} d="M152.94 11.76l-70.59 0 0 52.94 70.59 0 0 -52.94zm-17.64 17.65l0 17.65 -35.3 -0 0 -17.65 35.3 0z" />
            </Scale>
        </Svg>
    )
}

export default NetworkIcon

NetworkIcon.defaultProps = {
    name: 'Network icon',
    componentName: 'NetworkIcon',
    description: 'Icon for network settings for all types of printers.',
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