import React from 'react'
import Product from './Product'

function ListProduct({renderProduct,onView,onEdit,onDelete}) {
  const handeleView =(toggle,action,product)=>{
    onView(toggle,action,product)
  }
  const handleEdit =(toggle,action,product)=>{
    onEdit(toggle,action,product)
  }
  const handleDelete =(product)=>{
    onDelete(product)
  }
  let elementProduct=renderProduct.map((product,index)=>{
    return <Product key={index}
    stt={index+1}
    renderProduct={product}
      onView={handeleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  })
  return (
    <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Mã sinh viên</th>
                        <th>Tên sinh viên</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                     {/* <Product/> */}
                     {elementProduct}
                    </tbody>
                  </table>
                </div>
              </div>
  )
}

export default ListProduct