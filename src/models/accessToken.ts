export type AcsessTokenId = string

export type AcsessToken = Readonly<{
  access_token: AcsessTokenId
  token_type: 'bearer'
  expires_in: number
}>
