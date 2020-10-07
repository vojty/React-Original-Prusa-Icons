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

const QuestionmarkIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M463.23 280.31c-14.71,-14.71 -36.19,-22.66 -61.24,-22.66 -52.09,0 -85.89,36.98 -85.89,94.64l48.12 0c0,-35.4 19.88,-48.12 36.98,-48.12 15.11,0 31.42,9.94 32.6,29.43 1.58,20.28 -9.15,30.61 -23.07,43.74 -33.8,32.22 -34.59,47.72 -34.2,83.11l48.12 0c-0.4,-15.9 0.79,-28.63 22.27,-52.09 16.31,-17.49 36.19,-39.37 36.58,-72.38 0.4,-22.27 -6.76,-40.96 -20.28,-54.88l0.01 -0.79zm-33.41 239.4c0,16.7 -13.52,29.82 -29.82,29.82 -16.31,0 -29.82,-13.51 -29.82,-29.82 0,-16.7 13.52,-29.82 29.82,-29.82 16.7,0 29.82,13.52 29.82,29.82z" />
                <path fill={primaryColor?.toString()} d="M400 112.5c-158.66,0 -287.5,128.84 -287.5,287.5 0,158.66 128.84,287.5 287.5,287.5 158.66,0 287.5,-128.84 287.5,-287.5 0,-158.66 -128.84,-287.5 -287.5,-287.5zm0 47.72c132.02,0 239.38,107.37 239.38,239.38 0,132.02 -107.37,239.38 -239.38,239.38 -132.02,0 -239.38,-107.37 -239.38,-239.38 0,-132.02 107.37,-239.38 239.38,-239.38z" />
            </Scale>
        </Svg>
    )
}

export default QuestionmarkIcon

QuestionmarkIcon.defaultProps = {
    name: 'Questionmark Icon',
    componentName: 'QuestionmarkIcon',
    description: 'Universal questionmark icon.',
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