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

const viewBox: number = 363.64

const CalibrationVerticalIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M105.92 237.47L105.92 117.42 149.58 117.42 89.51 37.38 29.45 117.5 73.19 117.5 73.19 248.32 29.45 248.32 89.51 328.44 149.66 248.32 105.92 248.32z" />
                <path fill={primaryColor?.toString()} d="M335 19.23l-109.12 0 0 327.27 109.12 0 0 -327.27zm-81.85 300.01l0 -27.26 27.26 0 0 -13.63 -27.26 0 0 -27.26 40.89 0 0 -13.63 -40.89 0 0 -27.26 27.26 0 0 -13.63 -27.26 0 0 -27.26 27.26 0 0 -13.63 -27.26 0 0 -27.26 40.89 0 0 -13.63 -40.89 0 0 -27.26 27.26 0 0 -13.63 -27.26 0 0 -27.26 54.52 0 0 272.75 -54.52 0 0 -0.16z" />
            </Scale>
        </Svg>
    )
}

export default CalibrationVerticalIcon

CalibrationVerticalIcon.defaultProps = {
    name: 'Calibration Vertical icon',
    componentName: 'CalibrationVerticalIcon',
    description: 'Icon for vertical calibration.',
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