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

const viewBox: number = 4000

const PlusSignIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M2717.66 2118.9L2118.9 2118.9 2118.9 2717.66 1880.02 2717.66 1880.02 2118.9 1281.26 2118.9 1281.26 1880.02 1880.02 1880.02 1880.02 1281.26 2118.9 1281.26 2118.9 1880.02 2717.66 1880.02z" />
                <path fill={primaryColor?.toString()} d="M2000 562.5c-793.48,0 -1437.5,642.98 -1437.5,1437.5 0,793.48 642.98,1437.5 1437.5,1437.5 793.48,0 1437.5,-642.98 1437.5,-1437.5 0,-793.48 -642.98,-1437.5 -1437.5,-1437.5zm0 239.92c659.82,0 1197.54,537.76 1197.54,1197.54 0,659.82 -537.76,1197.54 -1197.54,1197.54 -659.82,0 -1197.54,-537.76 -1197.54,-1197.54 0,-659.82 537.76,-1197.54 1197.54,-1197.54z" />
            </Scale>
        </Svg>
    )
}

export default PlusSignIcon

PlusSignIcon.defaultProps = {
    name: 'Plus Sign Icon',
    componentName: 'PlusSignIcon',
    description: 'Plus sign icon for increasing numeric value.',
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