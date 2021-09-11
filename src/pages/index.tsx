import { InferGetStaticPropsType } from 'next'
import React, { VFC } from 'react'
import { getPlaylists } from '../interactors/playlists/playlists'
import { getMultipleAudioFeatures } from '../interactors/audioFeatures/audioFeatures'
import integrateToTracks from '../utils/integrateToTracks'
import { Heading } from '../components/atoms/Heading'
import TrackCardLists from '../components/organisms/presentational/TrackCardLists'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Index: VFC<Props> = ({ tracks }) => (
  <section className='mt-8 px-4 sm:px-0'>
    {tracks && (
      <>
        <Heading headingMain={'Top 20 Japan'} headingSub={'日本で今一番再生回数が多い曲'} />
        <TrackCardLists tracks={tracks} />
      </>
    )}
  </section>
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
