import React from 'react'

import { rgba } from 'polished'

import { CustomSanityTyper, EFlettefelt, SanityTyper } from '../typer'

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
          {
            name: 'flettefelt',
            type: SanityTyper.OBJECT,
            title: 'Flettefelt',
            blockEditor: {
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
            },
            fields: [
              {
                name: 'flettefeltVerdi',
                type: SanityTyper.STRING,
                title: 'Flettefeltverdier',
                validation: (Rule: any) => Rule.required().error('Du må velge gyldig flettefelt!'),
                options: {
                  list: [{ title: 'Søkers navn', value: EFlettefelt.SØKER_NAVN }],
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
