import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  	labelCol: { span: 2 },
  	wrapperCol: { span: 8 },
};

const NewProduct = (props) => {
	const {register, handleSubmit, formState: { errors }} = useForm();

	const onSubmit = (data) => {
    	console.log(data)
  	};

  	return (
    	<Form {...layout} name="nest-messages" onFinish={handleSubmit(onSubmit)}>
	      	<Form.Item label="Name">
	        	<Input {...register("name")}/>
	      	</Form.Item>
	      	<Form.Item label="Email">
	        	<Input {...register("email")}/>
	      	</Form.Item>
	      	<Form.Item label="Age">
		    	<Input type="number" {...register("age")} />
		    </Form.Item>
	      	<Form.Item label="Website">
		        <Input {...register("website")}/>
	      	</Form.Item>
	      	<Form.Item label="Introduction">
	        	<Input.TextArea {...register("introduction")}/>
	      	</Form.Item>
	      	<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
		        <Button type="primary" htmlType="submit">Submit</Button>
	      	</Form.Item>
	    </Form>
  	)
}

export default NewProduct;