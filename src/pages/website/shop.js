import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import '../../assets/website.css'

const { Sider, Content } = Layout;

const Shop = (props) =>{
    return(
            <Layout >
                <Sider className="container" style={{backgroundColor: 'white'}}>
                    <div className="direction">
                        <Link to="/index">Trang chủ</Link>
                        <span> --- </span>
                            <a to="#">Shop</a>
                            <div className="shop">
                                <p className="shop_title">loại sản phẩm</p>
                                <div>
                                    <ul className="shop_option">
                                        <li><Link to="">giày</Link></li>
                                        <li><Link to="">quần áo</Link></li>
                                        <li><Link to="">phụ kiện</Link></li>
                                    </ul>
                                </div>    
                            </div>

                            <div className="border-b py-3">
                                <p className="shop_title">khoảng giá</p>
                                <ul className="shop_option">
                                    <li className="flex justify-between mb-2">
                                    <a href="#">0 - 3,000,000đ</a>
                                    </li>
                                    <li className="flex justify-between mb-2">
                                    <a href="#">3,000,000đ - 4,000,000đ</a>
                                    </li>
                                    <li className="flex justify-between mb-2">
                                    <a href="#">4,000,000đ - 5,000,000đ</a>
                                    </li>
                                    <li className="flex justify-between mb-2">
                                    <a href="#">5,000,000đ - 8,000,000đ</a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </Sider>
                <Content>
                    <Row className="shop container" gutter={[16, 24]} style={{backgroundColor: 'white'}}>
                        {props.data.map((item, index) =>{
                            return<Col className="gutter-row shop-" key={index} span={6}>
                                <Link to = {`/product/${item.id}/detail`}>
                                    <Card
                                        hoverable
                                        style={{ "width" : "100%" }}
                                        cover={<img alt="example" src={item.img} />}
                                    >
                                        <p className="py-2">{item.name}</p>
                                        <p><span>Giá : </span>{item.price} VNĐ</p>
                                    </Card>
                                </Link>
                            </Col>
                            
                        })}
                    </Row>
                </Content>
            </Layout>
    )
}

export default Shop;