import { VFC } from 'react'

export type HeadingText = Readonly<{
  main: string
  sub?: string
}>

type Props = {
  heading: HeadingText
}

export const Heading: VFC<Props> = ({ heading }) => (
  <>
    <h2 className='text-4xl text-gray-800 font-bold'>
      {heading.main}
    </h2>
    {heading.sub && (
      <p className='text-sm text-gray-700  border-t-2 border-gray-700'>
        {heading.sub}
      </p>
    )}
  </>
)