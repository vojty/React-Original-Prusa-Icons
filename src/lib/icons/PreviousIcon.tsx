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

const PreviousIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} fillRule="nonzero" d="M181.87 51.14c-116.01,0 -174.48,140.93 -92.37,223 82.11,82.11 223,23.64 223,-92.37 0,-72.16 -58.51,-130.63 -130.63,-130.63zm-73.88 56.74c65.66,-65.66 178.42,-18.9 178.42,73.89 0,92.82 -112.76,139.54 -178.42,73.88 -40.81,-40.81 -40.81,-106.99 0,-147.8l0 0.03z" />
                <path fill={secondaryColor?.toString()} d="M201.91 260.14L220.4 241.69 159.41 181.73 220.4 121.87 201.91 103.39 122.43 181.73z" />
            </Scale>
        </Svg>
    )
}

export default PreviousIcon

PreviousIcon.defaultProps = {
    name: 'Previous Icon',
    componentName: 'PreviousIcon',
    description: 'Icon for backward navigation.',
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