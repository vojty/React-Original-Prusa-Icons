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

const ExposureTimesIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M274.15 77.37l18.11 -18.11 18.19 18.2 -17.02 17.02c-5.98,-6.24 -12.38,-11.97 -19.29,-17.1l0 0zm-92.41 -5.31c-71.1,0 -128.81,57.63 -128.81,128.81 0,71.1 57.71,128.81 128.81,128.81 71.1,0 128.81,-57.62 128.81,-128.81 0,-71.1 -57.71,-128.81 -128.81,-128.81zm0 231.85c-56.78,0 -103.03,-46.25 -103.03,-103.03 0,-56.78 46.25,-103.03 103.03,-103.03 56.78,0 103.03,46.25 103.03,103.03 0,56.78 -46.25,103.03 -103.03,103.03zm-25.78 -255.26l0 -28.05 51.56 0 0 28.05c-18.54,-3.11 -33.36,-3.03 -51.48,0l0 0 -0.08 0z" />
                <path fill={secondaryColor?.toString()} d="M194.63 179.4l-8.84 -51.48 -7.84 0 -9.01 51.48c-7.67,4.46 -12.89,12.64 -12.89,22.16 0,14.24 11.54,25.78 25.78,25.78 14.24,0 25.78,-11.54 25.78,-25.78 0,-9.52 -5.22,-17.69 -12.89,-22.16l-0.08 0z" />
            </Scale>
        </Svg>
    )
}

export default ExposureTimesIcon

ExposureTimesIcon.defaultProps = {
    name: 'Exposure Times Icon',
    componentName: 'ExposureTimesIcon',
    description: 'Icon for exposure times settings for SLA printers.',
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