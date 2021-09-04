import React, { VFC } from 'react'

type Props = {
  headingMain: string
  headingSub?: string
}

export const Heading: VFC<Props> = React.memo(({ headingMain, headingSub }) => (
  <>
    <h2 className='text-4xl text-gray-800 font-bold'>
      {headingMain}
    </h2>
    {headingSub && (
      <p className='text-sm text-gray-700  border-t-2 border-gray-700'>
        {headingSub}
      </p>
    )}
  </>
))