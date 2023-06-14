import customBlock from './felles/customBlock'
import { barnetrygd } from './ytelse/barnetrygd'

export const schemaTypes = [customBlock, ...barnetrygd()]
