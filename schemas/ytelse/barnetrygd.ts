import localeDokument from '../felles/localeDokument'
import { Steg, Ytelse } from '../typer'

export const barnetrygd = () => {
  const barnetrygdLocaleDokument = localeDokument(Ytelse.BARNETRYGD)
  return [
    barnetrygdLocaleDokument(Steg.FORSIDE),
    barnetrygdLocaleDokument(Steg.SEND_ENDRINGER),
    barnetrygdLocaleDokument(Steg.KVITTERING),
    barnetrygdLocaleDokument(Steg.FELLES),
    barnetrygdLocaleDokument(Steg.DOKUMENTASJON),
  ]
}
