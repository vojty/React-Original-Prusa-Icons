import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from '../helpers/scale'
import { Svg } from '../helpers/svg'
import { ThemeSwitcherMonoColor } from '../helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
}

const viewBox: number = 571.36

const SwitchOnIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherMonoColor(props.theme, setPrimaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M428.16 428.41l-285.44 0c-78.81,-0.01 -142.73,-63.92 -142.73,-142.74 0,-78.81 63.92,-142.73 142.73,-142.73l286.36 0c78.65,0.24 142.27,64.08 142.27,142.73 0,78.81 -63.92,142.73 -142.73,142.73 -0.14,0 -0.33,0 -0.47,0l0 0.01zm0 -49.72c-51.37,0 -93.02,-41.65 -93.02,-93.02 0,-51.37 41.65,-93.02 93.02,-93.02 51.37,0 93.02,41.65 93.02,93.02 0,51.37 -41.65,93.02 -93.02,93.02z" />
            </Scale>
        </Svg>
    )
}

export default SwitchOnIcon

SwitchOnIcon.defaultProps = {
    name: 'Switch on icon',
    componentName: 'SwitchOnIcon',
    description: 'Switch icon at on state for all types of printers.',
    tags: [Tag.ICONS, Tag.MINI, Tag.SL1],

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