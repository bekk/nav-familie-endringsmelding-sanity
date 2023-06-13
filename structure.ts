//import { WebPreview, JsonView } from './previews'
import { DokumentNavn, dokumentTittel, Steg, stegTittel } from './schemas/typer'
import { Divider, ListItem, ListItemBuilder, StructureBuilder } from 'sanity/lib/exports/desk'
import FileIcon from './ikoner/FileIcon'

export const structure = (S: StructureBuilder, context: any) => {
  const mappe = genererMappe(S)
  const dokument = genererDokument(S)

  return S.list()
    .title('Endringsdialog')
    .items([
      mappe({
        mappenavn: 'Barnetrygd',
        items: [
          mappe({
            mappenavn: stegTittel[Steg.FORSIDE],
            items: [
              dokument(DokumentNavn.FORSIDE_TITTEL),
              dokument(DokumentNavn.FORSIDE_VEILEDER_TITTEL),
            ],
          }),
        ],
      }),
      mappe({ mappenavn: 'Kontantstøtte', items: [] }),
    ])
}

const genererMappe =
  (S: StructureBuilder) =>
  ({ mappenavn, items }: { mappenavn: string; items: (ListItemBuilder | ListItem | Divider)[] }) =>
    S.listItem().title(mappenavn).child(S.list().title(mappenavn).items(items))

const genererDokument = (S: StructureBuilder) => (dokumentNavn: DokumentNavn) =>
  S.listItem()
    .title(dokumentTittel[dokumentNavn])
    .child(S.defaultDocument({ documentId: dokumentNavn, schemaType: dokumentNavn }))
    .icon(FileIcon)
