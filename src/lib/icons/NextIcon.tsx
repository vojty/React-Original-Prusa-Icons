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

const NextIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} fillRule="nonzero" d="M117.61 33.09c75.07,0 112.9,91.19 59.77,144.3 -53.13,53.13 -144.29,15.29 -144.29,-59.77 0,-46.69 37.86,-84.52 84.52,-84.52zm47.81 36.72c-42.49,-42.48 -115.45,-12.23 -115.45,47.81 0,60.06 72.96,90.29 115.45,47.81 26.41,-26.41 26.41,-69.23 0,-95.64l0 0.02z" />
                <path fill={secondaryColor?.toString()} d="M104.64 168.33L92.68 156.39 132.15 117.59 92.68 78.86 104.64 66.9 156.07 117.59z" />
            </Scale>
        </Svg>
    )
}

export default NextIcon

NextIcon.defaultProps = {
    name: 'Next Icon',
    componentName: 'NextIcon',
    description: 'Icon for forward navigation.',
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