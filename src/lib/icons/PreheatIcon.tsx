import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import { BackgroundSwitcher } from '../../components/helpers/backgroundSwitcher'
import IconDetail from '../../interfaces/Icon'
import { Scale } from '../../components/helpers/scale'
import { ThemeSwitcher } from '../../components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 800.05

const PreheatIcon = (props: IProps) => {
    const [viewBoxStart, setViewBoxStart] = useState<number>(0)
    const [viewBoxEnd, setViewBoxEnd] = useState<number>(viewBox)
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
        BackgroundSwitcher(props.withBackground, viewBoxStart, setViewBoxStart, viewBoxEnd, setViewBoxEnd)
    }, [props.theme, props.withBackground]) // eslint-disable-line

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox={`${viewBoxStart} ${viewBoxStart} ${viewBoxEnd} ${viewBoxEnd}`}>
            {props.withBackground && <rect fill={backgroundColor?.toString()} width={viewBoxEnd} height={viewBoxEnd} rx={props.backgroundRounded ? props.backgroundRadius : 0} ry={props.backgroundRounded ? props.backgroundRadius : 0} />}
            <Scale withBackground={props.withBackground}>
                <path fill={secondaryColor?.toString()} d="M323.99 564.85c-31.29,-30.89 -35.25,-49.11 -7.92,-84.35 9.51,-12.27 13.86,-24.55 13.86,-36.43 0,-24.95 -18.22,-49.5 -41.98,-78.02l-37.62 35.64c35.64,41.58 32.47,45.94 6.73,82.37 -8.32,11.88 -11.48,23.37 -11.48,35.25 0,30.1 22.57,58.61 43.17,79.99l35.64 -34.45 -0.39 0zm225.33 0c-31.29,-30.89 -35.25,-49.11 -7.92,-84.35 9.5,-12.27 13.86,-24.55 13.86,-36.43 0,-24.95 -18.22,-49.5 -41.97,-78.02l-37.62 35.64c35.64,41.58 32.47,45.94 6.73,82.37 -8.32,11.88 -11.48,23.37 -11.48,35.25 0,30.1 22.57,58.61 43.17,79.99l35.64 -34.45 -0.4 0zm-114.05 0c-31.29,-30.89 -35.25,-49.11 -7.92,-84.35 9.5,-12.27 13.86,-24.55 13.86,-36.43 0,-24.95 -18.22,-49.5 -41.98,-78.02l-37.62 35.64c35.64,41.58 32.47,45.94 6.73,82.37 -8.32,11.88 -11.48,23.37 -11.48,35.25 0,30.1 22.57,58.61 43.16,79.99l35.64 -34.45 -0.4 0z" />
                <path fill={primaryColor?.toString()} fillRule="nonzero" d="M529.84 112.51l0 97.18 -84.45 109.94 -69.82 0 -84.44 -109.94 0 -97.18 52.83 0 0 79.25 57.1 75.02 18.4 0 57.55 -75.02 0 -79.25 52.84 0zm-329.4 519.98l399.19 0 0 55.04 -399.19 0 0 -55.04z" />
            </Scale>
        </svg>
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

