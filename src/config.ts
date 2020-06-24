export const Sizes = [12, 16, 24, 32, 48, 64, 72, 96, 120, 240]

export const DefaultSize: number = 48

export enum Color {
    WHITE = '#ffffff',
    BLACK = '#ec691f',
    ORANGE = '#fa6831',
    SHADOW = '#2b2a29'
}

export enum ColorMode {
    NONE,
    LIGHT,
    DARK,
    GRAYSCALE,
    MONOCHROME
}

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