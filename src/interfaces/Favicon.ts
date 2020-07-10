import { Folder, Tags, Theme } from '../config'

export default interface Favicon {
    name?: string,
    componentName?: string,
    description?: string,
    tags?: Tags,

    width?: number,
    height?: number,

    folder?: Folder,

    theme?: Theme,
}