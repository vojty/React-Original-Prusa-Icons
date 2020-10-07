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

const EstimatedEndIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M177.06 29.1c-7.98,0 -15.96,2.26 -22.89,6.76 26.69,10.26 47.94,31.48 58.22,58.17 4.5,-6.93 6.74,-14.9 6.74,-22.88 0,-23.25 -18.83,-42.06 -42.07,-42.06l0 0zm-69.75 111l-19.58 -18.38 -11.75 12.08 31.54 30.02 55.23 -55.5 -11.97 -11.85 -43.47 43.64zm-83.51 -46.04c-4.51,-6.94 -6.75,-14.92 -6.75,-22.88 0,-23.22 18.8,-42.06 42.02,-42.06 7.98,0 15.97,2.26 22.91,6.76 -26.71,10.25 -47.93,31.48 -58.18,58.18l0 -0z" />
                <path fill={primaryColor?.toString()} d="M202.3 130.15c0,-46.5 -37.68,-84.21 -84.22,-84.21 -46.5,0 -84.21,37.71 -84.21,84.21 0,36.34 25.99,84.2 84.21,84.2 58.35,0 84.22,-47.94 84.22,-84.2zm-84.22 67.36c-37.14,0 -67.37,-30.23 -67.37,-67.36 0,-37.16 30.23,-67.37 67.37,-67.37 37.15,0 67.38,30.21 67.38,67.37 0,37.13 -30.23,67.36 -67.38,67.36z" />
            </Scale>
        </Svg>
    )
}

export default EstimatedEndIcon

EstimatedEndIcon.defaultProps = {
    name: 'Estimated End Icon',
    componentName: 'EstimatedEndIcon',
    description: 'Icon for estimated end of print.',
    tags: [Tag.ICONS, Tag.SL1, Tag.CONNECT],

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