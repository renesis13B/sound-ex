import { ConvertPitchIntoSymbol } from '../utils/convertPitchIntoSymbol'

export type AudioFeature = Readonly<{
  bpm: SpotifyApi.AudioFeaturesObject['tempo'] | '-'
  key: ConvertPitchIntoSymbol | '-'
  // トラックがダンスにどの程度適しているかを示します。0.0の値は最も踊りやすく、1.0は最も踊りやすいです。
  danceability: SpotifyApi.AudioFeaturesObject['danceability']
  // エネルギーは0.0から1.0までの尺度。強度と活動の知覚尺度を表します。
  energy: SpotifyApi.AudioFeaturesObject['energy']
  // トラックの推定全体的な拍子記号
  time_signature: SpotifyApi.AudioFeaturesObject['time_signature']
}>