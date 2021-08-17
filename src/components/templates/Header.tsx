import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { StoreContext } from '../../contexts/StoreContext'

const Header = () => {
  const [inputValue, setInputValue] = useState('')
  const { search, dispatch } = useContext(StoreContext)
  const router = useRouter()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch({ type: 'SET_SEARCH', payload: inputValue })
    router.push({
      pathname: '/searches',
      query: { search: `${inputValue}` }
    })
  }
  useEffect(() => {
    setInputValue(search)
  }, [])
  return (
    <div className="bg-deep-purple-accent-700">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">SOUND</span>
                </span>{' '}
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-teal-accent-400">
                <svg
                  className="w-7 h-7 text-deep-purple-900"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>EX
              </h2>
              <p className="text-base text-indigo-100 md:text-lg">
                SOUND EXは曲の情報を調べる事ができるサービスです<br />
                あなたの好きな曲を検索してみましょう
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>
              </p>
            </div>
            <div>
              <form onSubmit= { handleSubmit }>
                <input
                  type="text"
                  placeholder="検索"
                  onChange={ e => setInputValue(e.target.value) }
                  value={ inputValue }
                />
                <button>検索ボタン</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
