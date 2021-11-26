import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Table, Button, Modal, notification } from 'antd';

import { getAll, remove } from '../../../api/product'


const ProductList = (props) => {
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
	        title: 'Price',
        	dataIndex: 'price',
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
							<Link to={`../products/edit/${record._id}`}>
								Edit
							</Link>
						</Button>
						<Button 
							type="primary"
							size='large' danger
							onClick={showModal(record)}
						>
							Delete
						</Button>
					</div>
				)
			}
		}
    ];

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [products, setProducts] = useState([])
	const [producDelete, setProducDelete] = useState('')

    const showModal = (record) => {
    	return () => {
			setIsModalVisible(true);
			setProducDelete(record._id)
		}
    };

    const handleOk = async () => {
        setIsModalVisible(false);
		const data = await remove(producDelete)

		if(data.status === 200){
			notification.warning({
				message: 'Thông Báo',
				description:
				'Xóa sản phẩm thành công',
				duration: 2
			});

			let newProducts = products.filter(product => {
				return product._id !== producDelete
			})

			setProducts(newProducts)
		}
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() =>{
	    const getProducts = async () =>{
		    try{
		        const {data} = await getAll();
		        await setProducts(data.data);
		    }catch(error){
				notification.warning({
					message: 'Thông Báo',
					description: `Cant connect to database`,
					duration: 3
				});
		    }
	    }
	    getProducts();
	},[])

  	return (
        <div>
            <Table 
                columns={columns}
                dataSource={products}
                rowKey={products => products._id}
                pagination={false} 
		    />

            <Modal title="Xác Nhận" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Bạn có muốn xóa sản phẩm này không</p>
            </Modal>
        </div>
		

        
  	)
}

export default ProductList;