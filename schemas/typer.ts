import { ReactNode } from 'react'

import { Rule } from '@sanity/types'

export interface DokumentBase {
  title: string
  type: SanityTyper.DOCUMENT
  fields: Field[]
  name: string
  ytelse: Ytelse
}

export interface StegDokument extends DokumentBase {
  steg: Steg
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
}

export const ytelseTittel: Record<Ytelse, string> = {
  BARNETRYGD: 'Barnetrygd',
}

export enum Steg {
  FORSIDE = 'FORSIDE',
}

export const stegTittel: Record<Steg, string> = {
  FORSIDE: 'Forside',
}
