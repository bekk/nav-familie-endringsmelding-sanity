import { Rule } from '@sanity/types'
import groq from 'groq'

import { SanityTyper } from '../schemas/typer'
import { ValidationContext } from 'sanity'

const førsteTegnErLitenBokstav = (tekst: string): true | string =>
  RegExp(/^[a-zæøå].*/).test(tekst)
    ? true
    : 'Første tegn i feltet kan ikke være tall eller stor bokstav.'

const kunBokstaverOgTallUtenÆØÅ = (tekst: string): true | string =>
  RegExp(/^[a-z0-9]+$/i).test(tekst)
    ? true
    : 'Feltet kan kun bestå av tall eller boksaver (ikke æ, ø, å).'

const API_NAME_MAX_LENGTH = 70

export const maskinnavnValideringer = (rule: Rule) => [
  rule.required().error('Feltet må settes'),
  rule.required().custom(kunBokstaverOgTallUtenÆØÅ),
  rule.required().custom(førsteTegnErLitenBokstav),
  rule
    .required()
    .max(API_NAME_MAX_LENGTH)
    .error(`Feltet kan være på maksimalt ${API_NAME_MAX_LENGTH} tegn.`),
]

export const apiNavnValideringer = (rule: Rule): Rule[] => [
  ...maskinnavnValideringer(rule),
  rule.custom(async (value: string, context) => {
    if (value === undefined) return true
    const erUnik = await erUniktApiNavn(value, context)
    if (!erUnik) return 'Apinavnet er ikke unikt.'
    return true
  }),
]

const erUniktApiNavn = (apiNavn: string, context: ValidationContext) => {
  const { document, getClient } = context

  const id = document?._id.replace(/^drafts\./, '')

  const params = {
    draft: `drafts.${id}`,
    published: id,
    type: SanityTyper.DOCUMENT,
    apiNavn,
  }

  const query = groq`!defined(*[
    !(_id in [$draft, $published]) &&
    api_navn == $apiNavn
  ][0]._id)`

  return getClient({ apiVersion: '2022-07-04' }).fetch(query, params)
}
