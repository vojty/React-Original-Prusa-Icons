import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from '../helpers/scale'
import { Svg } from '../helpers/svg'
import { ThemeSwitcherMonoColor } from '../helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
}

const viewBox: number = 307.69

const SwitchOffIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherMonoColor(props.theme, setPrimaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M77.12 230.71l153.72 0c42.44,-0 76.86,-34.42 76.86,-76.87 0,-42.44 -34.42,-76.86 -76.86,-76.86l-154.21 0c-42.35,0.13 -76.61,34.51 -76.61,76.86 0,42.44 34.42,76.86 76.86,76.86 0.08,0 0.18,0 0.25,0l0 0zm0 -26.77c27.67,0 50.09,-22.43 50.09,-50.09 0,-27.67 -22.43,-50.09 -50.09,-50.09 -27.66,0 -50.09,22.43 -50.09,50.09 0,27.66 22.43,50.09 50.09,50.09z" />
            </Scale>
        </Svg>
    )
}

export default SwitchOffIcon

SwitchOffIcon.defaultProps = {
    name: 'Switch off icon',
    componentName: 'SwitchOffIcon',
    description: 'Switch icon at off state for all types of printers.',
    tags: [Tag.ICONS, Tag.MINI, Tag.SL1],

    folder: Folder.ICONS,

    width: 48,
    height: 48,

    theme: Theme.LIGHT,

    primaryColor: Color.GRAY,

    withBackground: true,
    backgroundColor: Color.WHITE,
    backgroundRounded: true,
    backgroundRadius: (viewBox * DefaultRadiusRatio),
}