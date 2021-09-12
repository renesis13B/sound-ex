import { VFC } from 'react'
import AvatarLists from '../presentational/AvatarLists'
import { useQuery } from 'react-query'
import { Track } from '../../../types/track'
import { getRelatedArtists } from '../../../interactors/artists/artists'
import { RelatedArtists } from '../../../types/relatedArtists'

type Props = {
  track: Track
}

const EnhancedAvatarLists: VFC<Props> = ({ track }) => {
  const { data, status } = useQuery<RelatedArtists[]>(
    ['artists', track.artists_id],
    () => getRelatedArtists(track.artists_id),
    { staleTime: Infinity },
  )
  return <AvatarLists relatedArtists={data} fetchStatus={status} />
}

export default EnhancedAvatarLists