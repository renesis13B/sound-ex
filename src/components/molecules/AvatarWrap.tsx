import { Artist } from '../../types/artist'
import { useRouter } from 'next/router'

type Avatar = {
  avatar: Artist
}

const AvatarWrap = ({ avatar }: Avatar) => {
  const router = useRouter()
  const pushArtistSearchIndex = () => {
    router.push({
      pathname: '/searches',
      query: { search: `${avatar.name}`, type: 'artist' },
    })
  }
  return (
    <figure onClick={pushArtistSearchIndex} className='w-6/12 sm:w-2/12 p-2 hover:bg-gray-100'>
      {console.log('AvatarWrap')}
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