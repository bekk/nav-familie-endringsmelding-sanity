import localeDokument from '../felles/localeDokument'
import { Steg, Ytelse } from '../typer'

export const kontantstøtte = () => {
  const kontantstøtteLocaleDokument = localeDokument(Ytelse.KONTANTSTOTTE)
  return [
    kontantstøtteLocaleDokument(Steg.FORSIDE),
    kontantstøtteLocaleDokument(Steg.SEND_ENDRINGER),
    kontantstøtteLocaleDokument(Steg.KVITTERING),
    kontantstøtteLocaleDokument(Steg.FELLES),
    kontantstøtteLocaleDokument(Steg.DOKUMENTASJON),
  ]
}
