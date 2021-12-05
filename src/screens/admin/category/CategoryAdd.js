import { Form, Input, Button, notification} from 'antd';
import { useNavigate} from "react-router-dom";
import { add } from "../../../api/category";

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 8 },
};

const validateMessages = {
  required: '${label} is required!',
  string: {
      min: "${label} must be at least ${min} characters",
  }
};

const CategoryAdd = () => {
    const navigate = useNavigate();
    
    // const [isLoading, setIsLoading] = useState(false)
    
    const onFinish = async (category) => {
        const { data } = await add(category)
        
        notification.success({
            message: 'Thông Báo',
            description:'Thêm danh mục thành công',
            duration: 1.5,
            onClose: () => {
                navigate("/admin/products/list");
            }
        })	
    }

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
	      	<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
		        <Button type="primary" htmlType="submit">
					Submit
				</Button>
	      	</Form.Item>
	    </Form>
    )
}

export default CategoryAdd
