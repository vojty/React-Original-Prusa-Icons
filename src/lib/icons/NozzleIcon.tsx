import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from '../../components/helpers/scale'
import { Svg } from 'src/components/helpers/svg'
import { ThemeSwitcher } from '../../components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 235.3

const NozzleIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M132.18 115.91c0,51.04 7.82,42.55 -80.26,42.55l0 8.97 146.02 0c8.15,0 14.76,6.61 14.76,14.79l0 38.32c0,8.15 -6.61,14.76 -14.79,14.76l-160.5 0c-19.03,-0.21 -19.02,-29.37 0,-29.58l145.98 0 0 -8.98 -146.02 0c-8.15,0 -14.76,-6.61 -14.76,-14.79l0 -38.3c0,-8.15 6.61,-14.76 14.79,-14.76l65.47 0 0 -12.97 29.32 0z" />
                <path fill={primaryColor?.toString()} d="M184.19 0L184.19 54.4 136.94 115.91 97.86 115.91 50.61 54.4 50.61 0 80.18 0 80.18 44.36 112.12 86.33 122.44 86.33 154.66 44.36 154.66 0z" />
            </Scale>
        </Svg >
    )
}

export default NozzleIcon

NozzleIcon.defaultProps = {
    name: 'Nozzle icon',
    componentName: 'NozzleIcon',
    description: 'FDM or FFF nozzle with extruded filament.',
    tags: [Tag.ICONS, Tag.MINI],

    folder: Folder.ICONS,

    width: 48,
    height: 48,

    theme: Theme.LIGHT,

    primaryColor: Color.DARK_GRAY,
    secondaryColor: Color.ORANGE,

    withBackground: true,
    backgroundColor: Color.TRANSPARENT,
    backgroundRounded: true,
    backgroundRadius: (viewBox * DefaultRadiusRatio),
}

