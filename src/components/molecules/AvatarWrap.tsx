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
      <div
        className='bg-cover bg-center rounded-full cursor-pointer aspect-w-1 aspect-h-1'
        style={{ backgroundImage: `url("${avatar.image ?? '/noImage.jpg'}")` }}
      >
      </div>
      <figcaption className='text-center cursor-pointer'>
        {avatar.name}
      </figcaption>
    </figure>
  )
}

export default AvatarWrap