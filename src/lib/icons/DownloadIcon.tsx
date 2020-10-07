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

const DownloadIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M266.67 433.34L366.66 433.34 366.66 300.01 433.34 299.99 433.34 433.32 533.33 433.34 400 566.66z" />
                <path fill={primaryColor?.toString()} d="M400 99.99c-133.53,0 -242.23,104.71 -249.3,236.4 -85.67,15.43 -150.7,90.2 -150.7,180.27 0,101.23 82.1,183.33 183.33,183.33l433.34 0.02c101.23,0 183.33,-82.1 183.33,-183.33 0,-90.07 -65.03,-164.84 -150.7,-180.27 -7.07,-131.7 -115.76,-236.4 -249.3,-236.4l0 -0.02zm0 66.67c115.1,0 196.37,93.23 185.56,226 58.16,-1.54 147.76,25.03 147.76,124.01 0,64.32 -52.33,116.66 -116.66,116.66l-433.34 0c-64.33,0 -116.66,-52.34 -116.66,-116.66 0,-93.23 82.63,-127.76 147.76,-124.01 -5.57,-140.6 73.6,-226 185.56,-226z" />
            </Scale>
        </Svg>
    )
}

export default DownloadIcon

DownloadIcon.defaultProps = {
    name: 'Download icon',
    componentName: 'DownloadIcon',
    description: 'Icon for downloading files from internet.',
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