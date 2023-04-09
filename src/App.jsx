import { UserInfo } from './UserInfo';
import DataSource from './DataSource';
import { ProductInfo } from './ProductInfo';
import axios from 'axios';

function App() {

	return (
		<>
			<DataSource getDataFunction={
				async () =>{
					const response = await axios.get("/users/123");
					return response.data;
				}
			} ResourceName={"user"}>
				<UserInfo />
			</DataSource>
			
			<DataSource getDataFunction={
				async () =>{
					const response = await axios.get("/products/9012");
					return response.data;
				}
			} ResourceName={"product"}>
				<ProductInfo />
			</DataSource>
		</>
	);
}

export default App;
