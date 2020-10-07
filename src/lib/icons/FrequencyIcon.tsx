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

const FrequencyIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M162.92 137.08l-18.1 0 0 36.04 18.1 0 0 -36.04zm-144.78 0l-0.05 0 -18.03 0 -0.05 0 0 36.04 0.05 0 18.03 0 0.05 0 0 -36.04zm162.87 -36.35l18.1 0 0 72.39 -18.1 0 0 -72.39zm-54.29 0l-18.1 0 0 72.39 18.1 0 0 -72.39zm-72.38 0l-18.1 0 0 72.39 18.1 0 0 -72.39z" />
                <path fill={secondaryColor?.toString()} d="M217.19 62.17l18.1 0 0 110.94 -18.1 0 0 -110.94zm-126.66 0l-18.1 0 0 110.94 18.1 0 0 -110.94z" />
            </Scale>
        </Svg>
    )
}

export default FrequencyIcon

FrequencyIcon.defaultProps = {
    name: 'Frequency Icon',
    componentName: 'FrequencyIcon',
    description: 'Icon for frequency settings for SLA printers.',
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