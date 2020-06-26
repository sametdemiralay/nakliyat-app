import Layout from "../../components/Layout";
import {Image, Row, Col} from 'react-bootstrap'
import Data from '../../data.json'

function Hakkimizda() {
   const {hakkimizda, hakkimizda2} = Data
 return (
  <Layout title={"Hakkimizda"} headText={"Hakkimizda"}>
     <Row>
        <Col lg={4}>
        <Image src="/hakkimizda-image.jpg" thumbnail/>
        </Col>
        <Col lg={8}>
        <p className="text-primary">{hakkimizda}</p>
        <p className="text-primary">{hakkimizda2}</p>
        </Col>
     </Row>
  </Layout>
 );
}

export default Hakkimizda;
