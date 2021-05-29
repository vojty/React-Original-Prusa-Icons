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

const DisplayReplacementIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M0 89.38L363.64 89.38 363.64 60.28 0 60.28z" />
                <path fill={primaryColor?.toString()} fillRule="nonzero" d="M115.15 243.55c1.57,4.56 -0.9,9.54 -5.46,11.11 -4.56,1.57 -9.54,-0.9 -11.11,-5.46l-44.14 -129.06c-1.57,-4.56 0.9,-9.54 5.46,-11.11 4.56,-1.57 9.54,0.9 11.11,5.46l44.15 129.06zm-17.99 54.77l169.31 0 0 -29.1 -169.31 0 0 29.1zm167.89 -49.18c-1.57,4.56 -6.51,7.03 -11.11,5.46 -4.56,-1.57 -7.03,-6.51 -5.46,-11.11l44.15 -129.06c1.57,-4.56 6.5,-7.03 11.11,-5.46 4.56,1.57 7.03,6.51 5.46,11.11l-44.14 129.06zm-35.69 -133.09c0.66,-4.79 5.12,-8.12 9.92,-7.45 4.79,0.66 8.12,5.13 7.45,9.92l-18.8 129.06c-0.66,4.79 -5.13,8.12 -9.92,7.45 -4.79,-0.66 -8.12,-5.12 -7.45,-9.92l18.8 -129.06zm-38.78 130.29c0,4.84 -3.94,8.78 -8.78,8.78 -4.84,0 -8.78,-3.94 -8.78,-8.78l0 -129.06c0,-4.84 3.94,-8.78 8.78,-8.78 4.84,0 8.78,3.94 8.78,8.78l0 129.06zm-37.5 -1.23c0.66,4.79 -2.66,9.21 -7.45,9.92 -4.79,0.66 -9.21,-2.66 -9.92,-7.45l-18.8 -129.06c-0.66,-4.79 2.66,-9.21 7.45,-9.92 4.79,-0.66 9.21,2.66 9.92,7.45l18.8 129.06z" />
            </Scale>
        </Svg>
    )
}

export default DisplayReplacementIcon

DisplayReplacementIcon.defaultProps = {
    name: 'Display Replacement Icon',
    componentName: 'DisplayReplacementIcon',
    description: 'Display Replacement icon for SLA printers',
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