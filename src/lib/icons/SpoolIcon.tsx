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

const viewBox: number = 800.1

const SpoolIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M400.06 48.03c-194.43,0 -352.05,157.61 -352.05,352.04 0,65.23 17.74,126.3 48.67,178.67l0 -178.67 0 -0.73c0.4,-167.21 136.08,-302.64 303.35,-302.64 269.41,0 405.15,327.26 214.51,517.89 -144.67,144.71 -368.03,101.35 -467.31,-45.75l0 76.2c63.98,66.02 153.6,107.06 252.79,107.06 194.43,0 352.05,-157.61 352.05,-352.05 0,-194.43 -157.61,-352.05 -352.05,-352.05l0.03 0.03zm93.18 258.87c-82.76,-82.79 -224.91,-23.88 -224.91,93.18 0,117.03 142.15,175.96 224.91,93.18 51.43,-51.46 51.47,-134.88 0,-186.32l0 -0.04zm-93.18 -1.64c-52.34,0 -94.78,42.44 -94.78,94.78 0,52.34 42.44,94.78 94.78,94.78 52.34,0 94.79,-42.44 94.79,-94.78 0,-52.34 -42.45,-94.78 -94.79,-94.78z" />
                <path fill={secondaryColor?.toString()} d="M400.06 96.7c269.42,0 405.16,327.26 214.52,517.89 -144.67,144.71 -368.03,101.35 -467.31,-45.75l0 156.22c0,13.97 -11.33,25.28 -25.28,25.28 -13.97,0 -25.28,-11.33 -25.28,-25.28l0 -324.97 0 -0.73c0.4,-167.21 136.08,-302.65 303.35,-302.65l0 -0zm93.18 210.2c-82.76,-82.79 -224.91,-23.88 -224.91,93.18 0,117.03 142.15,175.96 224.91,93.18 51.43,-51.46 51.47,-134.88 0,-186.32l0 -0.04z" />
            </Scale>
        </Svg>
    )
}

export default SpoolIcon

SpoolIcon.defaultProps = {
    name: 'Spool icon',
    componentName: 'SpoolIcon',
    description: 'Filament spool icon.',
    tags: [Tag.ICONS, Tag.MINI],

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

