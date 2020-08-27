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

const viewBox: number = 363.65

const CalibrateIcon = (props: IProps) => {
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
                <path fill={secondaryColor?.toString()} d="M181.83 134.78c25.98,0 47.03,21.06 47.03,47.03l-47.03 0 0 -47.03zm0 94.07c-25.98,0 -47.04,-21.06 -47.04,-47.03l47.04 0 0 47.03z" />
                <path fill={primaryColor?.toString()} d="M172.64 66.54c-56.53,4.44 -101.64,49.54 -106.09,106.07l-6.07 -0c-5.08,0 -9.2,4.12 -9.2,9.2 0,5.08 4.12,9.2 9.2,9.2l6.07 0c4.45,56.52 49.55,101.63 106.07,106.08l-0 6.08c0,5.08 4.12,9.2 9.2,9.2 5.08,0 9.2,-4.12 9.2,-9.2l0 -6.08c56.52,-4.45 101.62,-49.55 106.07,-106.06l6.08 0c5.08,0 9.2,-4.12 9.2,-9.2 0,-5.08 -4.12,-9.2 -9.2,-9.2l-6.08 -0c-4.44,-56.53 -49.54,-101.63 -106.06,-106.09l0 -6.07c0,-5.08 -4.12,-9.2 -9.2,-9.2 -5.08,0 -9.2,4.12 -9.2,9.2l-0 6.07zm9.19 68.24c-25.98,0 -47.03,21.06 -47.03,47.03l47.03 0 0 -47.03zm0 94.07c25.98,0 47.04,-21.06 47.04,-47.03l-47.04 0 0 47.03zm9.19 -121.89c0,5.08 -4.12,9.2 -9.2,9.2 -5.08,0 -9.2,-4.12 -9.2,-9.2l0.01 -21.08c-45.8,4.36 -82.37,40.93 -86.73,86.73l21.07 0.01c5.08,0 9.2,4.12 9.2,9.2 0,5.08 -4.12,9.2 -9.2,9.2l-21.07 -0.01c4.36,45.79 40.94,82.36 86.73,86.72l0.01 -21.06c0,-5.08 4.12,-9.2 9.2,-9.2 5.08,0 9.2,4.12 9.2,9.2l-0.01 21.06c45.79,-4.36 82.36,-40.93 86.72,-86.71l-21.06 -0.01c-5.08,0 -9.2,-4.12 -9.2,-9.2 0,-5.08 4.12,-9.2 9.2,-9.2l21.06 0.01c-4.36,-45.79 -40.92,-82.37 -86.71,-86.73l-0.01 21.07z" />
            </Scale>
        </svg>
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