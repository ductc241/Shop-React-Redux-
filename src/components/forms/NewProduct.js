import { Form, Input, InputNumber, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { storage } from '../../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import * as ProductAPI from '../../api/product';

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

const NewProduct = (props) => {
	const normFile = (e) => {	  
		if (Array.isArray(e)) {
		  return e;
		}
	  
		return e && e.fileList;
	};

	const onFinish = (data) => {
		let file = data.upload[0].originFileObj

		const storageRef = ref(storage, 'products/' + file.name);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on('state_changed', 
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					const product = {
						...data,
						image: url
					}

					ProductAPI.add(product)
				})
			}
		)
	};


  	return (
    	<Form {...layout} 
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
			autoComplete="off"
		>
	      	<Form.Item label="Name"  name={'name'} rules={[{required: true}]}>
	        	<Input />
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
			  <Form.Item
				name="upload"
				label="Upload"
				valuePropName="fileList"
				getValueFromEvent={(normFile)}
			>
				<Upload name="logo" action="/upload.do" listType="picture" beforeUpload={() => false}>
				<Button icon={<UploadOutlined />}>Click to upload</Button>
				</Upload>
			</Form.Item>
	      	<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
		        <Button type="primary" htmlType="submit">
					Submit
				</Button>
	      	</Form.Item>
	    </Form>
  	)
}

export default NewProduct;