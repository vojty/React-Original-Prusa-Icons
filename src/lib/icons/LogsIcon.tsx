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

const viewBox: number = 363.64

const LogsIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M257.57 90.91l-151.51 0 0 15.15 151.51 0 0 -15.15zm0 106.06l-151.51 0 0 -15.15 151.51 0 0 15.15zm0 -60.61l-151.51 0 0 15.15 151.51 0 0 -15.15z" />
                <path fill={primaryColor?.toString()} d="M333.33 217.97l0 -217.97 -303.03 0 0 363.64 154.38 0c47.93,0 148.65,-109.44 148.65,-145.67zm-272.73 115.36l0 -303.03 242.43 0.01 0 174.89c0,62.22 -90.91,37.23 -90.91,37.23 0,0 23,90.91 -39.97,90.91l-111.55 -0.01z" />
            </Scale>
        </Svg>
    )
}

export default LogsIcon

LogsIcon.defaultProps = {
    name: 'Logs icon',
    componentName: 'LogsIcon',
    description: 'Icon event logs for all types of printers.',
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