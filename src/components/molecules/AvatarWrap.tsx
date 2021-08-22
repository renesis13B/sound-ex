import { Artist } from '../../models/artist'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { StoreContext } from '../../contexts/StoreContext'

type Avatar = {
  avatar: Artist
}

const AvatarWrap = ({ avatar }: Avatar) => {
  const { dispatch } = useContext(StoreContext)
  const router = useRouter()
  const pushArtistSearchIndex = () => {
    dispatch({ type: 'SET_SEARCH', payload: avatar.name })
    router.push({
      pathname: '/searches',
      query: { search: `${avatar.name}` },
    })
  }
  return (
    <figure onClick={pushArtistSearchIndex} className='w-6/12 sm:w-2/12 p-2'>
      <img className='rounded-full cursor-pointer' src={avatar.image} alt='' />
      <figcaption className='text-center'>
        {avatar.name}
      </figcaption>
    </figure>
  )
}

export default AvatarWrap