import React, { useEffect, useState } from 'react'

function Form({ actionName, renderProduct,onSubmit }) {

  const [product, setProduct] = useState(renderProduct)
  useEffect(() => {
    console.log(renderProduct);
    setProduct(renderProduct)
  }, [renderProduct])
  const handleChage = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    setProduct(product => {
      return {
        ...product,
        [name]: value
      }
    })
  }
  const handleSubmit=((ev) => {
    ev.preventDefault();
    onSubmit(product)
  })

  return (
    <div className="card-body">
      <h3 className="card-title">Thông tin sinh viên</h3>
      <form className="form-sample" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Mã sinh viên</label>
          <div className="col-sm-9">
            <input type="text" className="form-control"
              name='studentId'
              value={product.studentId}
              onChange={handleChage}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Tên sinh viên</label>
          <div className="col-sm-9">
            <input type="text" className="form-control"
              name='studentName'
              value={product.studentName}
              onChange={handleChage}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Tuổi</label>
          <div className="col-sm-9">
            <input type="text" className="form-control"
              name='age'
              value={product.age}
              onChange={handleChage} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Giới tính</label>
          <div className="col-sm-9">
            <select className="form-control"
              name='sex'
              value={product.sex}
              onChange={handleChage}
            >
              <option value={true} >Nam</option>
              <option value={false}>Nữ</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Ngày sinh</label>
          <div className="col-sm-9">
            <input className="form-control" placeholder="dd/mm/yyyy"
              name='birthDate'
              value={product.birthDate}
              onChange={handleChage} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Nơi sinh</label>
          <div className="col-sm-9">
            <select className="form-control"
              name='birthPlace'
              value={product.birthPlace}
              onChange={handleChage}
            >
              <option value={"HN"}>Hà Nội</option>
              <option value={"HCM"}>TP. Hồ Chí Minh</option>
              <option value={"DN"}>Đà Nẵng</option>
              <option value={"QN"}>Quảng Ninh</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Địa chỉ</label>
          <div className="col-sm-9">
            <textarea className="form-control"
              name='address'
              value={product.address}
              onChange={handleChage} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary me-2">
          {/* Submit */}
          {actionName}
        </button>
      </form>
    </div>
  )
}

export default Form