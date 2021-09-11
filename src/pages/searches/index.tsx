import React, { VFC } from 'react'
import useSearchedTracks from '../../hocks/useSearchedTracks'
import TrackCardLists from '../../components/organisms/presentational/TrackCardLists'
import { Heading } from '../../components/atoms/Heading'
import { useRouter } from 'next/router'
import { PlusCircleIcon } from '@heroicons/react/outline'

const SearchesIndex: VFC = () => {
  const {
    searchedTracks,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSearchedTracks()

  const router = useRouter()
  const { search, type } = router.query
  const heading = type === 'track'
    ? { main: 'Search', sub: `検索結果： ${search}` }
    : type === 'artist'
      ? { main: `${search} 人気曲`, sub: `${search} の人気トラック` }
      : { main: 'Sorry', sub: 'URLが間違っている可能性がございます。再度検索を試してください' }

  return (
    <section className='mt-8 px-4 sm:px-0'>
      {error && <Heading headingMain={'Sorry'} headingSub={error.message} />}
      {searchedTracks && (
        <>
          <Heading headingMain={heading.main} headingSub={heading.sub} />
          {searchedTracks.pages.map((page, i) => (
            <TrackCardLists key={i} tracks={page.tracks} />
          ))}
        </>
      )}
      <div className='text-right'>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className='border-b-2 border-gray-700 hover:text-gray-500 hover:border-gray-500 '
        >
          <PlusCircleIcon className='h-4 w-4 inline align-text-top mr-1' />
          {hasNextPage ? '楽曲をもっと見る' : '楽曲はこれ以上ありません'}
        </button>
      </div>
    </section>

  )
}

export default SearchesIndex
