import { ReactNode } from 'react'

import { Rule } from '@sanity/types'

export interface DokumentBase {
  title: string
  type: SanityTyper.DOCUMENT
  name: string
}

type ReadOnlyStegField = FieldBase & {
  type: SanityTyper.STRING
  name: 'steg' | 'ytelse'
  readOnly: true
}

export interface StegDokument extends DokumentBase {
  fields: (Field | ReadOnlyStegField)[]
  initialValue: {
    steg: Steg
    ytelse: Ytelse
  }
}

export type Field = FieldBase &
  (
    | {
        type: SanityTyper.OBJECT
        description?: string
        validation?: (rule: Rule) => Rule | Rule[]
      }
    | {
        description: `${string | undefined}${'(obligatorisk)'}`
        validation: (rule: Rule) => Rule | Rule[]
      }
    | {
        description: `${string | undefined}${'(frivillig)'}`
        validation?: (rule: Rule) => Rule | Rule[]
      }
  )

interface FieldBase {
  name: string
  title: string | ReactNode

  [key: string]: unknown
}

export enum SanityTyper {
  STRING = 'string',
  OBJECT = 'object',
  ARRAY = 'array',
  BLOCK = 'block',
  DOCUMENT = 'document',
}

export enum CustomSanityTyper {
  CUSTOM_BLOCK = 'customBlock',
}

export enum Ytelse {
  BARNETRYGD = 'BARNETRYGD',
  KONTANTSTOTTE = 'KONTANTSTOTTE',
}

export const ytelseTittel: Record<Ytelse, string> = {
  BARNETRYGD: 'Barnetrygd',
  KONTANTSTOTTE: 'Kontantstøtte',
}

export enum Steg {
  FORSIDE = 'FORSIDE',
  SEND_ENDRINGER = 'SEND_ENDRINGER',
  KVITTERING = 'KVITTERING',
  FELLES = 'FELLES',
}

export const stegTittel: Record<Steg, string> = {
  FORSIDE: 'Forside',
  SEND_ENDRINGER: 'Send endringer',
  KVITTERING: 'Kvittering',
  FELLES: 'Felles',
}

export enum EFlettefelt {
  SØKER_NAVN = 'SØKER_NAVN',
  MOTTATT_DATO = 'MOTATT_DATO',
}
