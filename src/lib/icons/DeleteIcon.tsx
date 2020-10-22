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

const viewBox: number = 800

const DeleteIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M518.59 310.05c0,-16.67 -13.81,-30.5 -30.5,-30.5 -16.67,0 -30.5,13.81 -30.5,30.5l0 270.21c0,16.67 13.81,30.5 30.5,30.5 16.67,0 30.5,-13.81 30.5,-30.5l0 -270.21zm-179.74 0c0,-16.67 -13.81,-30.5 -30.5,-30.5 -16.67,0 -30.5,13.81 -30.5,30.5l0 270.21c0,16.67 13.81,30.5 30.5,30.5 16.67,0 30.5,-13.81 30.5,-30.5l0 -270.21z" />
                <path fill={primaryColor?.toString()} d="M608.9 760l-419.46 0c-33.36,0 -59.97,-26.45 -59.97,-59.97l0 -509.76 -29.48 0 0 -59.98 179.74 0 0 -45.14c0,-24.6 20.55,-45.14 45.14,-45.14l150.26 0c24.59,0 45.14,19.72 45.14,45.14l0 45.14 179.74 0 0 59.98 -29.48 0 0 509.76c0,33.35 -26.45,59.97 -59.97,59.97l0 0 -2.02 0 0.36 0zm-150.27 -660.02l-119.78 0 0 30.33 119.78 0 0 -30.33zm150.27 90.28l-419.46 0 0 495.09c0,7.93 6.91,14.67 14.66,14.67l389.98 0c7.93,0 14.67,-6.91 14.67,-14.67l0 -495.09 0 0 0.15 0z" />
            </Scale>
        </Svg>
    )
}

export default DeleteIcon

DeleteIcon.defaultProps = {
    name: 'Delete icon',
    componentName: 'DeleteIcon',
    description: 'Trash icon for delete action.',
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