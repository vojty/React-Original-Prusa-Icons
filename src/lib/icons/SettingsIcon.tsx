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

const viewBox: number = 1195.02

const SettingsIcon = (props: IProps) => {
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
                <path fill={secondaryColor?.toString()} d="M597.51 450.7c-81.02,0 -146.81,65.79 -146.81,146.81 0,81.09 65.79,146.81 146.81,146.81 81.02,0 146.81,-65.79 146.81,-146.81 0,-81.02 -65.79,-146.81 -146.81,-146.81zm0 58.81c48.51,0 88,39.55 88,88 0,48.51 -39.55,88 -88,88 -48.51,0 -88,-39.55 -88,-88 0,-48.51 39.55,-88 88,-88z" />
                <path fill={primaryColor?.toString()} d="M964.86 664.45l0 -133.88c-65.91,-23.61 -83.58,-24.64 -92.6,-46.85 -9.34,-22.21 2.43,-35.71 32.64,-98.88l-94.71 -94.71c-62.07,29.51 -76.35,41.67 -98.88,32.64 -22.21,-9.34 -23.61,-27.07 -46.85,-92.6l-133.88 0c-23.23,65.6 -24.64,83.58 -46.85,92.6 -22.91,9.72 -36.8,-3.13 -98.88,-32.64l-94.71 94.71c29.82,62.78 41.67,76.35 32.64,98.88 -9.34,22.21 -27.07,23.23 -92.6,46.85l0 133.88c65.6,23.23 83.58,24.64 92.6,46.85 9.34,22.53 -2.43,35.71 -32.64,98.88l94.71 94.71c61.44,-29.12 75.65,-41.98 98.88,-32.64 22.21,9.34 23.23,27.07 46.85,92.6l133.88 0c23.23,-65.22 24.64,-83.26 47.16,-92.99 22.91,-9.34 36.42,3.13 98.55,32.64l94.71 -94.71c-29.82,-62.78 -41.67,-76.35 -32.64,-98.88 9.34,-22.21 27.07,-23.23 92.6,-46.85l0 0 0 0.32 0.01 0.06zm-149.5 23.55c-17.66,42.69 -2.11,75.26 14.91,109.63l-33.28 33.35c-33.66,-16.64 -66.24,-32.96 -109.63,-14.91 -42.69,17.66 -54.85,51.71 -66.94,88.12l-46.85 0c-12.16,-36.42 -24.26,-70.4 -66.94,-88.12 -43.39,-18.05 -76.67,-1.41 -109.63,14.91l-33.35 -33.35c17.02,-34.37 32.64,-66.94 14.91,-109.63 -17.66,-42.69 -51.71,-54.85 -88.12,-66.94l0 -46.85c36.42,-12.16 70.4,-24.26 88.12,-66.94 17.66,-42.69 2.11,-75.26 -14.91,-109.63l33.35 -33.28c33.28,16.32 66.24,32.96 109.63,14.91 42.69,-17.66 54.78,-51.71 66.94,-88.12l46.85 0c12.16,36.42 24.26,70.4 66.94,88.12 43.39,18.05 76.67,1.41 109.63,-14.91l33.28 33.28c-17.02,34.37 -32.64,66.94 -14.91,109.63 17.66,42.69 51.71,54.85 88.12,66.94l0 46.85c-36.42,12.16 -70.4,24.26 -88.12,66.94l0 0z" />
            </Scale>
        </svg>
    )
}

export default SettingsIcon

SettingsIcon.defaultProps = {
    name: 'Settings icon',
    componentName: 'SettingsIcon',
    description: 'Universal settings icon for all types of printers.',
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