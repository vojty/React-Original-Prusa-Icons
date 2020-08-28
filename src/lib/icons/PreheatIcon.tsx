import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from '../../components/helpers/scale'
import { Svg } from 'src/components/helpers/svg'
import { ThemeSwitcher } from '../../components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 800.05

const PreheatIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M302.7 611.01c-40.05,-39.54 -45.12,-62.86 -10.14,-107.97 12.17,-15.71 17.75,-31.43 17.75,-46.63 0,-31.94 -23.32,-63.37 -53.74,-99.87l-48.15 45.62c45.62,53.23 41.57,58.8 8.62,105.44 -10.64,15.21 -14.7,29.91 -14.7,45.12 0,38.53 28.89,75.02 55.26,102.4l45.62 -44.1 -0.5 0zm288.43 0c-40.05,-39.54 -45.12,-62.86 -10.14,-107.97 12.16,-15.71 17.74,-31.43 17.74,-46.63 0,-31.94 -23.32,-63.37 -53.73,-99.87l-48.15 45.62c45.62,53.23 41.57,58.8 8.62,105.44 -10.64,15.21 -14.7,29.91 -14.7,45.12 0,38.53 28.89,75.02 55.25,102.4l45.63 -44.1 -0.51 0zm-145.99 0c-40.05,-39.54 -45.12,-62.86 -10.14,-107.97 12.16,-15.71 17.74,-31.43 17.74,-46.63 0,-31.94 -23.32,-63.37 -53.74,-99.87l-48.15 45.62c45.62,53.23 41.57,58.8 8.62,105.44 -10.64,15.21 -14.7,29.91 -14.7,45.12 0,38.53 28.89,75.02 55.25,102.4l45.63 -44.1 -0.51 0z" />
                <path fill={primaryColor?.toString()} d="M566.18 32l0 124.4 -108.1 140.72 -89.37 0 -108.08 -140.72 0 -124.4 67.62 0 0 101.45 73.08 96.03 23.55 0 73.67 -96.03 0 -101.45 67.64 0zm-421.64 665.59l510.97 0 0 70.46 -510.97 0 0 -70.46z" />
            </Scale>
        </Svg>
    )
}

export default PreheatIcon

PreheatIcon.defaultProps = {
    name: 'Preheat icon',
    componentName: 'PreheatIcon',
    description: 'Preheating nozzle and heated bed.',
    tags: [Tag.ICONS, Tag.MINI],

    folder: Folder.ICONS,

    width: 48,
    height: 48,

    theme: Theme.LIGHT,

    primaryColor: Color.DARK_GRAY,
    secondaryColor: Color.ORANGE,

    withBackground: true,
    backgroundColor: Color.TRANSPARENT,
    backgroundRounded: true,
    backgroundRadius: (viewBox * DefaultRadiusRatio),
}

