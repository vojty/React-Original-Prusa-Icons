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

const viewBox: number = 235.3

const LedSetReplacementIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M-0 57.81l235.3 0 0 -18.83 -235.3 0 0 18.83zm74.52 99.77c1.01,2.96 -0.58,6.18 -3.55,7.18 -2.96,1.01 -6.18,-0.58 -7.18,-3.55l-28.56 -83.51c-1,-2.96 0.58,-6.18 3.55,-7.18 2.96,-1.01 6.18,0.58 7.18,3.55l28.56 83.51zm97 3.64c-1.01,2.96 -4.22,4.55 -7.18,3.55 -2.96,-1 -4.55,-4.22 -3.55,-7.18l28.56 -83.51c1.01,-2.96 4.22,-4.55 7.18,-3.55 2.96,1 4.55,4.22 3.55,7.18l-28.56 83.51zm-23.11 -86.13c0.44,-3.1 3.31,-5.25 6.41,-4.81 3.1,0.44 5.25,3.31 4.81,6.41l-12.15 83.51c-0.44,3.1 -3.31,5.25 -6.41,4.81 -3.1,-0.44 -5.25,-3.31 -4.81,-6.41l12.15 -83.51zm-25.08 84.31c0,3.13 -2.54,5.67 -5.67,5.67 -3.13,0 -5.67,-2.54 -5.67,-5.67l0 -83.51c0,-3.13 2.54,-5.67 5.67,-5.67 3.13,0 5.67,2.54 5.67,5.67l0 83.51zm-24.28 -0.8c0.44,3.1 -1.72,5.97 -4.81,6.41 -3.1,0.44 -5.97,-1.72 -6.41,-4.81l-12.15 -83.51c-0.44,-3.1 1.72,-5.97 4.81,-6.41 3.1,-0.44 5.97,1.72 6.41,4.81l12.15 83.51z" />
                <path fill={secondaryColor?.toString()} d="M62.87 174.18H172.42V193.01H62.87z" />
            </Scale>
        </Svg>
    )
}

export default LedSetReplacementIcon

LedSetReplacementIcon.defaultProps = {
    name: 'Led Set Replacement Icon',
    componentName: 'LedSetReplacementIcon',
    description: 'Led set replacement icon for SLA printers',
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