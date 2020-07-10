import { Color, Folder, Tag, Theme, DefaultRadiusRatio} from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 288.76

const NozzleIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)
    
    useEffect(() => {
        switch (props.theme) {
            case Theme.CUSTOM:
                break
            case Theme.LIGHT:
                setPrimaryColor(Color.DARK_GRAY)
                setSecondaryColor(Color.ORANGE)
                setBackgroundColor(Color.WHITE)
                break
            case Theme.DARK:
                setPrimaryColor(Color.WHITE)
                setSecondaryColor(Color.ORANGE)
                setBackgroundColor(Color.GRAY)
                break
            case Theme.WHITE:
                setPrimaryColor(Color.WHITE)
                setSecondaryColor(Color.WHITE)
                setBackgroundColor(Color.TRANSPARENT)
                break
            case Theme.BLACK:
                setPrimaryColor(Color.BLACK)
                setSecondaryColor(Color.BLACK)
                setBackgroundColor(Color.TRANSPARENT)
                break
            case Theme.GRAYSCALE:
                setPrimaryColor(Color.WHITE)
                setSecondaryColor(Color.DARK_GRAY)
                setBackgroundColor(Color.GRAY)
                break
            case Theme.MONOCHROME:
                setPrimaryColor(Color.WHITE)
                setSecondaryColor(Color.WHITE)
                setBackgroundColor(Color.GRAY)
                break
        }
    }, [props.theme]) // eslint-disable-line

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox={`0 0 ${viewBox} ${viewBox}`}>
            {props.withBackground && <rect fill={backgroundColor?.toString()} width="288.76" height="288.76" rx={props.backgroundRounded ? props.backgroundRadius : 0} ry={props.backgroundRounded ? props.backgroundRadius : 0} />}
            <path fill={secondaryColor?.toString()} d="M154.43 143.15l0 20.11c0,0 0,0.01 0,0.02 0,5.54 -4.5,10.04 -10.04,10.04 -0,0 -0,0 -0.01,0l-44.54 0 0 6.1 99.3 0c0,-0 0.01,-0 0.02,-0 5.54,0 10.04,4.5 10.04,10.04 0,0.01 0,0.01 0,0.02l0 26.04c0,0 0,0.01 0,0.02 0,5.54 -4.5,10.04 -10.04,10.04 -0.01,0 -0.01,0 -0.02,0l-109.17 0c-5.47,-0.12 -9.84,-4.59 -9.84,-10.06 0,-5.47 4.38,-9.94 9.84,-10.06l99.29 0 0 -6.11 -99.3 0c-0,-0 -0.01,-0 -0.02,-0 -5.54,0 -10.04,-4.5 -10.04,-10.04 0,-0.01 0,-0.01 0,-0.02l-0 -26.04c0,-0 0,-0.01 0,-0.01 0,-5.54 4.5,-10.04 10.04,-10.04 0.01,0 0.01,0 0.02,0l44.53 0 0 -10.06 20.11 0 -0.18 0z" />
            <path fill={primaryColor?.toString()} d="M189.81 65.54L189.81 102.54 157.67 144.38 131.09 144.38 98.95 102.54 98.95 65.54 119.06 65.54 119.06 95.71 140.79 124.26 147.81 124.26 169.72 95.71 169.72 65.54z" />
        </svg>
    )
}

export default NozzleIcon

NozzleIcon.defaultProps = {
    name: 'Nozzle icon',
    componentName: 'NozzleIcon',
    description: '',
    tags: [Tag.ICONS, Tag.MINI],

    folder: Folder.ICONS,

    width: 48,
    height: 48,

    theme: Theme.LIGHT,

    primaryColor: Color.DARK_GRAY,
    secondaryColor: Color.ORANGE,

    withBackground: false,
    backgroundColor: Color.WHITE,
    backgroundRounded: true,
    backgroundRadius: (viewBox * DefaultRadiusRatio),
}