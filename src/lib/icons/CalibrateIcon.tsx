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

const viewBox: number = 363.65

const CalibrateIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M181.83 116.31c36.19,0 65.51,29.33 65.51,65.51l-65.51 0 0 -65.51zm0 131.02c-36.18,0 -65.51,-29.33 -65.51,-65.51l65.51 0 0 65.51z" />
                <path fill={primaryColor?.toString()} d="M169.03 21.27c-78.74,6.19 -141.56,69 -147.76,147.73l-8.45 -0c-7.07,0 -12.81,5.74 -12.81,12.82 0,7.07 5.74,12.81 12.81,12.81l8.45 0c6.2,78.73 69.01,141.54 147.73,147.75l-0 8.47c0,7.07 5.74,12.81 12.82,12.81 7.07,0 12.81,-5.74 12.81,-12.81l0 -8.47c78.72,-6.2 141.53,-69.01 147.74,-147.72l8.47 0c7.07,0 12.81,-5.74 12.81,-12.82 0,-7.07 -5.74,-12.81 -12.81,-12.81l-8.46 -0c-6.19,-78.73 -69,-141.54 -147.72,-147.75l0 -8.46c0,-7.07 -5.74,-12.81 -12.82,-12.81 -7.07,0 -12.81,5.74 -12.81,12.81l-0 8.45zm12.8 95.04c-36.18,0 -65.51,29.33 -65.51,65.51l65.51 0 0 -65.51zm0 131.02c36.19,0 65.51,-29.33 65.51,-65.51l-65.51 0 0 65.51zm12.81 -169.77c0,7.08 -5.74,12.82 -12.81,12.82 -7.08,0 -12.82,-5.74 -12.82,-12.82l0.01 -29.35c-63.78,6.07 -114.72,57.01 -120.79,120.79l29.34 0.01c7.08,0 12.82,5.74 12.82,12.81 0,7.08 -5.74,12.82 -12.82,12.82l-29.35 -0.01c6.08,63.78 57.02,114.71 120.79,120.77l0.01 -29.33c0,-7.08 5.74,-12.82 12.81,-12.82 7.08,0 12.82,5.74 12.82,12.82l-0.01 29.33c63.77,-6.08 114.7,-57 120.78,-120.77l-29.34 -0.01c-7.08,0 -12.82,-5.74 -12.82,-12.81 0,-7.08 5.74,-12.82 12.82,-12.82l29.33 0.01c-6.07,-63.78 -56.99,-114.72 -120.77,-120.8l-0.01 29.35z" />
            </Scale>
        </Svg>
    )
}

export default CalibrateIcon

CalibrateIcon.defaultProps = {
    name: 'Calibrate icon',
    componentName: 'CalibrateIcon',
    description: 'Calibrate icon for FDM printers.',
    tags: [Tag.ICONS, Tag.MINI],

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