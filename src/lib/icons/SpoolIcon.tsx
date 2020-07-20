import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import { BackgroundSwitcher } from 'src/components/helpers/backgroundSwitcher'
import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { ThemeSwitcher } from '../../components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 1333.33

const SpoolIcon = (props: IProps) => {
    const [viewBoxStart, setViewBoxStart] = useState<number>(0)
    const [viewBoxEnd, setViewBoxEnd] = useState<number>(viewBox)
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
        BackgroundSwitcher(props.withBackground, viewBoxStart, setViewBoxStart, viewBoxEnd, setViewBoxEnd)
    }, [props.theme]) // eslint-disable-line

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox={`${viewBoxStart} ${viewBoxStart} ${viewBoxEnd} ${viewBoxEnd}`}>
            {props.withBackground && <rect fill={backgroundColor?.toString()} width={viewBoxEnd} height={viewBoxEnd} rx={props.backgroundRounded ? props.backgroundRadius : 0} ry={props.backgroundRounded ? props.backgroundRadius : 0} />}
            <Scale withBackground={props.withBackground}>
                <path fill={primaryColor?.toString()} d="M666.68 273.7c-217.05,0 -393.01,175.95 -393.01,393.01 0,72.81 19.81,140.99 54.33,199.45l0 -199.45 0 -0.81c0.44,-186.67 151.91,-337.86 338.64,-337.86 300.76,0 452.29,365.33 239.47,578.15 -161.5,161.54 -410.85,113.14 -521.68,-51.07l0 85.06c71.43,73.7 171.47,119.51 282.21,119.51 217.05,0 393.01,-175.95 393.01,-393.01 0,-217.05 -175.95,-393.01 -393.01,-393.01l0.03 0.03zm104.02 288.99c-92.39,-92.42 -251.07,-26.66 -251.07,104.02 0,130.64 158.69,196.43 251.07,104.02 57.42,-57.45 57.45,-150.58 0,-208l0 -0.04zm-104.02 -1.83c-58.43,0 -105.81,47.38 -105.81,105.81 0,58.43 47.38,105.81 105.81,105.81 58.43,0 105.81,-47.38 105.81,-105.81 0,-58.43 -47.38,-105.81 -105.81,-105.81z" />
                <path fill={secondaryColor?.toString()} d="M666.68 328.03c300.76,0 452.29,365.33 239.47,578.15 -161.5,161.54 -410.85,113.14 -521.68,-51.07l0 174.39c0,15.6 -12.65,28.22 -28.22,28.22 -15.6,0 -28.22,-12.65 -28.22,-28.22l0 -362.79 0 -0.81c0.44,-186.67 151.91,-337.86 338.64,-337.86l0.01 -0.01zm104.02 234.65c-92.39,-92.42 -251.07,-26.66 -251.07,104.02 0,130.64 158.69,196.43 251.07,104.02 57.42,-57.45 57.45,-150.58 0,-208l0 -0.04z" />
            </Scale>
        </svg>
    )
}

export default SpoolIcon

SpoolIcon.defaultProps = {
    name: 'Spool icon',
    componentName: 'SpoolIcon',
    description: 'Filament spool icon.',
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

