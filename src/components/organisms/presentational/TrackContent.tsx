import { Track } from '../../../types/track'
import React, { VFC } from 'react'
import { SearchState } from '../../../contexts/SearchContext'
import TrackSummary from '../../molecules/TrackSummary'
import TrackViewCard from '../../molecules/TrackViewCard'
import TrackInfo from '../../molecules/TrackInfo'
import AvatarLists from '../../molecules/AvatarLists'
import LinkGroup from '../../molecules/LinkGroup'
import { RelatedArtists } from '../../../types/relatedArtists'

type Props = {
  track: Track
  relatedArtists: RelatedArtists[]
  searchArtist: () => void
  search: SearchState['search']
}

const TrackContent: VFC<Props> = (
  {
    track, relatedArtists,
    searchArtist,
  }) => {
  return (
    <article>
      <div className='sm:px-4 sm:mt-8 max-w-screen-md mx-auto'>
        <TrackSummary track={track} searchArtist={searchArtist} />
        <TrackViewCard heading={'Track Info'}>
          <TrackInfo track={track} searchArtist={searchArtist} />
        </TrackViewCard>
        <LinkGroup
          linkUrl={`/searches?search=${track.artistsName}&type=artist`}>
          {`${track.artistsName}の人気曲をもっとみる`}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 inline align-baseline'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
              clipRule='evenodd'
            />
          </svg>
        </LinkGroup>
        <TrackViewCard heading={'ファンの間で人気'}>
          {relatedArtists && <AvatarLists relatedArtists={relatedArtists} />}
        </TrackViewCard>
      </div>
    </article>
  )
}

export default TrackContent