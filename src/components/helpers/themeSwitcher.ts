import { Color, Theme } from '../../config'

export const ThemeSwitcher = (
    theme: Theme | undefined,
    setPrimaryColor: React.Dispatch<React.SetStateAction<String | Color | undefined>>,
    setSecondaryColor: React.Dispatch<React.SetStateAction<String | Color | undefined>>,
    setBackgroundColor: React.Dispatch<React.SetStateAction<String | Color | undefined>>) => {
    switch (theme) {
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
            setBackgroundColor(Color.BLACK)
            break
        case Theme.BLACK:
            setPrimaryColor(Color.BLACK)
            setSecondaryColor(Color.BLACK)
            setBackgroundColor(Color.WHITE)
            break
        case Theme.GRAYSCALE:
            setPrimaryColor(Color.WHITE)
            setSecondaryColor(Color.DARK_GRAY)
            setBackgroundColor(Color.GRAY)
            break
        case Theme.MONOCHROME:
            setPrimaryColor(Color.WHITE)
            setSecondaryColor(Color.WHITE)
            setBackgroundColor(Color.BLACK)
            break
    }
}