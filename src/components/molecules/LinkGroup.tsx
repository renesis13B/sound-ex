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
    <div className='text-center mt-8'>
      <Link href={linkGroup.href}>
        <span className='cursor-pointer'>
          <Icons icon={linkGroup.icon} />
          <span>{linkGroup.text}</span>
        </span>
      </Link>
    </div>
  </div>
)

export default LinkGroup