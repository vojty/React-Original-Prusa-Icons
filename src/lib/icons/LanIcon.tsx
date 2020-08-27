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

const viewBox: number = 363.64

const LanIcon = (props: IProps) => {
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
                <path fill={primaryColor?.toString()} d="M209.95 238.16l-56.4 0 0 56.4 56.4 0 0 -56.4zm-84.47 0l-56.4 0 0 56.4 56.4 0 0 -56.4zm-18.85 18.85l0 18.85 -18.85 0 0 -18.85 18.85 0zm187.94 -18.85l-56.4 0 0 56.4 56.4 0 0 -56.4zm-18.85 18.85l0 18.85 -18.85 0 0 -18.85 18.85 0zm-84.47 -84.62l0 -28.22 -18.85 0 0 28.22 -84.47 0 0 46.92 18.7 0 0 -28.07 65.77 0 0 28.07 18.85 0 0 -28.07 65.77 0 0 28.07 18.7 0 0 -46.92 -84.47 0zm-0.14 84.62l0 18.85 -18.85 0 0 -18.85 18.85 0z" />
                <path fill={secondaryColor?.toString()} d="M219.32 69.08l-75.14 0 0 56.4 75.14 0 0 -56.4zm-18.85 18.85l0 18.85 -37.55 0 0 -18.85 37.55 0z" />
            </Scale>
        </svg>
    )
}

export default LanIcon

LanIcon.defaultProps = {
    name: 'LAN icon',
    componentName: 'LanIcon',
    description: 'Universal LAN icon for all types of printers.',
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