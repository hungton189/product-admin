import './App.css';
import Menu from "./components/Menu/Menu"
import ProductList from "./components/ProductList/ProductList"

function App() {
	return (
		<div className="App">
			<Menu />
			<div className="container mt-50">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12">
						<button type="button" className="btn btn-primary">
							<i className="fas fa-plus mr-6"></i>
							Thêm sản phẩm
						</button>
					</div>
				</div>
				<div className="row mt-50">
					<div className="col-xs-12 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12">
						<ProductList />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
