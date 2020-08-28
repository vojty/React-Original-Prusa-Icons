import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from '../../components/helpers/scale'
import { ThemeSwitcher } from '../../components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 800.05

const PreheatIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground]) // eslint-disable-line

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox={`${0} ${0} ${viewBox} ${viewBox}`}>
            {props.withBackground && <rect fill={backgroundColor?.toString()} width={viewBox} height={viewBox} rx={props.backgroundRounded ? props.backgroundRadius : 0} ry={props.backgroundRounded ? props.backgroundRadius : 0} />}
            <Scale withPadding={props.withPadding} width={props.width} height={props.height} viewBox={viewBox}>
                <path fill={secondaryColor?.toString()} d="M294.23 629.35c-43.53,-42.97 -49.04,-68.32 -11.02,-117.36 13.23,-17.08 19.29,-34.16 19.29,-50.69 0,-34.71 -25.35,-68.87 -58.41,-108.55l-52.34 49.59c49.59,57.86 45.19,63.92 9.37,114.61 -11.57,16.53 -15.98,32.51 -15.98,49.04 0,41.88 31.41,81.55 60.06,111.3l49.59 -47.94 -0.55 0zm313.51 0c-43.53,-42.97 -49.04,-68.32 -11.02,-117.36 13.22,-17.08 19.29,-34.16 19.29,-50.69 0,-34.71 -25.35,-68.87 -58.4,-108.55l-52.34 49.59c49.59,57.86 45.18,63.92 9.36,114.61 -11.57,16.53 -15.98,32.51 -15.98,49.04 0,41.88 31.41,81.55 60.06,111.3l49.59 -47.94 -0.55 0zm-158.69 0c-43.53,-42.97 -49.04,-68.32 -11.02,-117.36 13.22,-17.08 19.29,-34.16 19.29,-50.69 0,-34.71 -25.35,-68.87 -58.41,-108.55l-52.34 49.59c49.59,57.86 45.18,63.92 9.37,114.61 -11.57,16.53 -15.98,32.51 -15.98,49.04 0,41.88 31.41,81.55 60.06,111.3l49.59 -47.94 -0.55 0z" />
                <path fill={primaryColor?.toString()} fillRule="nonzero" d="M580.63 -0l0 135.21 -117.5 152.96 -97.15 0 -117.48 -152.96 0 -135.21 73.5 0 0 110.27 79.44 104.37 25.59 0 80.08 -104.37 0 -110.27 73.52 0zm-458.3 723.47l555.41 0 0 76.58 -555.41 0 0 -76.58z" />
            </Scale>
        </svg>
    )
}

export default PreheatIcon

PreheatIcon.defaultProps = {
    name: 'Preheat icon',
    componentName: 'PreheatIcon',
    description: 'Preheating nozzle and heated bed.',
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

