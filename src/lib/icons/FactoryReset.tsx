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

const viewBox: number = 800

const FactoryResetTimesIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M159.98 213.22l-26.65 0c5.29,-58.19 47.6,-106.66 93.33,-106.66 6.56,0 12.76,1.56 18.2,4.39 8.41,-18.31 26.97,-31.03 48.44,-31.03 21.5,0 40.03,12.73 48.44,31.03 5.48,-2.8 11.64,-4.39 18.2,-4.39 22.08,0 39.99,17.91 39.99,39.99 0,22.08 -17.91,39.99 -39.99,39.99 -6.56,0 -12.76,-1.56 -18.2,-4.39 -8.41,18.31 -26.97,31.04 -48.44,31.04 -62.54,0 -99.27,-78.68 -133.35,0l0 0 0.04 0.03z" />
                <path fill={primaryColor?.toString()} d="M720 719.87l-640 0 0 -480 160 0 0 160 160 -106.67 0 106.89 160 -106.89 0 107.14 160 -107.14 0 426.67zm-133.31 -106.67l-53.34 0 0 -80.02 53.34 0 0 80.02zm-106.67 0l-53.33 0 0 -80.02 53.33 0 0 80.02zm-106.66 0l-53.33 0 0 -80.02 53.33 0 0 80.02zm-106.67 0l-53.33 0 0 -80.02 53.33 0 0 80.02zm-80.02 -320l-53.34 0 0 373.33 533.34 0 0 -266.66 -160 106.66 0 -106.66 -160 106.66 0 -106.66 -160 106.66 0 -213.33 0 0z" />
            </Scale>
        </Svg>
    )
}

export default FactoryResetTimesIcon

FactoryResetTimesIcon.defaultProps = {
    name: 'Factory Reset Icon',
    componentName: 'FactoryResetIcon',
    description: 'Icon for reseting printer to factory defaults.',
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