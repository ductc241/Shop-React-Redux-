import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Table, Button, notification } from 'antd';

import { getAll, remove } from '../../../api/category';


const CategoryList = (props) => {
	const [categories, setCategories] = useState([])

	const onRemoveProduct = async (id) => {
		await remove(id)

		let newCategory = categories.filter(cate => {
			return cate._id !== id
		})

		setCategories(newCategory)
	}

    useEffect(() =>{
	    const getCategories = async () =>{
		    try{
		        const {data} = await getAll();
		        await setCategories(data);
		    }catch(error){
				notification.warning({
					message: 'Thông Báo',
					description: `Cant connect to database`,
					duration: 3
				});
		    }
	    }
	    getCategories();
	},[])


	const columns = [
      	{
        	title: 'Name',
        	dataIndex: 'name'
      	},
		{
			title: 'Action',
			dataIndex: 'action',
			render: (text, record) => {
				return	(
					<div>
						<Button
							type="primary"
							size='large'
							style={{ marginRight:20 }}
						>
							<Link to={`../category/edit/${record._id}`}>
								Edit
							</Link>
						</Button>
						<Button
							type="primary"
							size='large'
							onClick={() => onRemoveProduct(record._id)}
						>
							Remove
						</Button>
					</div>
				)
			}
		}
    ];

  	return (
        <div>
            <Table 
                columns={columns}
                dataSource={categories}
                rowKey={categories => categories._id}
                pagination={false} 
		    />
        </div>
		

        
  	)
}

export default CategoryList;