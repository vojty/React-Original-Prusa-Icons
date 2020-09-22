import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { Svg } from 'src/components/helpers/svg'
import { ThemeSwitcherDuoColor } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 571.35

const HeatedBedIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M176.83 392.22c-44.78,-44.22 -50.44,-70.29 -11.33,-120.73 13.6,-17.57 19.84,-35.14 19.84,-52.16 0,-35.7 -26.07,-70.85 -60.07,-111.67l-53.85 51.02c51.02,59.51 46.47,65.76 9.63,117.89 -11.9,17.01 -16.43,33.45 -16.43,50.44 0,43.08 32.31,83.89 61.79,114.5l51.02 -49.32 0 0 -0.59 0.02zm322.53 0c-44.78,-44.22 -50.44,-70.29 -11.33,-120.73 13.6,-17.57 19.84,-35.14 19.84,-52.16 0,-35.7 -26.07,-70.85 -60.08,-111.67l-53.85 51.02c51.02,59.51 46.47,65.76 9.63,117.89 -11.91,17.01 -16.43,33.45 -16.43,50.44 0,43.08 32.31,83.89 61.79,114.5l51.02 -49.32 0 0 -0.59 0.02zm-163.25 0c-44.78,-44.22 -50.44,-70.29 -11.33,-120.73 13.6,-17.57 19.85,-35.14 19.85,-52.16 0,-35.7 -26.07,-70.85 -60.08,-111.67l-53.85 51.02c51.02,59.51 46.47,65.76 9.64,117.89 -11.91,17.01 -16.44,33.45 -16.44,50.44 0,43.08 32.31,83.89 61.79,114.5l51.02 -49.32 0 0 -0.59 0.02z" />
                <path fill={primaryColor?.toString()} fillRule="nonzero" d="M0 492.55L571.35 492.55 571.35 571.35 0 571.35z" />
            </Scale>
        </Svg>
    )
}

export default HeatedBedIcon

HeatedBedIcon.defaultProps = {
    name: 'Heated Bed icon',
    componentName: 'HeatedBedIcon',
    description: 'Heated Bed icon for FDM printers.',
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