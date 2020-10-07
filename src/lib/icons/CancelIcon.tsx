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

const CancelIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M158.22 145.9L128.64 117.65 158.22 88.07 145.9 77.08 117.65 106.65 88.07 77.08 77.08 89.4 106.65 117.65 77.08 147.22 89.4 158.22 117.65 128.64 147.22 158.22z" />
                <path fill={primaryColor?.toString()} d="M117.65 33.09c-47.02,0 -84.56,37.54 -84.56,84.56 0,47.02 37.54,84.56 84.56,84.56 47.02,0 84.56,-37.54 84.56,-84.56 0,-47.02 -37.54,-84.56 -84.56,-84.56zm0 13.84c38.49,0 70.72,32.04 70.72,70.72 0,38.49 -32.04,70.72 -70.72,70.72 -38.49,0 -70.72,-32.04 -70.72,-70.72 0,-38.49 32.04,-70.72 70.72,-70.72z" />
            </Scale>
        </Svg>
    )
}

export default CancelIcon

CancelIcon.defaultProps = {
    name: 'Cancel Icon',
    componentName: 'CancelIcon',
    description: 'Universal cancel icon.',
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