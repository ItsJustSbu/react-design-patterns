import { UserInfo } from './UserInfo';
import ResourceLoader from './ResourceLoader';
import { ProductInfo } from './ProductInfo';

function App() {

	return (
		<>
			<ResourceLoader ResourceUrl={"/users/123"} ResourceName={"user"}>
				<UserInfo />
			</ResourceLoader>
			<ResourceLoader ResourceUrl={"/products/9012"} ResourceName={"product"}>
				<ProductInfo />
			</ResourceLoader>
		</>
	);
}

export default App;
