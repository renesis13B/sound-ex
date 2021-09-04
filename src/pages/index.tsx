import { InferGetStaticPropsType } from 'next'
import playlistInteractor from '../interactors/api/playlistInteractor'
import TrackIndex from '../components/organisms/presentational/TrackIndex'
import React, { VFC } from 'react'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Index: VFC<Props> = ({ tracks }) => (
  <>
    {tracks && <TrackIndex tracks={tracks} headingMain={'Top 20 Japan'} headingSub={'日本で今一番再生回数が多い曲'} />}
  </>
)

export default Index

export async function getStaticProps() {
  const tracks = await playlistInteractor.getPlaylistTracks()
  return {
    props: { tracks },
  }
}
