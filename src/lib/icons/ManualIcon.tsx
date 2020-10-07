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

const ManualIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M318.16 345.45l-231.74 0c-22.58,0 -40.94,-18.36 -40.94,-40.94l0 -245.39c0,-22.58 18.36,-40.94 40.94,-40.94l109.05 0 0 27.29 -109.05 0 0 218.1 204.45 0 0 -218.1 -40.94 0 0 -27.29 68.11 0 0 327.14 0.13 0.13zm-27.29 -54.46l-197.75 0c-18.73,0 -18.73,27.29 0,27.29l197.75 0 0 -27.29 0 0z" />
                <path fill={secondaryColor?.toString()} d="M250.05 18.31L250.05 141.01 222.76 119.92 195.59 141.01 195.59 18.31z" />
            </Scale>
        </Svg>
    )
}

export default ManualIcon

ManualIcon.defaultProps = {
    name: 'Manual Icon',
    componentName: 'ManualIcon',
    description: 'Icon for instructions and guides.',
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