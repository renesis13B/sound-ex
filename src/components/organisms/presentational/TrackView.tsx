import { Track } from '../../../types/track'
import { VFC } from 'react'
import { SearchState } from '../../../contexts/SearchContext'
import TrackSummary from '../../molecules/TrackSummary'
import TrackViewCard from '../../molecules/TrackViewCard'
import TrackInfo from '../../molecules/TrackInfo'
import AvatarLists from '../../molecules/AvatarLists'
import LinkGroup from '../../molecules/LinkGroup'

type Props = {
  track: Track
  searchArtist: () => void
  search: SearchState['search']
}

const TrackView: VFC<Props> = (
  {
    track,
    search,
    searchArtist,
  }) => {
  const linkGroup = {
    href: search ? `/searches?search=${search}` : '/',
    icon: 'BACK' as const,
    text: '前のページに戻る',
  }
  return (
    <article>
      <div className='sm:px-4 sm:mt-8 max-w-screen-md mx-auto'>
        <TrackSummary track={track} searchArtist={searchArtist} />
        <TrackViewCard heading={'Track Info'}>
          <TrackInfo track={track} searchArtist={searchArtist} />
        </TrackViewCard>
        <TrackViewCard heading={'ファンの間で人気'}>
          <AvatarLists relatedArtists={track.related_artists} />
        </TrackViewCard>
        <LinkGroup linkGroup={linkGroup} />
      </div>
    </article>
  )
}

export default TrackView