import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { Svg } from 'src/components/helpers/svg'
import { ThemeSwitcherDuoColor } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 571.43

const TimeIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M301.58 285.71L301.58 190.32 269.78 190.32 269.78 317.51 381.04 317.51 381.04 285.71z" />
                <path fill={primaryColor?.toString()} d="M140.5 140.51c37.17,-37.17 88.52,-60.16 145.21,-60.16 56.71,0 108.05,22.99 145.2,60.15 37.17,37.17 60.16,88.52 60.16,145.21 0,56.71 -22.99,108.05 -60.15,145.2 -37.17,37.17 -88.52,60.16 -145.21,60.16 -56.71,0 -108.05,-22.99 -145.2,-60.15 -37.17,-37.17 -60.16,-88.52 -60.16,-145.21 0,-56.71 22.99,-108.05 60.15,-145.2zm261.5 28.84c-29.79,-29.79 -70.93,-48.26 -116.29,-48.26 -45.36,0 -86.49,18.46 -116.29,48.26 -29.79,29.79 -48.25,70.93 -48.25,116.29 0,45.36 18.46,86.5 48.25,116.29 29.79,29.79 70.93,48.25 116.29,48.25 45.36,0 86.5,-18.46 116.29,-48.25 29.79,-29.79 48.25,-70.93 48.25,-116.29 0,-45.35 -18.46,-86.49 -48.25,-116.29z" />
            </Scale>
        </Svg>
    )
}

export default TimeIcon

TimeIcon.defaultProps = {
    name: 'Time icon',
    componentName: 'TimeIcon',
    description: 'Time icon for all types of printers.',
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