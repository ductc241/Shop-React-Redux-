import { Link, NavLink, Outlet} from "react-router-dom";
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function AdminLayout() {
  	return (
   		<Layout>
		    <Header className="header">
		      	<div className="logo" />
			    <Menu theme="dark" mode="horizontal">
			        <Menu.Item key="1">
						<Link to="/shop">Homepage</Link>
					</Menu.Item>
			        <Menu.Item key="2">Dashboard</Menu.Item>			    
			    </Menu>
		    </Header>
		    <Content style={{ padding: '0 50px' }}>
		      	<Layout className="site-layout-background" style={{ padding: '24px 0' }}>
		        	<Sider className="site-layout-background" width={200}>
			          	<Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
			            	<SubMenu key="sub1" icon={<UserOutlined />} title="Product">
			              		<Menu.Item key="1">
			              			<NavLink to="products/list">
          								Sản Phẩm
        							</NavLink>
			              		</Menu.Item>
			              		<Menu.Item key="2">
			              			<NavLink to="products/create">
          								Thêm Sản Phẩm
        							</NavLink>
			              		</Menu.Item>
			            	</SubMenu>
			            	<SubMenu key="sub2" icon={<LaptopOutlined />} title="Category">
			              		<Menu.Item key="3">
								  	<NavLink to="category/list">
          								Danh Mục
        							</NavLink>	
								</Menu.Item>
			              		<Menu.Item key="4">
								  	<NavLink to="category/create">
          								Thêm Danh Mục
        							</NavLink>	
								</Menu.Item>
			            	</SubMenu>
			            	<SubMenu key="sub3" icon={<UserOutlined />} title="User">
			              		<Menu.Item key="5">Người dùng</Menu.Item>
			            	</SubMenu>
			          	</Menu>
		        	</Sider>

		        	<Content style={{ padding: 24, minHeight: 280, backgroundColor: 'white' }}>
		        		 {<Outlet />}
		        	</Content>
		      	</Layout>
		    </Content>
		    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
		</Layout>
  	);
}

export default AdminLayout;
