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

const viewBox: number = 235.3

const InfoIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M117.65 0c-64.97,0 -117.65,52.68 -117.65,117.65 0,64.97 52.68,117.65 117.65,117.65 64.97,0 117.65,-52.68 117.65,-117.65 0,-64.97 -52.68,-117.65 -117.65,-117.65zm0 19.61c54.04,0 98.03,43.99 98.03,98.03 0,54.04 -43.99,98.03 -98.03,98.03 -54.04,0 -98.03,-43.99 -98.03,-98.03 0,-54.04 43.99,-98.03 98.03,-98.03z" />
                <path fill={secondaryColor?.toString()} d="M91.94 94.33l0 19.61 19.58 0 0 58.8 19.61 0 0 -78.4 -39.19 0zm41.64 -29.38c0,6.76 -5.49,12.26 -12.26,12.26 -6.76,0 -12.26,-5.49 -12.26,-12.26 0,-6.76 5.49,-12.26 12.26,-12.26 6.76,0 12.26,5.49 12.26,12.26z" />
            </Scale>
        </Svg>
    )
}

export default InfoIcon

InfoIcon.defaultProps = {
    name: 'Info icon',
    componentName: 'InfoIcon',
    description: 'Universal Info icon for all types of printers.',
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