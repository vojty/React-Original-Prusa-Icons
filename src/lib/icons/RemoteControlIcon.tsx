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

const viewBox: number = 571.43

const RemoteControlIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} fillRule="nonzero" d="M237.4 104.8c-10.54,0 -19.05,-8.55 -19.05,-19.05 0,-10.54 8.55,-19.05 19.05,-19.05l96.75 0c10.54,0 19.05,8.55 19.05,19.05 0,10.54 -8.55,19.05 -19.05,19.05l-96.75 0zm-91.7 -104.72l280.03 0c14.22,0 27.19,5.87 36.57,15.25l0.09 0.08c9.38,9.42 15.25,22.4 15.25,36.57l0 467.53c0,14.22 -5.87,27.19 -15.29,36.62l0.04 0.04c-9.38,9.38 -22.36,15.25 -36.7,15.25l-280.03 0c-14.3,0 -27.28,-5.87 -36.7,-15.25 -9.38,-9.38 -15.25,-22.36 -15.25,-36.7l0 -467.53c0,-14.3 5.87,-27.28 15.25,-36.7l0.04 0.04c9.42,-9.42 22.4,-15.29 36.62,-15.29l0.09 0.09 -0.01 -0.01zm280.03 47.61l-280.03 0c-1.24,0 -2.32,0.45 -3.01,1.2l0 0.09c-0.79,0.79 -1.28,1.9 -1.28,3.01l0 467.53c0,1.2 0.54,2.23 1.28,3.01 0.79,0.79 1.9,1.28 3.01,1.28l280.03 0c1.2,0 2.23,-0.54 3.01,-1.28l0.08 0c0.7,-0.7 1.2,-1.78 1.2,-3.01l0 -467.53c0,-1.24 -0.46,-2.32 -1.2,-3.01l-0.08 -0.09c-0.7,-0.7 -1.78,-1.2 -3.01,-1.2z" />
                <path fill={secondaryColor?.toString()} d="M313.86 480.17c0,-15.52 -12.58,-28.1 -28.1,-28.1 -15.52,0 -28.1,12.58 -28.1,28.1 0,15.52 12.58,28.1 28.1,28.1 15.52,0 28.1,-12.58 28.1,-28.1z" />
            </Scale>
        </Svg>
    )
}

export default RemoteControlIcon

RemoteControlIcon.defaultProps = {
    name: 'Remote Control icon',
    componentName: 'RemoteControlIcon',
    description: 'Icon for printer remote control.',
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