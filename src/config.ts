export const Sizes = [12, 16, 24, 32, 48, 64, 72, 96, 120, 240]

export const DefaultSize: number = 48

export enum Color {
    WHITE = '#ffffff',
    BLACK = '#000000',
    ORANGE = '#fa6831',
    SHADOW = '#2b2a29',
    GRAY = '#959595'
}

export enum ColorMode {
    CUSTOM,
    LIGHT,
    DARK,
    GRAYSCALE,
    MONOCHROME
}

export const DefaultColorMode: ColorMode = ColorMode.LIGHT

export enum Folder {
    ICONS = 'icons',
    FAVICONS = 'favicons',
    LOGOS = 'logos',
    SPINNERS = 'spinwers',
    MISC = 'misc'
}

export const DefaultFolder: Folder = Folder.ICONS

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
    FAVICON = 'FAVICON'
}
export interface Tags extends Array<Tag> { }