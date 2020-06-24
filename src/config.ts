export const Sizes = [12, 16, 24, 32, 48, 64, 72, 96, 120, 240]

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

export enum Tag {
    MK2,
    MK2S,
    MK25,
    MK25S,
    MK3,
    MK3S,
    MINI,
    SL1,
    CW1,
    CONNECT,
    LOCAL,
    ICONS,
    FAVICON
}
export interface Tags extends Array<Tag> { }