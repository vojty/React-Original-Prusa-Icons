import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from '../helpers/scale'
import { Svg } from '../helpers/svg'
import { ThemeSwitcherMonoColor } from '../helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
}

const viewBox: number = 800.06

const HomeSimpleIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherMonoColor(props.theme, setPrimaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M400.37 9.92l-400.37 372.31 0 407.91 800.06 0 0 -407.91 -400.37 -372.31 0 0 0 0 0.68 0zm0 121.82l311.39 289.49 0 279.92 -622.11 0 0 -279.92 311.39 -289.49 0 0 -0.68 0z" />
            </Scale>
        </Svg>
    )
}

export default HomeSimpleIcon

HomeSimpleIcon.defaultProps = {
    name: 'Home simple icon',
    componentName: 'HomeSimpleIcon',
    description: 'Universal simple Home icon for all types of printers.',
    tags: [Tag.ICONS, Tag.MINI, Tag.SL1, Tag.OUTLINE],

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