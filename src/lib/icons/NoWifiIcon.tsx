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

const NoWifiIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M535.7 1932.14c368.02,-392.28 878.94,-633.44 1442.06,-633.44 563.12,0 1072,241.36 1442.06,633.44l357.94 -380.12c-460.54,-488.7 -1096.02,-790.32 -1800,-790.32 -703.98,0 -1339.46,301.62 -1800,790.32l357.94 380.12zm872.96 927.26c144.76,-154.84 346.04,-249.4 567.26,-249.4 221.22,0 422.28,94.56 567.04,249.4l-567.04 603.24 -567.26 -603.24zm-261.5 -277.56c213.2,-225.34 506.8,-364.12 830.6,-364.12 323.8,0 617.4,138.78 830.6,364.12l349.92 -370.06c-301.62,-319.72 -717.94,-518.94 -1178.48,-518.94 -460.52,0 -876.84,197.18 -1178.46,518.94l349.92 370.06 0 0 -4.14 0 0.04 0z" />
                <path fill={secondaryColor?.toString()} d="M918.04 3355.12L3403.02 870.12 3124.92 592.02 639.94 3077z" />
            </Scale>
        </Svg>
    )
}

export default NoWifiIcon

NoWifiIcon.defaultProps = {
    name: 'No Wifi icon',
    componentName: 'No WifiIcon',
    description: 'Universal No Wifi connection icon for all types of printers.',
    tags: [Tag.ICONS, Tag.MINI, Tag.SL1],

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