import React, { VFC } from 'react'
import EnhancedSearch from '../containers/Search'
import Title from '../../atoms/Title'

const HeaderContent: VFC = () => (
  <div className='flex justify-between items-center'>
    <Title />
    <div className='flex-1 ml-8'>
      <EnhancedSearch />
    </div>
  </div>
)

export default HeaderContent