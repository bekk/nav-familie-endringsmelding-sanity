//import { WebPreview, JsonView } from './previews'
import { DokumentNavn, dokumentTittel, Steg, stegTittel } from './schemas/typer'
import { Divider, ListItem, ListItemBuilder } from 'sanity/lib/exports/desk'

export const structure = (S: any, context: any) =>
  S.list()
    .title('Endringsdialog')
    .items([
      S.listItem()
        .title('Steg')
        .child(
          S.list()
            .title('Steg')
            .items([
              stegMappe(S, Steg.FORSIDE, [
                documentListItem(S, DokumentNavn.FORSIDE_VEILEDERHILSEN),
              ]),
            ])
        ),
      ...S.documentTypeListItems(),
    ])

const stegMappe = (S: any, steg: Steg, items: (ListItemBuilder | ListItem | Divider)[]) =>
  S.listItem().title(stegTittel[steg]).child(S.list().title(stegTittel[steg]).items(items))

const documentListItem = (S: any, dokumentNavn: DokumentNavn) => {
  return (
    S.listItem()
      .title(dokumentTittel[dokumentNavn])
      //.icon(() => <FileIcon />)
      .child(S.defaultDocument({ documentId: dokumentNavn, schemaType: dokumentNavn }))
  )
}

/*export const defaultDocumentNode = (S: any, {schemaType}: any) => {
    // Conditionally return a different configuration based on the schema type
    if (schemaType === "post") {
        return S.document().views([
            S.view.form(),
            S.view.component(WebPreview).title('Web')
        ])
    }

    return S.document().views([
        S.view.form(),
        S.view.component(JsonView).title('JSON')
    ])
}*/
