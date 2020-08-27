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

const viewBox: number = 571.35

const HeatedBedIcon = (props: IProps) => {
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
                <path fill={secondaryColor?.toString()} d="M225.41 329.76c-22.32,-22.04 -25.14,-35.03 -5.65,-60.18 6.78,-8.76 9.89,-17.52 9.89,-26 0,-17.8 -12.99,-35.31 -29.94,-55.66l-26.84 25.43c25.43,29.67 23.17,32.78 4.8,58.77 -5.94,8.48 -8.19,16.67 -8.19,25.14 0,21.47 16.11,41.81 30.8,57.07l25.43 -24.59 0 0 -0.29 0.01zm160.76 0c-22.32,-22.04 -25.14,-35.03 -5.65,-60.18 6.78,-8.76 9.89,-17.52 9.89,-26 0,-17.8 -13,-35.31 -29.95,-55.66l-26.84 25.43c25.43,29.67 23.17,32.78 4.8,58.77 -5.93,8.48 -8.19,16.67 -8.19,25.14 0,21.47 16.1,41.81 30.8,57.07l25.43 -24.59 0 0 -0.29 0.01zm-81.37 0c-22.32,-22.04 -25.14,-35.03 -5.65,-60.18 6.78,-8.76 9.89,-17.52 9.89,-26 0,-17.8 -13,-35.31 -29.95,-55.66l-26.84 25.43c25.43,29.67 23.17,32.78 4.8,58.77 -5.93,8.48 -8.19,16.67 -8.19,25.14 0,21.47 16.1,41.81 30.8,57.07l25.43 -24.59 0 0 -0.29 0.01z" />
                <path fill={primaryColor?.toString()} fillRule="nonzero" d="M137.27 379.77L422.06 379.77 422.06 419.05 137.27 419.05z" />
            </Scale>
        </svg>
    )
}

export default HeatedBedIcon

HeatedBedIcon.defaultProps = {
    name: 'Heated Bed icon',
    componentName: 'HeatedBedIcon',
    description: 'Heated Bed icon for FDM printers.',
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