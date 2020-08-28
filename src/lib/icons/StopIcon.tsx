import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { Svg } from 'src/components/helpers/svg'
import { ThemeSwitcher } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 571.4

const StopIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M285.7 0c-157.78,0 -285.7,127.93 -285.7,285.7 0,157.78 127.93,285.7 285.7,285.7 157.78,0 285.7,-127.93 285.7,-285.7 0,-157.78 -127.92,-285.7 -285.7,-285.7zm0 47.63c131.23,0 238.07,106.84 238.07,238.07 0,131.23 -106.84,238.07 -238.07,238.07 -131.23,0 -238.07,-106.84 -238.07,-238.07 0,-131.23 106.84,-238.07 238.07,-238.07z" />
                <path fill={secondaryColor?.toString()} d="M166.67 166.66L404.75 166.66 404.75 404.73 166.67 404.73z" />
            </Scale>
        </Svg>
    )
}

export default StopIcon

StopIcon.defaultProps = {
    name: 'Stop icon',
    componentName: 'StopIcon',
    description: 'Universal Stop icon for all types of printers.',
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