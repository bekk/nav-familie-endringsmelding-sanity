import customBlock from './felles/customBlock'
import localeBlock from './felles/localeBlock'
import localeBlockForStegDokument from './felles/localeBlockForStegDokument'
import { DokumentNavn, Steg } from './typer'

export const schemaTypes = [
  customBlock,
  localeBlock,
  localeBlockForStegDokument(Steg.FORSIDE, DokumentNavn.FORSIDE_VEILEDERHILSEN),
]
