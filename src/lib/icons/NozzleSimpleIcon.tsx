import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { Svg } from 'src/components/helpers/svg'
import { ThemeSwitcher } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 800.06

const NozzleSimpleIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor) // eslint-disable-line
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M139.99 43.48c0.01,-14.73 11.96,-26.68 26.69,-26.68 14.73,0 26.68,11.95 26.68,26.68l-0.01 221.04 413.37 0 0 -221.04c0,-14.73 11.95,-26.68 26.68,-26.68 14.73,0 26.68,11.95 26.68,26.68l0 221.04 113.3 0c14.73,0.03 26.65,11.96 26.68,26.68l0.01 264.94c-0.03,14.71 -11.96,26.64 -26.69,26.67l-125.46 0.01 -161.77 189.46c-5.01,6.84 -12.97,10.9 -21.45,10.96l-129.17 0.01c-7.8,-0.09 -15.19,-3.54 -20.26,-9.47l-163.12 -190.96 -125.46 0c-14.72,-0.04 -26.65,-11.97 -26.67,-26.69l-0.02 -264.93c0.04,-14.72 11.97,-26.65 26.69,-26.68l113.3 -0 0 -221.04zm409.99 486.15l0 -211.59 -299.9 0 0 211.59 299.9 0zm53.36 -211.59l0 211.59 143.36 0 0 -211.59 -143.36 0zm-406.78 211.59l0 -211.59 -143.36 0 0 211.59 143.36 0zm25.5 53.36l125.47 146.91 104.86 -0 125.47 -146.91 -355.62 0.01 -0.17 0z" />
            </Scale>
        </Svg>
    )
}

export default NozzleSimpleIcon

NozzleSimpleIcon.defaultProps = {
    name: 'Nozzle simple icon',
    componentName: 'NozzleSimpleIcon',
    description: 'Nozzle icon for Live adjust Z caibration. ',
    tags: [Tag.ICONS, Tag.MINI],

    folder: Folder.ICONS,

    width: 48,
    height: 48,

    theme: Theme.LIGHT,

    primaryColor: Color.DARK_GRAY,
    secondaryColor: Color.TRANSPARENT,

    withBackground: true,
    backgroundColor: Color.WHITE,
    backgroundRounded: true,
    backgroundRadius: (viewBox * DefaultRadiusRatio),
}