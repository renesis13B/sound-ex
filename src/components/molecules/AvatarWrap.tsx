import { Artist } from '../../models/artist'

type Avatar = {
  avatar: Artist
}

const AvatarWrap = ({ avatar }: Avatar) => {
  return (
    <figure className='w-6/12 p-2 sm:w-2/12'>
      <img className='rounded-full' src={avatar.image} alt='' />
      <figcaption className='text-center'>
        {avatar.name}
      </figcaption>
    </figure>
  )
}

export default AvatarWrap