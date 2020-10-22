import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from '../helpers/scale'
import { Svg } from '../helpers/svg'
import { ThemeSwitcherMonoColor } from '../helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
}

const viewBox: number = 363.64

const RestartIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherMonoColor(props.theme, setPrimaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M149.3 277.88c99.71,37.31 183.62,-84.93 112.47,-164.37 -76.27,-85.17 -215.43,1.8 -170.94,107.82 1.81,4.32 3.95,8.55 6.34,12.59l25.5 -17.56 -4.13 75.11 -67.4 -25.88 25.65 -17.68c-52.77,-86.48 12.45,-198.28 115.61,-193.1 111.71,5.61 162.4,145.91 77.81,221.77 -23.36,20.88 -53.63,32.45 -84.97,32.45 -13.51,0 -26.95,-2.16 -39.77,-6.37 0.49,-8.58 0.97,-17.15 1.43,-25.73l2.44 0.93 -0.03 0.03z" />
            </Scale>
        </Svg>
    )
}

export default RestartIcon

RestartIcon.defaultProps = {
    name: 'Restart icon',
    componentName: 'RestartIcon',
    description: 'Icon for printer restart action.',
    tags: [Tag.ICONS, Tag.SL1],

    folder: Folder.ICONS,

    width: 48,
    height: 48,

    theme: Theme.LIGHT,

    primaryColor: Color.DARK_GRAY,

    withBackground: true,
    backgroundColor: Color.WHITE,
    backgroundRounded: true,
    backgroundRadius: (viewBox * DefaultRadiusRatio),
}