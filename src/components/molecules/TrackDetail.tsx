import { Track } from '../../types/track'
import { VFC } from 'react'

type Props = {
  track: Track
  searchArtist: () => void
}

const TrackDetail: VFC<Props> = ({ track, searchArtist }) => (
  <p className='text-xl mt-4'>
    <span className='font-bold'>{track.trackName}</span>は
    <span className='font-bold'>{track.releaseDate}</span>にリリースされた
    <span onClick={searchArtist} className='font-bold cursor-pointer'>{track.artistsName}</span>
    の楽曲です。<br />
    この楽曲のデータは以下の通りとなります。<br />
    キー：<span className='font-bold'>{track.key}</span>、
    再生時間：<span className='font-bold'>{track.duration}</span>、
    BPM：<span className='font-bold'>{track.bpm}</span><br />
    楽曲の踊りやすや(最大1 最小0)は<br />
    danceability：
    <span className='font-bold'>{track.danceability}</span><br />
    楽曲のエネルギッシュは<br />
    energy：
    <span className='font-bold'>{track.energy}</span><br />
    楽曲全体の
    拍：
    <span className='font-bold'>{track.time_signature}</span>
  </p>
)

export default TrackDetail