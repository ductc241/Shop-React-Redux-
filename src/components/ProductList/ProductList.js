import { useState, useEffect } from 'react'
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { getAll } from '../../api/product'

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
        title: 'Image',
        dataIndex: 'image',
        render: (text, record) => {
        	return <img src={record.image} style={{ "width": "100px" }} />
        }
      },
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