export const Sizes = [12, 16, 24, 32, 48, 64, 72, 96, 120, 240]

export const DefaultSize: number = 120

export const DefaultRadiusRatio: number = 0.07

export const DefaultPaddingRatio: number = 0.15

export enum Color {
    TRANSPARENT = 'none',
    WHITE = '#ffffff',
    BLACK = '#000000',
    ORANGE = '#fa6831',
    SHADOW = '#2b2a29',
    GRAY = '#5B5B5B',
    DARK_GRAY = '#313131',
}

export enum Theme {
    CUSTOM,
    LIGHT,
    DARK,
    WHITE,
    BLACK,
    GRAYSCALE,
    MONOCHROME,
}

export const DefaultTheme: Theme = Theme.LIGHT

export enum Folder {
    ICONS = 'icons',
    FAVICONS = 'favicons',
    LOGOS = 'logos',
    SPINNERS = 'spinners',
    MISC = 'misc',
}

export const DefaultFolder: Folder = Folder.ICONS

export interface Folders extends Array<Folder> { }

export enum Tag {
    MK2 = 'MK2',
    MK2S = 'MK2S',
    MK25 = 'MK25',
    MK25S = 'MK25S',
    MK3 = 'MK3',
    MK3S = 'MK3S',
    MINI = 'MINI',
    SL1 = 'SL1',
    CW1 = 'CW1',
    CONNECT = 'CONNECT',
    LOCAL = 'LOCAL',
    ICONS = 'ICONS',
    FAVICON = 'FAVICON',
    OUTLINE = 'OUTLINE'
}

export interface Tags extends Array<Tag> { }