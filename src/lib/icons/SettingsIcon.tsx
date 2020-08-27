import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import { BackgroundSwitcher } from 'src/components/helpers/backgroundSwitcher'
import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { ThemeSwitcher } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 363.65

const SettingsIcon = (props: IProps) => {
    const [viewBoxStart, setViewBoxStart] = useState<number>(0)
    const [viewBoxEnd, setViewBoxEnd] = useState<number>(viewBox)
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
        BackgroundSwitcher(props.withBackground, viewBoxStart, setViewBoxStart, viewBoxEnd, setViewBoxEnd)
    }, [props.theme]) // eslint-disable-line

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox={`${viewBoxStart} ${viewBoxStart} ${viewBoxEnd} ${viewBoxEnd}`}>
            {props.withBackground && <rect fill={backgroundColor?.toString()} width={viewBoxEnd} height={viewBoxEnd} rx={props.backgroundRounded ? props.backgroundRadius : 0} ry={props.backgroundRounded ? props.backgroundRadius : 0} />}
            <Scale withBackground={props.withBackground}>
                <path fill={secondaryColor?.toString()} d="M181.82 137.15c-24.66,0 -44.68,20.02 -44.68,44.68 0,24.67 20.02,44.67 44.68,44.67 24.66,0 44.67,-20.02 44.67,-44.67 0,-24.66 -20.02,-44.68 -44.67,-44.68zm0 17.9c14.76,0 26.78,12.03 26.78,26.78 0,14.76 -12.03,26.78 -26.78,26.78 -14.76,0 -26.78,-12.03 -26.78,-26.78 0,-14.76 12.03,-26.78 26.78,-26.78z" />
                <path fill={primaryColor?.toString()} d="M293.61 202.19l0 -40.74c-20.06,-7.19 -25.43,-7.5 -28.18,-14.25 -2.84,-6.76 0.74,-10.87 9.93,-30.09l-28.82 -28.82c-18.89,8.98 -23.23,12.68 -30.09,9.93 -6.76,-2.84 -7.19,-8.24 -14.25,-28.18l-40.74 0c-7.07,19.96 -7.5,25.43 -14.25,28.18 -6.97,2.96 -11.2,-0.95 -30.09,-9.93l-28.82 28.82c9.07,19.1 12.68,23.24 9.93,30.09 -2.84,6.76 -8.24,7.07 -28.18,14.25l0 40.74c19.96,7.07 25.43,7.5 28.18,14.25 2.84,6.85 -0.74,10.87 -9.93,30.09l28.82 28.82c18.7,-8.86 23.02,-12.77 30.09,-9.93 6.76,2.84 7.07,8.24 14.25,28.18l40.74 0c7.07,-19.84 7.5,-25.34 14.35,-28.3 6.97,-2.84 11.08,0.95 29.99,9.93l28.82 -28.82c-9.07,-19.1 -12.68,-23.23 -9.93,-30.09 2.84,-6.76 8.24,-7.07 28.18,-14.25l0 0 0 0.1 0 0.02zm-45.49 7.17c-5.37,12.99 -0.64,22.9 4.54,33.36l-10.13 10.15c-10.24,-5.06 -20.16,-10.03 -33.36,-4.54 -12.99,5.37 -16.69,15.74 -20.37,26.82l-14.25 0c-3.7,-11.08 -7.38,-21.42 -20.37,-26.82 -13.2,-5.49 -23.33,-0.43 -33.36,4.54l-10.15 -10.15c5.18,-10.46 9.93,-20.37 4.54,-33.36 -5.37,-12.99 -15.74,-16.69 -26.82,-20.37l0 -14.25c11.08,-3.7 21.42,-7.38 26.82,-20.37 5.38,-12.99 0.64,-22.9 -4.54,-33.36l10.15 -10.13c10.13,4.96 20.16,10.03 33.36,4.54 12.99,-5.37 16.67,-15.74 20.37,-26.82l14.25 0c3.7,11.08 7.38,21.42 20.37,26.82 13.2,5.49 23.33,0.43 33.36,-4.54l10.13 10.13c-5.18,10.46 -9.93,20.37 -4.54,33.36 5.37,12.99 15.74,16.69 26.82,20.37l0 14.25c-11.08,3.7 -21.42,7.38 -26.82,20.37l0 0z" />
            </Scale>
        </svg>
    )
}

export default SettingsIcon

SettingsIcon.defaultProps = {
    name: 'Settings icon',
    componentName: 'SettingsIcon',
    description: 'Universal settings icon for all types of printers.',
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