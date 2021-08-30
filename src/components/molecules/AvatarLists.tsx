import AvatarWrap from './AvatarWrap'
import { Track } from '../../types/track'
import { VFC } from 'react'

type Props = {
  relatedArtists: Track['related_artists']
}

const AvatarLists: VFC<Props> = ({ relatedArtists }) => (

  <div className='flex flex-row justify-between p-2 flex-wrap'>
    {
      relatedArtists.map(artists => <AvatarWrap key={artists.id} avatar={artists} />)
    }
  </div>
  
)

export default AvatarLists