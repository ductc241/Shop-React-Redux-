import { Form, Input, InputNumber, Button, notification } from 'antd';

import { useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';

import { getOne, update } from '../../../api/product';

const layout = {
  	labelCol: { span: 2 },
  	wrapperCol: { span: 8 },
};

const validateMessages = {
	required: '${label} is required!',
	types: {
	  number: '${label} is not a valid number!'
	},
	number: {
	  range: '${label} must be between ${min} and ${max}',
	},
	string: {
		min: "${label} must be at least ${min} characters",
	  },
};


const ProductEdit = (props) => {
	const navigate = useNavigate();
    const [form] = Form.useForm();
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProduct = async() => {
            const { data } = await getOne(id)
            setProduct(data)

			form.setFieldsValue({
				name: data.name,
				quantity: data.quantity,
				price: data.price,
				summary: data.summary,
				describe: data.describe
			});
        }
        getProduct()
    }, [])

	const normFile = (e) => {	  
		if (Array.isArray(e)) {
		  return e;
		}
	  
		return e && e.fileList;
	};

	const onFinish = async (data) => {
		const newProduct = {
			...data,
			image: product.image
		}

		let response = await update(product._id, newProduct)

		if(response.status === 200){
			notification.success({
				message: 'Thông Báo',
				description: 'Sửa sản phẩm thành công',
				duration: 1.5,
				onClose: () => {
					navigate("/admin/products/list");
				}
			});
		}

	};


  	return (
    	<Form form = {form} {...layout} 
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
			autoComplete="off"
		>
	      	<Form.Item label="Name"  name={'name'} rules={[{required: true}]}>
	        	<Input placeholder={product.name}/>
	      	</Form.Item>
	      	<Form.Item label="Quantity" name={'quantity'}>
		    	<InputNumber  />
		    </Form.Item>
			<Form.Item label="Price" name={'price'}>
		    	<InputNumber  />
		    </Form.Item>
			<Form.Item label="Summarry" name={'summary'} rules={[{required: true}, {min: 0}]}>
	        	<Input.TextArea />
	      	</Form.Item>
	      	<Form.Item label="Description" name={'describe'} rules={[{required: true}, {min: 0}]}>
	        	<Input.TextArea />
	      	</Form.Item>
	      	<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
		        <Button type="primary" htmlType="submit">
					Submit
				</Button>
	      	</Form.Item>
	    </Form>
  	)
}

export default ProductEdit;
