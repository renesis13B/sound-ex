import React from 'react'

type Props = Readonly<React.PropsWithChildren<any>>
type IsPropsSameObject = (prevProps: Props, nextProps: Props) => boolean

const isPropsSameObject: IsPropsSameObject = (prevProps, nextProps) => {
  console.log(JSON.stringify(prevProps) === JSON.stringify(nextProps))
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

export default isPropsSameObject