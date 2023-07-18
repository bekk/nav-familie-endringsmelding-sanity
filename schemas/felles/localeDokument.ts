import { SanityTyper, StegDokument, Steg, CustomSanityTyper, Ytelse, stegTittel } from '../typer'
import { apiNavnValideringer } from '../../util/valideringer'
import { Rule } from '@sanity/types'

const localeDokument =
  (ytelse: Ytelse) =>
  (steg: Steg): StegDokument => ({
    title: stegTittel[steg],
    name: `${ytelse}_${steg}`,
    type: SanityTyper.DOCUMENT,
    fields: [
      {
        title: 'Visningsnavn',
        name: 'visningsnavn',
        description: '(obligatorisk)',
        type: SanityTyper.STRING,
        validation: (rule: Rule) => rule.required().error('Dokumentet må ha et visningsnavn'),
      },
      {
        title: 'Steg',
        name: 'steg',
        type: SanityTyper.STRING,
        readOnly: true,
      },
      {
        title: 'Ytelse',
        name: 'ytelse',
        type: SanityTyper.STRING,
        readOnly: true,
      },
      {
        title: 'Api navn',
        name: 'api_navn',
        type: SanityTyper.STRING,
        description: 'Teknisk navn. Eksempel borPaRegistrertAdresse (obligatorisk)',
        validation: (rule: Rule) => apiNavnValideringer(rule, ytelse),
      },
      {
        title: 'Bokmål',
        name: 'nb',
        type: CustomSanityTyper.CUSTOM_BLOCK,
        description: '(obligatorisk)',
        validation: (rule: Rule) => rule.required().error('Du må fylle inn bokmål'),
      },
      {
        title: 'Nynorsk',
        name: 'nn',
        type: CustomSanityTyper.CUSTOM_BLOCK,
        description: '(obligatorisk)',
        validation: (rule: Rule) => rule.required().error('Du må fylle inn nynorsk'),
      },
      {
        title: 'Engelsk',
        name: 'en',
        type: CustomSanityTyper.CUSTOM_BLOCK,
        description: '(obligatorisk)',
        validation: (rule: Rule) => rule.required().error('Du må fylle inn engelsk'),
      },
    ],
    initialValue: {
      steg: steg,
      ytelse: ytelse,
    },
  })

export default localeDokument
