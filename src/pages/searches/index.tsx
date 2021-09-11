import React, { VFC } from 'react'
import useSearchedTracks from '../../hocks/useSearchedTracks'
import TrackCardLists from '../../components/organisms/presentational/TrackCardLists'
import { Heading } from '../../components/atoms/Heading'
import { useRouter } from 'next/router'

const SearchesIndex: VFC = () => {
  const { searchedTracks, error } = useSearchedTracks()
  const router = useRouter()
  const { search, type } = router.query
  const heading = type === 'track'
    ? { main: 'Search', sub: `検索結果： ${search}` }
    : type === 'artist' ? { main: `${search} 人気曲`, sub: `${search} の人気トラック 最大30曲` }
      : { main: 'Sorry', sub: 'URLが間違っている可能性がございます。再度検索を試してください' }

  return (
    <section className='mt-8 px-4 sm:px-0'>
      {error && <Heading headingMain={'Sorry'} headingSub={error.message} />}
      {searchedTracks && (
        <>
          <Heading headingMain={heading.main} headingSub={heading.sub} />
          <TrackCardLists tracks={searchedTracks} />
        </>
      )}
    </section>

  )
}

export default SearchesIndex
