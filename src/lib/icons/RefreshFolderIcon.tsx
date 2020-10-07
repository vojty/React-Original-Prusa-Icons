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

const viewBox: number = 363.64

const RefreshFolderIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M265.78 199.99c5.5,-2.82 11.59,-4.49 18.18,-4.49 19.84,0 36.42,14.19 40.11,32.94l26.72 -5.43c-6.23,-31.21 -33.74,-54.81 -66.83,-54.81 -13.03,0 -25.13,3.77 -35.48,10.14l-19.04 -23.82 -13.61 68.21 68.2 0 -18.17 -22.74 -0.07 0zm72.7 118.16l-19.04 -23.82c-10.35,6.37 -22.44,10.14 -35.48,10.14 -33.09,0 -60.6,-23.6 -66.83,-54.81l26.72 -5.43c3.69,18.75 20.27,32.94 40.11,32.94 6.59,0 12.74,-1.74 18.17,-4.49l-18.17 -22.74 68.2 0 -13.61 68.21 -0.07 0z" />
                <path fill={primaryColor?.toString()} d="M235.01 318.15l-210.12 0 0 -272.67 95.43 0c23.09,26.5 32.29,40.91 54.52,40.91l150.02 0 0 63.86c-8.47,-4.05 -17.59,-6.88 -27.3,-8.25l0 -28.38 -122.73 0c-31.93,0 -48.22,-18.9 -67.05,-40.91l-55.68 0 0 218.15 153.57 0c7.75,11.08 17.74,20.35 29.32,27.3l0 0 0 -0.01z" />
            </Scale>
        </Svg>
    )
}

export default RefreshFolderIcon

RefreshFolderIcon.defaultProps = {
    name: 'Refresh Folder icon',
    componentName: 'RefreshFolderIcon',
    description: 'Icon for updating content of folder for all types of printers.',
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