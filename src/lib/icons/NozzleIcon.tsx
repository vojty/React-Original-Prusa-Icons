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

const viewBox: number = 288.76

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
                    <path fill={secondaryColor?.toString()} d="M154.43 143.15l0 20.11c0,0 0,0.01 0,0.02 0,5.54 -4.5,10.04 -10.04,10.04 -0,0 -0,0 -0.01,0l-44.54 0 0 6.1 99.3 0c0,-0 0.01,-0 0.02,-0 5.54,0 10.04,4.5 10.04,10.04 0,0.01 0,0.01 0,0.02l0 26.04c0,0 0,0.01 0,0.02 0,5.54 -4.5,10.04 -10.04,10.04 -0.01,0 -0.01,0 -0.02,0l-109.17 0c-5.47,-0.12 -9.84,-4.59 -9.84,-10.06 0,-5.47 4.38,-9.94 9.84,-10.06l99.29 0 0 -6.11 -99.3 0c-0,-0 -0.01,-0 -0.02,-0 -5.54,0 -10.04,-4.5 -10.04,-10.04 0,-0.01 0,-0.01 0,-0.02l-0 -26.04c0,-0 0,-0.01 0,-0.01 0,-5.54 4.5,-10.04 10.04,-10.04 0.01,0 0.01,0 0.02,0l44.53 0 0 -10.06 20.11 0 -0.18 0z" />
                    <path fill={primaryColor?.toString()} d="M189.81 65.54L189.81 102.54 157.67 144.38 131.09 144.38 98.95 102.54 98.95 65.54 119.06 65.54 119.06 95.71 140.79 124.26 147.81 124.26 169.72 95.71 169.72 65.54z" />
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

