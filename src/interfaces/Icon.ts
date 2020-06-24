import { Folder, Tags } from '../config'

export default interface Icon {
    name?: string,
    componentName?: string,
    description?: string,
    tags?: Tags,
    
    width?: number,
    height?: number,
    
    folder?: Folder
}