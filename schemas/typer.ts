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

export enum DokumentNavn {
  FORSIDE_TITTEL = 'FORSIDE_TITTEL',
  FORSIDE_VEILEDER_TITTEL = 'FORSIDE_VEILEDER_TITTEL',
}

export const dokumentTittel: Record<DokumentNavn, string> = {
  FORSIDE_TITTEL: 'Tittel',
  FORSIDE_VEILEDER_TITTEL: 'Veileder tittel',
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
  KVITTERING = 'KVITTERING',
}

export const stegTittel: Record<Steg, string> = {
  FORSIDE: 'Forside',
  KVITTERING: 'Kvittering',
}

export enum EFlettefelt {
  SØKER_NAVN = 'SØKER_NAVN',
}
