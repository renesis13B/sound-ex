import Layout from "../components/Layout";
import fetch from "node-fetch";
import { useEffect } from "react";
import axios from "axios";

const Index = (props) => {
  // useEffect(() => {
  //   axios("https://accounts.spotify.com/api/token", {
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       'Authorization':
  //         "Basic " + btoa("d007e5677bf6499fabf84865805ad9e4" + ":" + "dd83fdd3621b4867a279d00864c2b5e7"),
  //     },
  //     data: "grant_type=client_credentials",
  //     method: "POST"
  //   }).then((token) => {
  //     console.log(token.data.access_token)
  //   })
  // }, [])
  return (
    <Layout title="SOUND EX">
      {/* {console.log(props.res[0])}
      {props.res.map(item => (
        <diV>
          <p>{item.track.name}</p>
          <p>{item.track.artists[0].name}</p>
          <hr />
        </diV>
      ))} */}
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  // const apiUrl = "https://accounts.spotify.com/api/token";
  // const params = new URLSearchParams();
  // params.append('grant_type', 'client_credentials');
  // const res = await axios("https://accounts.spotify.com/api/token", {
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     'Authorization':
  //       "Basic " + 'ZDAwN2U1Njc3YmY2NDk5ZmFiZjg0ODY1ODA1YWQ5ZTQ6ZGQ4M2ZkZDM2MjFiNDg2N2EyNzlkMDA4NjRjMmI1ZTc=',
  //   },
  //   data: "grant_type=client_credentials",
  //   method: "POST"
  // })
  // const art = await axios("https://api.spotify.com/v1/playlists/37i9dQZF1DXafb0IuPwJyF", {
  //   method: "GET",
  //   headers: { 'Authorization': "Bearer " + res.data.access_token, 'Accept-Language': 'ja;q=1' }

  // })
  // const items = art.data.tracks.items
  // const res = await fetch(apiUrl, {
  //   method: 'POST',
  //   body: params,
  //   headers: {
  //     'Authorization': 'Basic ' + 'ZDAwN2U1Njc3YmY2NDk5ZmFiZjg0ODY1ODA1YWQ5ZTQ6ZGQ4M2ZkZDM2MjFiNDg2N2EyNzlkMDA4NjRjMmI1ZTc='
  //   }
  // });

  // fetch(apiUrl, {
  //   method: 'POST',
  //   body: "grant_type=client_credentials",
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Authorization': 'Basic ' + 'ZDAwN2U1Njc3YmY2NDk5ZmFiZjg0ODY1ODA1YWQ5ZTQ6ZGQ4M2ZkZDM2MjFiNDg2N2EyNzlkMDA4NjRjMmI1ZTc='
  //   }
  // }).then(token => console.log(token));

  // const res2 = await fetch("https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V", {
  //   method: 'GET',
  //   headers: {
  //     'Authorization': 'Bearer ' + res.access_token
  //   }
  // });
  // console.log(res)
  // const acc = res.data
  //console.log(res.data.access_token)
  return {
    // props: { posts: 1, res: items }
    props: { posts: 1, res: 1 }
  }
}
