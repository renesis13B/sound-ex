import { Track } from '../../../types/track'
import React, { VFC } from 'react'
import TrackSummary from '../../molecules/TrackSummary'
import TrackViewCard from '../../molecules/TrackViewCard'
import TrackInfo from '../../molecules/TrackInfo'
import AvatarLists from '../../molecules/AvatarLists'
import LinkGroup from '../../molecules/LinkGroup'
import { RelatedArtists } from '../../../types/relatedArtists'
import { SearchSubmitHandler } from '../../../hocks/useSearchStore'
import { LinkIcon } from '@heroicons/react/outline'

type Props = {
  track: Track
  relatedArtists: RelatedArtists[]
  submitHandler: SearchSubmitHandler
}

const TrackContent: VFC<Props> = (
  {
    track,
    relatedArtists,
    submitHandler,
  }) => {
  return (
    <article>
      <div className='sm:px-4 sm:mt-8 max-w-screen-md mx-auto'>
        <TrackSummary track={track} submitHandler={submitHandler} />
        <TrackViewCard heading={'Track Info'}>
          <TrackInfo track={track} submitHandler={submitHandler} />
        </TrackViewCard>
        <LinkGroup
          linkUrl={`/searches?search=${track.artistsName}&type=artist`}>
          {`${track.artistsName}の人気曲をもっとみる`}
          <LinkIcon className='h-4 w-4 inline align-baseline' />
        </LinkGroup>
        <TrackViewCard heading={'ファンの間で人気'}>
          {relatedArtists && <AvatarLists relatedArtists={relatedArtists} />}
        </TrackViewCard>
      </div>
    </article>
  )
}

export default TrackContent