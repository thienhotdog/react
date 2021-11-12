import { Link } from "react-router-dom";
const ListProduct = (props) =>{
    return(
        <div>
      <hr />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Quản lý sản phẩm</h2>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/admin/addproduct2" className="btn btn-sm btn-outline-primary">
            Thêm sản phẩm
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              <th scope="col">ảnh</th>
              <th scope="col">Giá</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr className="table" key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td><img src={item.img} className="image" /></td>
                <td>{item.price}</td>
                <td>
                    <button onClick={() => props.onRemove(item.id)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default ListProduct;