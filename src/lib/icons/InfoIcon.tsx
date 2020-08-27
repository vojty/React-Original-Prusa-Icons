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

const viewBox: number = 235.3

const InfoIcon = (props: IProps) => {
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
                <path fill={primaryColor?.toString()} d="M117.65 33.09c-46.7,0 -84.56,37.86 -84.56,84.56 0,46.7 37.86,84.56 84.56,84.56 46.7,0 84.56,-37.86 84.56,-84.56 0,-46.7 -37.86,-84.56 -84.56,-84.56zm0 14.1c38.84,0 70.46,31.62 70.46,70.46 0,38.84 -31.62,70.46 -70.46,70.46 -38.84,0 -70.46,-31.62 -70.46,-70.46 0,-38.84 31.62,-70.46 70.46,-70.46z" />
                <path fill={secondaryColor?.toString()} d="M99.17 100.89l0 14.09 14.07 0 0 42.26 14.09 0 0 -56.35 -28.17 0zm29.93 -21.12c0,4.86 -3.95,8.81 -8.81,8.81 -4.86,0 -8.81,-3.95 -8.81,-8.81 0,-4.86 3.95,-8.81 8.81,-8.81 4.86,0 8.81,3.95 8.81,8.81z" />
            </Scale>
        </svg>
    )
}

export default InfoIcon

InfoIcon.defaultProps = {
    name: 'Info icon',
    componentName: 'InfoIcon',
    description: 'Universal Info icon for all types of printers.',
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