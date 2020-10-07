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

const viewBox: number = 25

const RemainingTimeIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M21.7 20.93c-2.36,2.56 -5.69,4.04 -9.2,4.04 -6.9,0 -12.5,-5.6 -12.5,-12.5 0,-6.61 5.13,-12.02 11.62,-12.47l0 12.47c0,0.3 0.15,0.56 0.37,0.72l9.71 7.75z" />
                <path fill={primaryColor?.toString()} d="M13.38 0c6.49,0.45 11.62,5.86 11.62,12.47 0,2.54 -0.77,5.01 -2.2,7.09l-9.41 -7.51 0 -12.05z" />
            </Scale>
        </Svg>
    )
}

export default RemainingTimeIcon

RemainingTimeIcon.defaultProps = {
    name: 'Remaining Time Icon',
    componentName: 'RemainingTimeIcon',
    description: 'Remaining printing time icon.',
    tags: [Tag.ICONS, Tag.CONNECT],

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