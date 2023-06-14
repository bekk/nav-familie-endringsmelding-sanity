import React from 'react'

import { CustomSanityTyper, SanityTyper } from '../typer'

const customBlock = {
  title: 'Custom block',
  name: CustomSanityTyper.CUSTOM_BLOCK,
  type: SanityTyper.ARRAY,
  of: [
    {
      type: SanityTyper.BLOCK,
      marks: {
        annotations: [
          {
            name: 'link',
            type: SanityTyper.OBJECT,
            title: 'Ekstern lenke',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                title: 'Åpne i ny tab',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              },
            ],
          },
        ],
      },
    },
  ],
}

export default customBlock
