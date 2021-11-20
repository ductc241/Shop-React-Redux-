import { useState, useEffect } from 'react'
import { Table, Button, notification } from 'antd';

import { getAll } from '../../api/product'

const ProductList = (props) => {
	const onHandleRemove = (product) => {
		return () => {
			console.log(product._id)
			// Call api

			notification.open({
				message: 'Notification Title',
				description:
				  'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
				duration: 2
			});
		}
	}

	const columns = [
      	{
        	title: 'Name',
        	dataIndex: 'name'
      	},
      	{
	        title: 'Quantity',
        	dataIndex: 'quantity',
      	},
      	{
	        title: 'Image',
        	dataIndex: 'image',
        	render: (text, record) => {
	        	return <img src={record.image} alt={record.name} style={{ "width": "100px" }}/>
        	}
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
							Edit
						</Button>
						<Button 
							type="primary"
							size='large' danger
							onClick={onHandleRemove(record)}
						>
							Delete
						</Button>
					</div>
				)
			}
		}
    ];

    const [products, setProducts] = useState({})

    useEffect(() =>{
	    const getProducts = async () =>{
		    try{
		        const {data} = await getAll();
		        await setProducts(data);
		    }catch(error){
		        console.log(error)
		    }
	    }
	    getProducts();
	},[])

  	return (
		<Table 
			columns={columns}
			dataSource={products.data}
			rowKey={products => products._id}
			pagination={false} 
		/>
  	)
}

export default ProductList;