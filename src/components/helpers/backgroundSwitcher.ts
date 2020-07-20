import { DefaultPaddingRatio } from '../../config'

export const BackgroundSwitcher = (
    withBackground: boolean | undefined,
    viewBoxStart: number,
    setViewBoxStart: React.Dispatch<React.SetStateAction<number>>,
    viewBoxEnd: number,
    setViewBoxEnd: React.Dispatch<React.SetStateAction<number>>) => {
    if (!withBackground) {
        const padding: number = viewBoxEnd * DefaultPaddingRatio
        setViewBoxStart(viewBoxStart + padding)
        setViewBoxEnd(viewBoxEnd - padding)
    }
}