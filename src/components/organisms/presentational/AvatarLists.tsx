import AvatarWrap from '../../molecules/AvatarWrap'
import { VFC } from 'react'
import { RelatedArtists } from '../../../types/relatedArtists'
import { QueryStatus } from 'react-query/types/core/types'
import Skeleton from 'react-loading-skeleton'

type Props = {
  relatedArtists?: RelatedArtists[]
  fetchStatus: QueryStatus
}

const AvatarLists: VFC<Props> = ({ relatedArtists, fetchStatus }) => {
  return (
    <div className='flex flex-row justify-between p-2 flex-wrap'>
      {fetchStatus === 'loading' ? (
        <Skeleton />
      ) : fetchStatus === 'error' ? (
        <p>データの取得に失敗しました</p>
      ) : (
        relatedArtists?.map(artists => <AvatarWrap key={artists.id} avatar={artists} />)
      )
      }
    </div>

  )
}

export default AvatarLists