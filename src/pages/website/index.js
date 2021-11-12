import { Row, Col } from 'antd';
import { Card } from 'antd';

import "../../assets/website.css";


const { Meta } = Card;


const HomePage = (props) =>{
    console.log(props.data)
    return(
        <div>
        <Row className="shop container" gutter={[16, 24]}>
            {props.data.map((item, index) =>{
                return<Col className="gutter-row shop-" key={index} span={6}>
                   <Card
                        hoverable
                        style={{ "width" : "100%" }}
                        cover={<img alt="example" src={item.img} />}
                    >
                        <p className="py-2">{item.name}</p>
                        <p><span>Giá : </span>{item.price} đ</p>
                    </Card>,
                </Col>
            })}
        </Row>
        </div>
    )
       
}
export default HomePage;