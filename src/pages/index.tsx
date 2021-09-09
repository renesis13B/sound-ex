import { InferGetStaticPropsType } from 'next'
import TrackIndex from '../components/organisms/presentational/TrackIndex'
import React, { VFC } from 'react'
import { getPlaylists } from '../interactors/playlists/playlists'
import { getMultipleAudioFeatures } from '../interactors/audioFeatures/audioFeatures'
import integrateToTracks from '../utils/integrateToTracks'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Index: VFC<Props> = ({ tracks }) => (
  <>
    {tracks && <TrackIndex tracks={tracks} headingMain={'Top 20 Japan'} headingSub={'日本で今一番再生回数が多い曲'} />}
  </>
)

export default Index

export async function getStaticProps() {
  const playLists = await getPlaylists()
  const ids = playLists.map(playList => playList.id).join('%2C')
  const audioFeatures = await getMultipleAudioFeatures(ids)
  const tracks = integrateToTracks(playLists, audioFeatures)
  return {
    props: { tracks },
  }
}
