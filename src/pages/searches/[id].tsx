import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Context } from '../../Context/Context'
import Layout from '../../components/templates/Layout'
import { searchApi } from '../../api/search'
import Link from 'next/link'

const Search = () => {
  const { globalState, setGlobalSelected } = useContext(Context)
  const router = useRouter()
  const setTrack = async () => {
    const { id } = router.query
    if ( id ) {
      const { getTrackData } = searchApi()
      await getTrackData(id).then((res) => {
        setGlobalSelected(res)
      })
    }
  }

  useEffect(() => {
    // 上で記述したsetTrackを呼び出す
    setTrack()
  }, [router.query])
  return (
    <div>
      <Layout title="テス">
        <div className='flex flex-col items-center sm:flex-row'>
          <figure
            className='w-80 h-80 bg-center bg-cover rounded-xl sm:mr-5'
            style={{backgroundImage: `url("${globalState.selected.albumImage}")`}}
          />
          <div>
            <h2 className='text-2xl'>{globalState.selected.artistsName}</h2>
            <h1 className='text-4xl font-bold'>{globalState.selected.trackName}</h1>
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
                  <dd className='px-5 py-3'>{ globalState.selected.releaseDate }</dd>
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
                  <dd className='px-5 py-3'>{ globalState.selected.bpm }</dd>
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
                  <dd className='px-5 py-3'>{ globalState.selected.key }</dd>
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
    </div>
  )
}

export default Search
