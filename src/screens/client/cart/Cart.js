import "./Cart.css"
import { useSelector, useDispatch } from "react-redux"
import { removeCartItem } from "../../../redux/slice/cart"

const Cart = () => {
    const dispatch = useDispatch()
    const {cartItems} = useSelector((state) => state.cart);

    const onDeleteProduct = (id) => {
        const isConfirm = window.confirm('Bạn có muốn xóa sản phẩm này không')
        
        if(isConfirm){
            dispatch(removeCartItem(id))
        }
    }

    return (
        <div className="cart">
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th></th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.length > 0 ? cartItems.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>
                                        <img src={item.image} width="120"/>
                                    </td>
                                    <td>${item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>
                                        <span className="btn" onClick={() => onDeleteProduct(item.id)}>Remove</span>
                                    </td>
                                </tr>
                            )
                        }) : (
                            <tr>
                                <td>Your cart is empty</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart
