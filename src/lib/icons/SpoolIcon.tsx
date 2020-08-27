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

const viewBox: number = 800.1

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
                <path fill={primaryColor?.toString()} d="M400.06 140.03c-143.62,0 -260.04,116.42 -260.04,260.04 0,48.18 13.11,93.28 35.95,131.97l0 -131.97 0 -0.54c0.29,-123.51 100.51,-223.55 224.07,-223.55 199,0 299.27,241.73 158.45,382.54 -106.86,106.88 -271.84,74.86 -345.18,-33.8l0 56.28c47.26,48.77 113.46,79.08 186.73,79.08 143.62,0 260.04,-116.42 260.04,-260.04 0,-143.62 -116.42,-260.04 -260.04,-260.04l0.02 0.02zm68.83 191.21c-61.13,-61.15 -166.13,-17.64 -166.13,68.83 0,86.44 105,129.97 166.13,68.82 37.99,-38.01 38.02,-99.63 0,-137.63l0 -0.02zm-68.83 -1.21c-38.66,0 -70.01,31.35 -70.01,70.01 0,38.66 31.35,70.01 70.01,70.01 38.66,0 70.01,-31.35 70.01,-70.01 0,-38.66 -31.35,-70.01 -70.01,-70.01z" />
                <path fill={secondaryColor?.toString()} d="M400.06 175.98c199,0 299.27,241.73 158.46,382.54 -106.86,106.88 -271.85,74.86 -345.18,-33.8l0 115.39c0,10.32 -8.37,18.67 -18.67,18.67 -10.32,0 -18.67,-8.37 -18.67,-18.67l0 -240.04 0 -0.54c0.29,-123.51 100.52,-223.55 224.07,-223.55l0 -0zm68.83 155.26c-61.13,-61.15 -166.13,-17.64 -166.13,68.83 0,86.44 105,129.97 166.13,68.82 37.99,-38.01 38.02,-99.63 0,-137.63l0 -0.02z" />
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

