import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { ThemeSwitcher } from '../../components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 800.1

const SpoolIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox={`${0} ${0} ${viewBox} ${viewBox}`}>
            {props.withBackground && <rect fill={backgroundColor?.toString()} width={viewBox} height={viewBox} rx={props.backgroundRounded ? props.backgroundRadius : 0} ry={props.backgroundRounded ? props.backgroundRadius : 0} />}
            <Scale withPadding={props.withPadding} width={props.width} height={props.height} viewBox={viewBox}>
                <path fill={primaryColor?.toString()} d="M400.06 0.03c-220.95,0 -400.05,179.11 -400.05,400.05 0,74.12 20.16,143.52 55.31,203.03l0 -203.03 0 -0.82c0.45,-190.01 154.63,-343.92 344.71,-343.92 306.15,0 460.4,371.88 243.77,588.51 -164.4,164.44 -418.21,115.17 -531.04,-51.99l0 86.59c72.71,75.02 174.55,121.65 287.27,121.65 220.95,0 400.05,-179.11 400.05,-400.05 0,-220.94 -179.11,-400.05 -400.05,-400.05l0.04 0.04zm105.88 294.17c-94.04,-94.08 -255.57,-27.14 -255.57,105.88 0,132.98 161.53,199.96 255.57,105.88 58.45,-58.48 58.48,-153.28 0,-211.73l0 -0.04zm-105.88 -1.86c-59.48,0 -107.71,48.23 -107.71,107.71 0,59.48 48.23,107.71 107.71,107.71 59.48,0 107.71,-48.23 107.71,-107.71 0,-59.48 -48.23,-107.71 -107.71,-107.71z" />
                <path fill={secondaryColor?.toString()} d="M400.06 55.34c306.15,0 460.4,371.88 243.77,588.51 -164.4,164.44 -418.21,115.17 -531.03,-51.99l0 177.52c0,15.88 -12.88,28.73 -28.73,28.73 -15.88,0 -28.72,-12.88 -28.72,-28.73l0 -369.29 0 -0.83c0.45,-190.01 154.63,-343.91 344.71,-343.91l0.01 -0.01zm105.88 238.86c-94.04,-94.08 -255.57,-27.14 -255.57,105.88 0,132.98 161.53,199.96 255.57,105.88 58.45,-58.48 58.48,-153.28 0,-211.73l0 -0.04z" />
            </Scale>
        </svg>
    )
}

export default SpoolIcon

SpoolIcon.defaultProps = {
    name: 'Spool icon',
    componentName: 'SpoolIcon',
    description: 'Filament spool icon.',
    tags: [Tag.ICONS, Tag.MINI],

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

