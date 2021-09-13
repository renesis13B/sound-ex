import React, { VFC } from 'react'
import useSearchedTracks from '../../hocks/useSearchedTracks'
import TrackCardLists from '../../components/organisms/presentational/TrackCardLists'
import { Heading } from '../../components/atoms/Heading'
import { useRouter } from 'next/router'
import { PlusCircleIcon } from '@heroicons/react/outline'
import SkeletonTrackCardLists from '../../components/organisms/presentational/SkeletonTrackCardLists'

const SearchesIndex: VFC = () => {
  const {
    searchedTracks,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useSearchedTracks()

  const router = useRouter()
  const { search, type } = router.query
  const heading = type === 'track'
    ? { main: 'Search', sub: `検索結果： ${search}` }
    : type === 'artist'
      ? { main: `${search} 人気曲`, sub: `${search} の人気トラック` }
      : { main: 'Search', sub: '' }

  return (
    <section className='mt-8 px-4 sm:px-0'>
      <Heading headingMain={!error ? heading.main : 'Sorry'} headingSub={!error ? heading.sub : ''} />
      {status === 'loading' ? (
        <SkeletonTrackCardLists />
      ) : status === 'error' ? (
        <p>データの取得に失敗しました。更新ボタンを押すか、別のキーワードをお試しください。</p>
      ) : (
        searchedTracks && (
          <>
            {searchedTracks.pages.map((page, i) => (
              <TrackCardLists key={i} tracks={page.tracks} />
            ))}
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
          </>
        )
      )
      }
    </section>
  )
}

export default SearchesIndex
