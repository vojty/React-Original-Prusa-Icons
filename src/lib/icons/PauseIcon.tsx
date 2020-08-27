import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import { BackgroundSwitcher } from 'src/components/helpers/backgroundSwitcher'
import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { ThemeSwitcher } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 3998.88

const PauseIcon = (props: IProps) => {
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
                <path fill={secondaryColor?.toString()} d="M2478.25 1400.47l-358.96 0 0 1197.52 358.96 0 0 -1197.52zm-598.53 1197.52l-359.38 0 0 -1197.52 359.38 0 0 1197.52z" />
                <path fill={primaryColor?.toString()} d="M1999.5 562.34c-793.64,0 -1437.1,643.46 -1437.1,1437.1 0,793.62 643.46,1437.1 1437.1,1437.1 793.64,0 1437.1,-643.48 1437.1,-1437.1 0,-793.64 -643.46,-1437.1 -1437.1,-1437.1zm0 239.59c660.12,0 1197.5,537.39 1197.5,1197.5 0,660.1 -537.39,1197.5 -1197.5,1197.5 -660.12,0 -1197.5,-537.41 -1197.5,-1197.5 0,-660.12 537.39,-1197.5 1197.5,-1197.5z" />
            </Scale>
        </svg>
    )
}

export default PauseIcon

PauseIcon.defaultProps = {
    name: 'Pause icon',
    componentName: 'PauseIcon',
    description: 'Universal pause icon for all types of printers.',
    tags: [Tag.ICONS, Tag.MINI, Tag.SL1],

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