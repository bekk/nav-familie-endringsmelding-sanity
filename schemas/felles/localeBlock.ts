import { CustomSanityTyper, SanityTyper } from '../typer'

const localeBlock = {
  title: 'Localized block',
  name: CustomSanityTyper.LOCALE_BLOCK,
  type: SanityTyper.OBJECT,
  fields: [
    {
      name: 'nb',
      title: 'Bokmål',
      type: CustomSanityTyper.CUSTOM_BLOCK,
      validation: (Rule: any) => Rule.required().error('Du må fylle inn bokmål'),
    },
    {
      name: 'nn',
      title: 'Nynorsk',
      type: CustomSanityTyper.CUSTOM_BLOCK,
      validation: (Rule: any) => Rule.required().error('Du må fylle inn nynorsk'),
    },
    {
      name: 'en',
      title: 'Engelsk',
      type: CustomSanityTyper.CUSTOM_BLOCK,
      validation: (Rule: any) => Rule.required().error('Du må fylle inn engelsk'),
    },
  ],
}

export default localeBlock
