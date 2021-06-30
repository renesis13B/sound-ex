import Layout from "../components/Layout";
import { $api } from '../api/api'
import CardIndex from '../components/organisms/CardIndex'

const Index = (props) => {
  return (
    <Layout title="SOUND EX">
      {/* <CardIndex playlist={props.res}/> */}
      
    </Layout>
  )
}

export default Index

// export async function getStaticProps() {
//   const acsessToken = await $api.getAcsessToken()
//   const topPlayLists = await $api.getTopPlayLists(acsessToken.data.access_token)
//   console.log(topPlayLists.data.items[0].track.album.artists)
//   const st = topPlayLists.data.items.map(item => item.track.id).join('%2C')
//   const fea = await $api.getAudioFeaturesForTrack(acsessToken.data.access_token, st)
//   const top30Tracks = topPlayLists.data.items.map((item: any, index) => {
//     const sec = item.track.duration_ms / 1000

//     return {
//       id: item.track.id,
//       trackName: item.track.name,
//       albumImage: item.track.album.images.slice(-1)[0].url,
//       artistsName: item.track.album.artists[0].name,
//       bpm: Math.round(fea.data.audio_features[index].tempo),
//       duration: `${ Math.floor(sec / 60)}:${Math.floor(sec % 60)}`
//     }
//   })
//   return {
//     // props: { posts: 1 }
//     props: { posts: 1, res: top30Tracks }
//   }
// }
