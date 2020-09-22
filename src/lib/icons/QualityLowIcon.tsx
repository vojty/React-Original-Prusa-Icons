import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { Svg } from 'src/components/helpers/svg'
import { ThemeSwitcherMonoColor } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
}

const viewBox: number = 363.64

const QualityLowIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherMonoColor(props.theme, setPrimaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M363.64 0l-121.21 0 0 121.21 -121.21 0 0 121.21 -121.21 0 0 121.21c121.21,0 242.38,0 363.59,0l0 -363.55 0.05 -0.09z" />
            </Scale>
        </Svg>
    )
}

export default QualityLowIcon

QualityLowIcon.defaultProps = {
    name: 'Quality Low icon',
    componentName: 'QualityLowIcon',
    description: 'Print quality low icon.',
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