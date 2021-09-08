import { RelatedArtists } from '../../types/relatedArtists'
import { useRouter } from 'next/router'
import Image from 'next/image'

type Avatar = {
  avatar: RelatedArtists
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
    <figure onClick={pushArtistSearchIndex} className='w-6/12 sm:w-2/12 p-2 hover:bg-gray-100 text-center'>
      <Image
        className='rounded-full cursor-pointer'
        src={avatar.image ?? '/noImage.jpg'}
        width={320}
        height={320}
      />
      <figcaption className='text-center cursor-pointer'>
        {avatar.name}
      </figcaption>
    </figure>
  )
}

export default AvatarWrap