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

const viewBox: number = 307.66

const SpeedIcon = (props: IProps) => {
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
                <path fill={secondaryColor?.toString()} d="M153.83 205.63c-10.97,0 -19.86,-8.89 -19.86,-19.86 0,-7.49 4.15,-14.01 10.26,-17.39l9.61 -47.54 9.61 47.52c6.12,3.38 10.26,9.9 10.26,17.39 0,10.98 -8.89,19.88 -19.87,19.88l0 0z" />
                <path fill={primaryColor?.toString()} d="M255.58 154.75c0,18.52 -4.97,35.9 -13.65,50.87l-14.72 -8.51c7.22,-12.47 11.41,-26.91 11.41,-42.37 0,-46.83 -37.96,-84.79 -84.79,-84.79 -46.83,0 -84.79,37.96 -84.79,84.79 0,15.45 4.2,29.89 11.41,42.37l-14.72 8.51c-8.68,-14.98 -13.65,-32.35 -13.65,-50.87 0,-56.11 45.65,-101.75 101.75,-101.75 56.11,0 101.75,45.65 101.75,101.75l-0 0z" />
            </Scale>
        </svg>
    )
}

export default SpeedIcon

SpeedIcon.defaultProps = {
    name: 'Speed icon',
    componentName: 'SpeedIcon',
    description: 'Speed icon for FDM printers.',
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