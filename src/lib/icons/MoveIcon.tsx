import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from '../helpers/scale'
import { Svg } from '../helpers/svg'
import { ThemeSwitcherMonoColor } from '../helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
}

const viewBox: number = 307.69

const MoveIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherMonoColor(props.theme, setPrimaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M177.16 130.54L177.16 60.61 219.11 60.61 153.85 0 88.58 60.61 130.54 60.61 130.54 130.54 60.61 130.54 60.61 88.58 0 153.85 60.61 219.11 60.61 177.16 130.54 177.16 130.54 247.09 88.58 247.09 153.85 307.69 219.11 247.09 177.16 247.09 177.16 177.16 247.09 177.16 247.09 219.11 307.69 153.85 247.09 88.58 247.09 130.54z" />
            </Scale>
        </Svg>
    )
}

export default MoveIcon

MoveIcon.defaultProps = {
    name: 'Move icon',
    componentName: 'MoveIcon',
    description: 'Move icon for Drag&Drop operations.',
    tags: [Tag.ICONS, Tag.MINI, Tag.SL1],

    folder: Folder.ICONS,

    width: 48,
    height: 48,

    theme: Theme.LIGHT,

    primaryColor: Color.DARK_GRAY,

    withBackground: true,
    backgroundColor: Color.WHITE,
    backgroundRounded: true,
    backgroundRadius: (viewBox * DefaultRadiusRatio),
}