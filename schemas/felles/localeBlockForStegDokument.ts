import {
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  StegDokument,
  Steg,
  CustomSanityTyper,
} from '../typer'

const localeBlockForStegDokument = (steg: Steg, dokumentNavn: DokumentNavn): StegDokument => ({
  steg: steg,
  title: dokumentTittel[dokumentNavn],
  name: dokumentNavn,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Bokmål',
      name: 'nb',
      type: CustomSanityTyper.CUSTOM_BLOCK,
      description: '(obligatorisk)',
      validation: (Rule) => Rule.required().error('Du må fylle inn bokmål'),
    },
    {
      title: 'Nynorsk',
      name: 'nn',
      type: CustomSanityTyper.CUSTOM_BLOCK,
      description: '(obligatorisk)',
      validation: (Rule) => Rule.required().error('Du må fylle inn nynorsk'),
    },
    {
      title: 'Engelsk',
      name: 'en',
      type: CustomSanityTyper.CUSTOM_BLOCK,
      description: '(obligatorisk)',
      validation: (Rule) => Rule.required().error('Du må fylle inn engelsk'),
    },
  ],
})

export default localeBlockForStegDokument
