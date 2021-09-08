import AvatarWrap from './AvatarWrap'
import { VFC } from 'react'
import { RelatedArtists } from '../../types/relatedArtists'

type Props = {
  relatedArtists: RelatedArtists[]
}

const AvatarLists: VFC<Props> = ({ relatedArtists }) => (

  <div className='flex flex-row justify-between p-2 flex-wrap'>
    {
      relatedArtists.map(artists => <AvatarWrap key={artists.id} avatar={artists} />)
    }
  </div>
  
)

export default AvatarLists