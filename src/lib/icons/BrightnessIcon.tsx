import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from '../helpers/scale'
import { Svg } from '../helpers/svg'
import { ThemeSwitcherDuoColor } from '../helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 235.44

const BrightnessIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M117.72 186.34c-3.38,0 -6.56,-0.31 -9.84,-0.82l0 49.81 19.59 0 0 -49.81c-3.18,0.41 -6.46,0.82 -9.84,0.82l0.1 0zm0 -117.67c-27.07,0 -49.02,21.93 -49.02,48.99 0,27.06 21.94,48.99 49.02,48.99 27.07,0 49.02,-21.93 49.02,-48.99 0,-27.06 -21.94,-48.99 -49.02,-48.99zm0 19.58c16.2,0 29.43,13.22 29.43,29.42 0,16.2 -13.23,29.42 -29.43,29.42l0 -0.1c-16.2,0 -29.33,-13.12 -29.33,-29.31 0,-16.2 13.13,-29.31 29.33,-29.31l0 -0.1 0 0zm-41.02 -25.52l-35.27 -35.26 -13.84 13.84 35.27 35.26c3.9,-5.23 8.61,-9.94 13.84,-13.84l0 0zm41.02 -13.74c3.38,0 6.56,0.31 9.84,0.82l0 -49.81 -19.59 0 0 49.81c3.18,-0.41 6.46,-0.82 9.84,-0.82l-0.1 0zm54.86 27.57l35.27 -35.26 -13.84 -13.84 -35.27 35.26c5.23,3.89 9.95,8.61 13.84,13.84zm-123.56 41c0,-3.38 0.31,-6.56 0.82,-9.84l-49.84 0 0 19.58 49.84 0c-0.41,-3.18 -0.82,-6.46 -0.82,-9.84l0 0.1zm109.72 54.84l35.27 35.26 13.84 -13.84 -35.27 -35.26c-4,5.23 -8.61,9.94 -13.84,13.84zm-95.98 -13.84l-35.27 35.26 13.84 13.84 35.27 -35.26c-5.23,-3.89 -9.95,-8.61 -13.84,-13.84zm122.74 -50.84c0.41,3.18 0.82,6.46 0.82,9.84 0,3.38 -0.31,6.56 -0.82,9.84l49.84 0 0 -19.58 -49.84 0 0 -0.1z" />
                <path fill={secondaryColor?.toString()} d="M117.72 117.77l0 -29.31c-16.2,0 -29.33,13.12 -29.33,29.31 0,16.2 13.13,29.31 29.33,29.31l0 -29.31z" />
            </Scale>
        </Svg>
    )
}

export default BrightnessIcon

BrightnessIcon.defaultProps = {
    name: 'Brightness icon',
    componentName: 'BrightnessIcon',
    description: 'Icon for brightness settings.',
    tags: [Tag.ICONS, Tag.SL1],

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