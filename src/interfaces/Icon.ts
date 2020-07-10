import { Color, Folder, Tags, Theme } from '../config'

export default interface Icon {
    name?: string,
    componentName?: string,
    description?: string,
    tags?: Tags,
    
    width?: number,
    height?: number,
    
    folder?: Folder,
    
    theme?: Theme,

    withBackground?: boolean,
    backgroundColor?: Color,
    backgroundRounded?: boolean,
    backgroundRadius?: number,
}