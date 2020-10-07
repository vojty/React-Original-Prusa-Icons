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

const viewBox: number = 28.12

const PrintingTimeIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M24.4 23.54c-2.65,2.88 -6.4,4.54 -10.34,4.54 -7.76,0 -14.06,-6.29 -14.06,-14.06 0,-7.43 5.77,-13.51 13.07,-14.02l0 14.02c0,0.33 0.17,0.63 0.42,0.81l10.92 8.71z" />
                <path fill={secondaryColor?.toString()} d="M15.05 0c7.3,0.51 13.07,6.59 13.07,14.02 0,2.85 -0.87,5.63 -2.48,7.97l-10.59 -8.45 0 -13.55z" />
            </Scale>
        </Svg>
    )
}

export default PrintingTimeIcon

PrintingTimeIcon.defaultProps = {
    name: 'Printing Time Icon',
    componentName: 'PrintingTimeIcon',
    description: 'Elapsed printing time icon.',
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