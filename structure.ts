import { Steg, stegTittel, Ytelse, ytelseTittel } from './schemas/typer'
import {
  Divider,
  ListItem,
  ListItemBuilder,
  StructureBuilder,
  StructureContext,
} from 'sanity/lib/exports/desk'

export const structure = (S: StructureBuilder, _context: StructureContext) => {
  const ytelseMappe = genererYtelseMappe(S)
  const stegMappe = genererStegMappe(S)

  return S.list()
    .title('Endringsdialog')
    .items([ytelseMappe(Ytelse.BARNETRYGD, [stegMappe(Ytelse.BARNETRYGD, Steg.FORSIDE)])])
}

const genererStegMappe =
  (S: StructureBuilder) =>
  (ytelse: Ytelse, steg: Steg): ListItemBuilder =>
    S.listItem()
      .title(stegTittel[steg])
      .child(S.documentTypeList(`${ytelse}_${steg}`).title(stegTittel[steg]))

const genererYtelseMappe =
  (S: StructureBuilder) => (ytelse: Ytelse, items: (ListItemBuilder | ListItem | Divider)[]) =>
    S.listItem()
      .title(ytelseTittel[ytelse])
      .child(S.list().title(ytelseTittel[ytelse]).items(items))
