import { Track } from '../../../types/track'
import React, { VFC } from 'react'
import { SearchState } from '../../../contexts/SearchContext'
import TrackSummary from '../../molecules/TrackSummary'
import TrackViewCard from '../../molecules/TrackViewCard'
import TrackInfo from '../../molecules/TrackInfo'
import AvatarLists from '../../molecules/AvatarLists'
import LinkGroup from '../../molecules/LinkGroup'
import { Icons } from '../../atoms/Icons'

type Props = {
  track: Track
  searchArtist: () => void
  search: SearchState['search']
  searchType: SearchState['searchType']
}

const TrackView: VFC<Props> = (
  {
    track,
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
          <Icons icon={'LINK'} />
        </LinkGroup>
        <TrackViewCard heading={'ファンの間で人気'}>
          <AvatarLists relatedArtists={track.related_artists} />
        </TrackViewCard>
      </div>
    </article>
  )
}

export default TrackView