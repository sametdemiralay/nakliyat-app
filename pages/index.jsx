import Layout from "../components/Layout";
import {Button} from 'react-bootstrap'
import Data from '../data.json'

function HomePage() {
   const deneme = Data.deneme
 return (
  <Layout title={"Anasayfa"} headText={"Anasayfa"}>
   <h1>ANASAYFA</h1>
   <Button variant="success">Success</Button>
   {deneme.map(post=>(
      <div key={post.id}>
         <h4>{post.title}</h4>
      </div>
   ))}
  </Layout>
 );
}

export default HomePage;
