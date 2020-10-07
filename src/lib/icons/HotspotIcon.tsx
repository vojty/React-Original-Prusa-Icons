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

const HotspotIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M2000 1647.5c195.02,0 352.5,157.42 352.5,352.5 0,195.02 -157.42,352.5 -352.5,352.5 -195.02,0 -352.5,-157.42 -352.5,-352.5 0,-195.02 157.42,-352.5 352.5,-352.5z" />
                <path fill={primaryColor?.toString()} d="M2011.78 1276.22c397.12,0 721.4,324.28 721.4,721.4 0,197.4 -79.9,378.3 -211.48,509.9l256.1 256.12c197.4,-197.4 317.22,-467.62 317.22,-766.02 0,-596.9 -484.1,-1080.92 -1080.92,-1080.92 -596.88,0 -1080.92,484.1 -1080.92,1080.92 0,298.4 119.82,568.68 317.22,766.02l256.1 -256.12c-131.58,-131.6 -211.48,-310.2 -211.48,-509.9 0,-397.12 324.28,-721.4 721.4,-721.4l-4.7 0 0.06 0zm0 -721.4c794.22,0 1440.5,646.2 1440.5,1440.48 0,397.1 -162.12,756.62 -423,1019.8l256.12 256.12c324.28,-324.3 528.7,-775.42 528.7,-1273.6 0,-994 -806,-1800 -1800,-1800 -994,0 -1800,806 -1800,1800 0,498.18 202.1,947 528.7,1273.6l256.12 -256.12c-260.82,-260.8 -423,-622.7 -423,-1019.8 0,-794.22 646.2,-1440.48 1440.5,-1440.48l-4.64 0z" />
            </Scale>
        </Svg>
    )
}

export default HotspotIcon

HotspotIcon.defaultProps = {
    name: 'Hotspot Icon',
    componentName: 'HotspotIcon',
    description: 'Setting up an access point in the printer.',
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