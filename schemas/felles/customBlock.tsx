import React from 'react'

import { CustomSanityTyper, SanityTyper, EFlettefelt } from '../typer'
import { rgba } from 'polished'
import { Rule } from '@sanity/types'

const customBlock = {
  title: 'Custom block',
  name: CustomSanityTyper.CUSTOM_BLOCK,
  type: SanityTyper.ARRAY,
  of: [
    {
      type: SanityTyper.BLOCK,
      styles: [],
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
          {
            name: 'flettefelt',
            type: SanityTyper.OBJECT,
            title: 'Flettefelt',
            icon: () => <span>F</span>,
            render: (props: any) => (
              <span
                style={{
                  backgroundColor: rgba(30, 133, 209, 0.2),
                  color: 'black',
                  cursor: 'pointer',
                }}
              >
                {props.flettefeltVerdi ? props.flettefeltVerdi : 'VELG FLETTEFELT'}
              </span>
            ),
            fields: [
              {
                name: 'flettefeltVerdi',
                type: SanityTyper.STRING,
                title: 'Flettefeltverdier',
                validation: (rule: Rule) =>
                  rule.required().error('Du må velge et gyldig flettefelt!'),
                options: {
                  list: [
                    { title: 'Søkers navn', value: EFlettefelt.SØKER_NAVN },
                    { title: 'Innsendt tid', value: EFlettefelt.INNSENDT_TID },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  ],
}

export default customBlock
