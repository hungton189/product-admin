import './App.css';
import Menu from "./components/Menu/Menu"
import routes from "./routes"
import {Switch,Route,BrowserRouter as Router} from "react-router-dom"

function App() {
	const showContentMenu = (routes)=>{
		let result = null;
		result = routes.map((route,index)=>{
			return (
				<Route
				key={index}
				path={route.path}
				component={route.main}
				exact={route.exact}
				/>
			)
		})
		return <Switch>{result}</Switch>
	}
	return (
		<Router>
			<div className="App">
				<Menu />
				<div className="container mt-50">
					{showContentMenu(routes)}
				</div>
			</div>
		</Router>
	);
}

export default App;
