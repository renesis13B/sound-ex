import Link from 'next/link'
import { Icons, IconType } from '../atoms/Icons'
import { VFC } from 'react'

type props = {
  linkGroup: {
    href: string
    icon: IconType
    text: string
  }
}

const LinkGroup: VFC<props> = ({ linkGroup }) => (
  <div>
    <Link href={linkGroup.href}>
      <div className='flex cursor-pointer mt-8 justify-center items-center'>
        <Icons icon={linkGroup.icon} />
        <span>{linkGroup.text}</span>
      </div>
    </Link>
  </div>
)

export default LinkGroup