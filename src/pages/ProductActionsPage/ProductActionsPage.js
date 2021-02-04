import {useParams} from "react-router-dom"
function ProductActionsPage() {
    const {id} = useParams()
    console.log(id);
	return (
    <div className="row">
        <div className="col-xs-6 col-sm-6 col-xs-6 col-md-6 col-lg-6 col-xl-6">
            <div class="form-group">
              <label >Tên Sản Phẩm:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label >Giá:</label>
              <input type="number" class="form-control" />
            </div>
            <label >Tình trạng:</label>
            <div class="form-check">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" checked/>
                    Còn hàng
                </label>
            </div>
            <button type="submit" class="btn btn-primary mt-20">Lưu lại</button>
        </div>
    </div>
	);
}

export default ProductActionsPage;
