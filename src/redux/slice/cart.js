import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getOne } from "../../api/product"

import { notification } from "antd"

export const getProductCart = createAsyncThunk(
    'cart/getProductCart',
    async (id) => {
        const { data } = await getOne(id)
        return {
            id: id,
            name: data.name,
            price: data.price,
            image: data.image,
            qty: 1
        }
    }
)

const cartSlide = createSlice({
    name: 'cart',

    initialState: {
        cartItems: [],
        cartAmount: 0
    },

    reducers: {
        removeCartItem(state, action) {
            console.log(action.payload)
            const newCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload
            )
            state.cartItems = newCartItems;
        }
    },
    
    extraReducers: (builder) => {
        builder.addCase(getProductCart.fulfilled, (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].qty += 1;
                notification.success({
                    message: 'Thông Báo',
					description:'Thêm sản phẩm thành công',
					duration: 1.5,
                })
            } else {
                const itemProduct = { ...action.payload, qty: 1 };
                state.cartItems.push(itemProduct);
                notification.success({
                    message: 'Thông Báo',
					description:'Thêm sản phẩm thành công',
					duration: 1.5,
                })
            }
        })
    }
})

export const { removeCartItem } = cartSlide.actions;
export default cartSlide