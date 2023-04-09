import { UserInfo } from './UserInfo';
import CurrentUserLoader from './CurrentUserLoader';
import UserLoader from './UserLoader';

function App() {

	return (
		<>
			<UserLoader userId="456">
				<UserInfo />
			</UserLoader>
		</>
	);
}

export default App;
