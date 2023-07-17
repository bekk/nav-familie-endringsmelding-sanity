import customBlock from './felles/customBlock'
import { barnetrygd } from './ytelse/barnetrygd'
import { kontantstøtte } from './ytelse/kontantstøtte'

export const schemaTypes = [customBlock, ...barnetrygd(), ...kontantstøtte()]
