import localeDokument from '../felles/localeDokument'
import { DokumentNavn, Steg, Ytelse } from '../typer'

export const forside = () => {
  const genererDokument = localeDokument(Ytelse.BARNETRYGD, Steg.FORSIDE)
  return [
    genererDokument(DokumentNavn.FORSIDE_TITTEL),
    genererDokument(DokumentNavn.FORSIDE_VEILEDER_TITTEL),
  ]
}
