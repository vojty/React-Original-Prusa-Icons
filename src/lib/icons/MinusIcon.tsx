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

const viewBox: number = 800

const MinusSignIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M543.74 423.97L256.25 423.97 256.25 376.04 543.74 376.04z" />
                <path fill={primaryColor?.toString()} d="M400.02 112.53c-158.78,0 -287.5,128.72 -287.5,287.5 0,158.78 128.72,287.5 287.5,287.5 158.78,0 287.5,-128.72 287.5,-287.5 0,-158.78 -128.72,-287.5 -287.5,-287.5zm0 47.89c132.08,0 239.56,107.48 239.56,239.56 0,132.08 -107.48,239.56 -239.56,239.56 -132.08,0 -239.56,-107.48 -239.56,-239.56 0,-132.07 107.48,-239.56 239.56,-239.56z" />
            </Scale>
        </Svg>
    )
}

export default MinusSignIcon

MinusSignIcon.defaultProps = {
    name: 'Minus Sign Icon',
    componentName: 'MinusSignIcon',
    description: 'Minus sign icon for decreasing numeric value.',
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