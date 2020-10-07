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

const HostnameIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M321.66 571.43l-16.75 -71.47 -38.46 0 -16.75 71.47 71.97 0zm-71.3 -142.85l21.62 47.59 27.73 0 21.87 -47.59 -71.22 0z" />
                <path fill={primaryColor?.toString()} d="M571.27 571.43l-47.51 0c0,-73.9 2.85,-84.54 -41.89,-94.93 -68.54,-15.83 -133.22,-30.75 -156.77,-82.36 -8.63,-18.85 -14.33,-49.85 7.37,-90.82 48.6,-91.83 60.83,-170.59 33.43,-216.09 -31.92,-53.04 -128.86,-53.37 -161.13,0.84 -27.48,46.08 -15.08,124.43 33.93,214.91 22.12,40.81 16.59,71.89 8.05,90.83 -23.38,51.87 -87.48,66.61 -155.34,82.28 -46.75,10.81 -43.82,20.69 -43.82,95.35l-47.51 0 -0.09 -29.58c0,-59.99 4.77,-94.68 75.66,-111.02 80.1,-18.52 159.2,-35.02 121.16,-105.15 -112.69,-207.79 -32.17,-325.68 88.9,-325.68 118.64,0 201.25,113.45 88.9,325.68 -36.95,69.71 39.29,86.31 121.16,105.15 70.97,16.34 75.66,51.03 75.66,111.02l-0.09 29.58 0 0 -0.08 0z" />
            </Scale>
        </Svg>
    )
}

export default HostnameIcon

HostnameIcon.defaultProps = {
    name: 'Hostname Icon',
    componentName: 'HostnameIcon',
    description: 'Network identification name.',
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