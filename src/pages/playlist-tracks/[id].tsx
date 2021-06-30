import Layout from '../../components/Layout'

const PlaylistTrack = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("https://i.scdn.co/image/ab67616d0000b2737114232a0dd5100fb15b1bc8")'
  }
  return (
    <Layout title='test'>
      <div className='flex flex-col items-center sm:flex-row'>
        <figure
        className='w-80 h-80 bg-center bg-cover rounded-xl sm:mr-5'
        style={backgroundImageStyle}
        ></figure>
        <div>
          <h2 className='text-2xl'>一柳隊</h2>
          <h1 className='text-4xl font-bold'>Edel Lilie</h1>
          <ul>
            <li className='mb-5'>
              <dl className='flex items-center bg-white w-full max-w-md'>
                <dt className='bg-black text-white px-5 py-3 relative mr-5'>
                  Release
                  <svg
                    className='absolute w-5 h-full top-0 left-full'
                    viewBox="0 0 44 43"
                    preserveAspectRatio="none"
                  >
										<path fillRule="evenodd" fill="rgb(0, 0, 0)" d="M-0.000,43.000 L44.000,43.000 L-0.000,0.000 L-0.000,-0.000 L-0.000,43.000 Z"></path>
									</svg>
                  </dt>
                <dd className='px-5 py-3'>2020.10.28</dd>
              </dl>
            </li>
            <li className='mb-5'>
              <dl className='flex items-center bg-white w-full max-w-md'>
                <dt className='bg-black text-white px-5 py-3 relative mr-5'>
                  BPM
                  <svg
                    className='absolute w-5 h-full top-0 left-full'
                    viewBox="0 0 44 43"
                    preserveAspectRatio="none"
                  >
										<path fillRule="evenodd" fill="rgb(0, 0, 0)" d="M-0.000,43.000 L44.000,43.000 L-0.000,0.000 L-0.000,-0.000 L-0.000,43.000 Z"></path>
									</svg>
                  </dt>
                <dd className='px-5 py-3'>128</dd>
              </dl>
            </li>
            <li className='mb-5'>
              <dl className='flex items-center bg-white w-full max-w-md'>
                <dt className='bg-black text-white px-5 py-3 relative mr-5'>
                  KEY
                  <svg
                    className='absolute w-5 h-full top-0 left-full'
                    viewBox="0 0 44 43"
                    preserveAspectRatio="none"
                  >
										<path fillRule="evenodd" fill="rgb(0, 0, 0)" d="M-0.000,43.000 L44.000,43.000 L-0.000,0.000 L-0.000,-0.000 L-0.000,43.000 Z"></path>
									</svg>
                  </dt>
                <dd className='px-5 py-3'> K</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default PlaylistTrack
