import React from 'react'

function Product({ renderProduct,stt,onView,onEdit,onDelete }) {
  // console.log(renderProduct);
  const handleView = (product) => {
    onView(true,"View",product)
  }
  const handleEdit = (product) => {
    onEdit(true,"Update",product)
  }
  const handleDelete = (product) => {
    onDelete(product)
  }
  
  
  let sex="";
  if(renderProduct.sex==='true'){
    sex="Nam"
  }
  else {
    sex="Nữ"
  }
  return (
    <>
      <tr>
        <td>{stt} </td>
        <td>{renderProduct.studentId} </td>
        <td>{renderProduct.studentName} </td>
        <td>{renderProduct.age} </td>
        <td>{sex}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={() => handleView(renderProduct)}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
              onClick={() => handleEdit(renderProduct)}
            >
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text"
              onClick={() => handleDelete(renderProduct)}
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
     
    </>
  )
}

export default Product