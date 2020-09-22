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

const viewBox: number = 307.69

const PrintIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M153.84 0c-84.96,0 -153.84,68.89 -153.84,153.84 0,84.96 68.89,153.84 153.84,153.84 84.96,0 153.84,-68.89 153.84,-153.84 0,-84.96 -68.88,-153.84 -153.84,-153.84zm0 25.65c70.67,0 128.19,57.53 128.19,128.19 0,70.67 -57.53,128.19 -128.19,128.19 -70.67,0 -128.19,-57.53 -128.19,-128.19 0,-70.67 57.53,-128.19 128.19,-128.19z" />
                <path fill={secondaryColor?.toString()} d="M106.81 78.62L106.81 229.06 242.17 156z" />
            </Scale>
        </Svg>
    )
}

export default PrintIcon

PrintIcon.defaultProps = {
    name: 'Print icon',
    componentName: 'PrintIcon',
    description: 'Universal print (play) icon for all types of printers.',
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