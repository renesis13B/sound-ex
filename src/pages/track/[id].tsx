import { GetStaticPaths, GetStaticProps } from 'next'
import { VFC } from 'react'
import { Track } from '../../types/track'
import { getRelatedArtists } from '../../interactors/artists/artists'
import { RelatedArtists } from '../../types/relatedArtists'
import { getPlaylistIds } from '../../interactors/playlists/playlists'
import { getSingleAudioFeature } from '../../interactors/audioFeatures/audioFeatures'
import { getTracks } from '../../interactors/tracks/tracks'
import { useRouter } from 'next/router'
import useSearchStore from '../../hocks/useSearchStore'
import TrackContent from '../../components/organisms/presentational/TrackContent'
import Error from 'next/error'

type Props = {
  track: Track
  relatedArtists: RelatedArtists[]
  errorCode?: number
}

const TrackView: VFC<Props> = ({ track, relatedArtists, errorCode }) => {
  const router = useRouter()
  const { submitHandler } = useSearchStore()

  // NOTE: カスタムエラーページを作成したい
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  return (
    <>
      {(!router.isFallback && track)
      && <TrackContent
        track={track}
        relatedArtists={relatedArtists}
        submitHandler={submitHandler}
      />}
    </>
  )
}


export default TrackView

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPlaylistIds()
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const track = await getTracks(params?.id as string)
    const audioFeature = await getSingleAudioFeature(params?.id as string)
    const relatedArtists = await getRelatedArtists(track.artists_id)
    return {
      props: {
        track: { ...track, ...audioFeature },
        relatedArtists,
      },
    }
  } catch (error) {
    return { props: { errorCode: error.response.status } }
  }

}