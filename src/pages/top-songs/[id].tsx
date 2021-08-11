import Layout from '../../components/templates/Layout'
import Link from 'next/link'
import { topSongsApi } from '../../api/top-songs'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { authApi } from '../../api/auth'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const TopSong = ({ topSong }: Props) => {
  const router = useRouter()
  if (router.isFallback || !topSong) {
    return <div>Loading...</div>
  }
  return (
    <Layout title={`SOUND EX - ${topSong.trackName} ${topSong.artistsName}`}>
      <div className='flex flex-col items-center sm:flex-row'>
        <figure
          className='w-80 h-80 bg-center bg-cover rounded-xl sm:mr-5'
          style={{backgroundImage: `url("${topSong?.albumImage}")`}}
        />
        <div>
          <h2 className='text-2xl'>{topSong.artistsName}</h2>
          <h1 className='text-4xl font-bold'>{topSong.trackName}</h1>
          <ul>
            <li className='mb-5'>
              <dl className='flex items-center bg-white w-full max-w-md'>
                <dt className='bg-black text-white px-5 py-3 relative mr-5'>
                  Release
                  <svg
                    className='absolute w-5 h-full top-0 left-full'
                    viewBox="0 0 44 43"
                    preserveAspectRatio="none"
                  >
										<path fillRule='evenodd' fill='rgb(0, 0, 0)' d='M-0.000,43.000 L44.000,43.000 L-0.000,0.000 L-0.000,-0.000 L-0.000,43.000 Z'/>
									</svg>
                  </dt>
                <dd className='px-5 py-3'>{ topSong.releaseDate }</dd>
              </dl>
            </li>
            <li className='mb-5'>
              <dl className='flex items-center bg-white w-full max-w-md'>
                <dt className='bg-black text-white px-5 py-3 relative mr-5'>
                  BPM
                  <svg
                    className='absolute w-5 h-full top-0 left-full'
                    viewBox="0 0 44 43"
                    preserveAspectRatio="none"
                  >
										<path fillRule='evenodd' fill='rgb(0, 0, 0)' d='M-0.000,43.000 L44.000,43.000 L-0.000,0.000 L-0.000,-0.000 L-0.000,43.000 Z'/>
									</svg>
                  </dt>
                <dd className='px-5 py-3'>{ topSong.bpm }</dd>
              </dl>
            </li>
            <li className='mb-5'>
              <dl className='flex items-center bg-white w-full max-w-md'>
                <dt className='bg-black text-white px-5 py-3 relative mr-5'>
                  KEY
                  <svg
                    className='absolute w-5 h-full top-0 left-full'
                    viewBox="0 0 44 43"
                    preserveAspectRatio="none"
                  >
										<path fillRule='evenodd' fill='rgb(0, 0, 0)' d='M-0.000,43.000 L44.000,43.000 L-0.000,0.000 L-0.000,-0.000 L-0.000,43.000 Z'/>
									</svg>
                  </dt>
                <dd className='px-5 py-3'>{ topSong.key }</dd>
              </dl>
            </li>
          </ul>
        </div>
        <Link href='/'>
          <div className='flex cursor-pointer mt-12'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Back to Home</span>
          </div>
        </Link>
      </div>
    </Layout>
  )
}

export default TopSong

export const getStaticPaths: GetStaticPaths = async () => {
  const token = `${process.env.NEXT_PUBLIC_SPOTIFY_TOKEN_ID}`
  const { getTopSongsIds } = topSongsApi()
  const paths = await getTopSongsIds(token)
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const token = `${process.env.NEXT_PUBLIC_SPOTIFY_TOKEN_ID}`
  const { getTopSongData } = topSongsApi()
  const topSong = await getTopSongData(token, params?.id as string)
  return {
    props: {
      topSong
    }
  }
}