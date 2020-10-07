import { DefaultPaddingRatio } from '../../lib/config'

export const PaddingSwitcher = (
    withPadding: boolean | undefined,
    viewBox: number,
    viewBoxStart: number,
    setViewBoxStart: React.Dispatch<React.SetStateAction<number>>,
    viewBoxEnd: number,
    setViewBoxEnd: React.Dispatch<React.SetStateAction<number>>) => {
    if (withPadding) {
        const padding: number = viewBox * Math.abs(DefaultPaddingRatio)
        console.log('padding', padding)
        
        setViewBoxStart(viewBoxStart + padding)
        setViewBoxEnd(viewBoxEnd - padding)
    }
}