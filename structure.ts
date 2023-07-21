import { Steg, stegTittel, Ytelse, ytelseTittel } from './schemas/typer'
import {
  Divider,
  ListItem,
  ListItemBuilder,
  StructureBuilder,
  StructureContext,
} from 'sanity/lib/exports/desk'

export const structure = (S: StructureBuilder, _context: StructureContext) => {
  const lagYtelsemappe = lagYtelseMappeFunksjon(S)
  const lagStegmappe = lagStegmappeFunksjon(S)

  return S.list()
    .title('Endringsdialog')
    .items([
      lagYtelsemappe(Ytelse.BARNETRYGD, [
        lagStegmappe(Ytelse.BARNETRYGD, Steg.FORSIDE),
        lagStegmappe(Ytelse.BARNETRYGD, Steg.SEND_ENDRINGER),
        lagStegmappe(Ytelse.BARNETRYGD, Steg.KVITTERING),
        lagStegmappe(Ytelse.BARNETRYGD, Steg.FELLES),
        lagStegmappe(Ytelse.BARNETRYGD, Steg.DOKUMENTASJON),
      ]),
      lagYtelsemappe(Ytelse.KONTANTSTOTTE, [
        lagStegmappe(Ytelse.KONTANTSTOTTE, Steg.FORSIDE),
        lagStegmappe(Ytelse.KONTANTSTOTTE, Steg.SEND_ENDRINGER),
        lagStegmappe(Ytelse.KONTANTSTOTTE, Steg.KVITTERING),
        lagStegmappe(Ytelse.KONTANTSTOTTE, Steg.FELLES),
      ]),
    ])
}

const lagStegmappeFunksjon =
  (S: StructureBuilder) =>
  (ytelse: Ytelse, steg: Steg): ListItemBuilder =>
    S.listItem()
      .title(stegTittel[steg])
      .child(S.documentTypeList(`${ytelse}_${steg}`).title(stegTittel[steg]))

const lagYtelseMappeFunksjon =
  (S: StructureBuilder) => (ytelse: Ytelse, items: (ListItemBuilder | ListItem | Divider)[]) =>
    S.listItem()
      .title(ytelseTittel[ytelse])
      .child(S.list().title(ytelseTittel[ytelse]).items(items))
