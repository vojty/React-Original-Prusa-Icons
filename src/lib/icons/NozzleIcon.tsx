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

const viewBox: number = 235.3

const NozzleIcon = (props: IProps) => {
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
            <path fill={secondaryColor?.toString()} d="M125.71 118.66c0,28.29 4.34,23.58 -44.48,23.58l0 4.97 80.93 0c4.52,0 8.18,3.66 8.18,8.2l0 21.23c0,4.52 -3.66,8.18 -8.2,8.18l-88.96 0c-10.55,-0.12 -10.54,-16.28 0,-16.39l80.91 0 0 -4.98 -80.93 0c-4.52,0 -8.18,-3.66 -8.18,-8.2l0 -21.23c0,-4.52 3.66,-8.18 8.2,-8.18l36.29 0 0 -7.19 16.25 0z" />
            <path fill={primaryColor?.toString()} d="M154.54 54.41L154.54 84.56 128.35 118.66 106.69 118.66 80.5 84.56 80.5 54.41 96.88 54.41 96.88 79 114.59 102.26 120.31 102.26 138.17 79 138.17 54.41z" />
            </Scale>
        </svg>
    )
}

export default NozzleIcon

NozzleIcon.defaultProps = {
    name: 'Nozzle icon',
    componentName: 'NozzleIcon',
    description: 'FDM or FFF nozzle with extruded filament.',
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

