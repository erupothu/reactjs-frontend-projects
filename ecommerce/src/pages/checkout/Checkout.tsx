
import { useDispatch, useSelector } from 'react-redux'
import './Checkout.css';
import { removeItemFromCart } from '../../services/reducers/CheckoutReducer';

const Checkout = () => {

    const items = useSelector((state: any) => state.checkoutCart.items);
    const totalAmount = useSelector((state: any) => state.checkoutCart.totalAmount);
    const dispatch = useDispatch();

    const removeItemHandler = (item: any) => {
        dispatch(removeItemFromCart({
            id: item.id,
            price: item.offerPrice
        }))
    }

    return (
        <div className="checkout">
            <div className="checkout__containers">
                {
                    items.map((item: any) => {
                        return (
                            <div className="checkout__container">
                                <div className="checkout__imageContainer">
                                    <img src={item.imageUrl} alt="" className="checkout__imageStyles" />
                                </div>
                                <div className="checkout__imageInfoContainer">
                                    <table>
                                        <tr><td>{item.name}</td></tr>
                                        <tr><td>Price: {item.price}</td></tr>
                                        <tr><td>Offer Price: {item.offerPrice}</td></tr>
                                        <tr><td>Quantity: ({item.quantity})</td></tr>
                                        <tr><td>Total Price: ({item.totalPrice})</td></tr>
                                        <tr><td>
                                            <button onClick={() => removeItemHandler(item)} className="checkout__buttonRemoveFromCart">
                                                Remove
                                            </button>
                                        </td></tr>
                                    </table>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="checkout__byContainer">
                {
                    items.map((item: any) => {
                        return (
                            <div className="checkout_details">
                                <table>
                                    <tr>
                                        <td> {item.name}</td>
                                        <td>Total Price: ({item.totalPrice})</td>
                                    </tr>
                                </table>
                            </div>
                        )
                    })
                }
                <div>
                    Total: {totalAmount}
                </div>
            </div>
        </div>
    )
}

export default Checkout