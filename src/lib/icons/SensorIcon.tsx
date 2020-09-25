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

const viewBox: number = 307.7

const SensorIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M211.3 38.46l-18.98 19.26c17.9,14.11 29.26,34.7 29.26,57.67 0,22.96 -11.36,43.55 -29.26,57.67l18.98 19.26c23.84,-18.81 38.97,-46.26 38.97,-76.92 0,-30.67 -15.11,-58.12 -38.97,-76.92zm-133.82 173.03l-19 19.3c-35.78,-28.22 -58.48,-69.4 -58.48,-115.4 0,-46 22.69,-87.18 58.48,-115.39l19 19.28c-29.82,23.52 -48.77,57.85 -48.77,96.1 0,38.26 18.95,72.58 48.77,96.1l0 0zm8.65 -96.11c0,-22.96 11.37,-43.55 29.26,-57.67l-18.99 -19.26c-23.84,18.81 -38.97,46.26 -38.97,76.92 0,30.67 15.13,58.12 38.97,76.92l18.99 -19.26c-17.9,-14.12 -29.26,-34.7 -29.26,-57.67zm163.09 -115.38l-19 19.28c29.82,23.52 48.77,57.85 48.77,96.1 0,38.26 -18.95,72.58 -48.77,96.1l19 19.3c35.78,-28.22 58.48,-69.4 58.48,-115.4 0,-46 -22.69,-87.18 -58.48,-115.39l0 0z" />
                <path fill={secondaryColor?.toString()} d="M192.31 115.39c0,-21.24 -17.23,-38.46 -38.46,-38.46 -21.23,0 -38.46,17.22 -38.46,38.46 0,16.72 10.74,30.81 25.64,36.1l0 156.21 25.64 0 0 -156.21c14.9,-5.3 25.64,-19.39 25.64,-36.1z" />
            </Scale>
        </Svg>
    )
}

export default SensorIcon

SensorIcon.defaultProps = {
    name: 'Sensor icon',
    componentName: 'SensorIcon',
    description: 'Icon for sensor settings for all types of printers.',
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