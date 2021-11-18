import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"



const Addproduct_2 = (props) =>{
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) =>{
       const newProducts = {
           ...data
       }
       console.log(newProducts);
       props.onAdd(newProducts);
       navigate("/admin");
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", { required: true })} placeholder="tên sản phẩm" />
                {errors.name && <span>bắt buộc phải nhập trường hợp này</span>}
                <br />
                <input type="number" {...register("price", {required: true})} placeholder="giá" />
                {errors.price && <span>bắt buộc phải nhập trường hợp này</span>}
                <br />  
                <button >Thêm</button>
            </form>
        </div>
    )
}
export default Addproduct_2;