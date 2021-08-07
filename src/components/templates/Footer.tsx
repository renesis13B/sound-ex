import React from 'react'

const Footer = ():JSX.Element => {
  return (
    <div className="relative mt-auto bg-deep-purple-accent-400">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <div
              className="flex items-center"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-teal-accent-400">
              <svg
                  className="w-5 h-5 text-deep-purple-900"
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
              </div>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                SOUND EX
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2021 SOUND EX All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
