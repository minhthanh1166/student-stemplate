import React, { forwardRef, useEffect, useState } from 'react'
import Control from './component/Control'
import ListProduct from './component/ListProduct'
import Form from './component/Form'

function App() {
  const students = [
    {
      studentId: "SV001",
      studentName: "Nguyễn Văn A",
      age: 20,
      sex: true,
      birthDate: "2002-04-23",
      birthPlace: "HN",
      address: "25, Vũ Ngọc Phan"
    },
    {
      studentId: "SV002",
      studentName: "Nguyễn Văn B",
      age: 21, sex: false,
      birthDate: "2001-09-09",
      birthPlace: "ĐN",
      address: "1, Ngô Quyền"
    },
    {
      studentId: "SV003",
      studentName: "Nguyễn Văn C",
      age: 19,
      sex: true,
      birthDate: "2003-07-07",
      birthPlace: "HCM",
      address: "1, Lý Tự Trọng"
    },
    {
      studentId: "SV004",
      studentName: "Nguyễn Văn D",
      age: 29,
      sex: false,
      birthDate: "2005-07-07",
      birthPlace: "HCM",
      address: "1, Lý Tự Trọng"
    },
  ]
  let initProduct = {
    studentId: "",
    studentName: " ",
    age: 0,
    sex: true,
    birthDate: "",
    birthPlace: "",
    address: ""
  }
  const [products, setProducts] = useState(() => {
    const lists = JSON.parse(localStorage.getItem("student"));
    if (lists === null) {
      return students;
    }
    else {
      return lists
    }
  })
  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(products))
  }, [products])
  const [product, setProduct] = useState(initProduct)
  const [isToggle, setToggle] = useState(false)
  const [actionName, setActionName] = useState('ADD')
  const handeAdd = (toggle, actionName) => {
    setToggle(toggle)
    setActionName(actionName)
  }
  const handeleView = (toggle, actionName, product) => {
    // console.log(toggle, actionName, product);
    setToggle(toggle)
    setActionName(actionName)
    if (product !== null) {
      setProduct(product)
    }
  }
  const handleEdit = (toggle, actionName, product) => {
    setToggle(toggle)
    setActionName(actionName)
    if (product !== null) {
      setProduct(product)
    }
  }
  const handleDelete = (product) => {
    setProducts(prev => {
      return prev.filter(x => x.studentId !== product.studentId)
    })
  }
  const handleSubmit = (product) => {
    if (actionName === "Save") {
      setProducts(prev => {
        // console.log( prev[prev.length -1]);
        // let productIdAdd = prev.length <= 0 ? 1 : prev[prev.length -1].studentId + 1;
        const productAdd = {
          studentId: product.studentId,
          studentName: product.studentName,
          age: product.age,
          sex: product.sex,
          birthDate: product.birthDate,
          birthPlace: product.birthPlace,
          address: product.address
        }

        return [...prev, productAdd]
      })
    }
    else if (actionName === "Update") {
      setProducts(prev => {
        for (let index = 0; index < prev.length; index++) {
          if (prev[index].studentId === product.studentId) {
            prev[index] = product
            break
          }
        }
        return [...prev]
      })
    }

  }
  const [dataSearch, setDataSearch] = useState([])
  useEffect(() => {
    setDataSearch(products)
  }, [products])
  const handleSeach = (data) => {
    if (data !== '') {
      setDataSearch(prev => {

        return prev.filter(x => x.studentId.toLowerCase().includes(data)
        )
      })
    }
    else {
      setDataSearch(products)

    }
  }
  const handleSort = (param) => {
    let value =param.target.value;
    let arr=value.split('-')
    if (arr[0] === 'name') {
      if (arr[1] === 'asc') {
        setProducts(prev => {
          prev.sort((a, b) => {
            let x = a.studentName.toLowerCase();
            let y = b.studentName.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
          });
          return [...prev];
        })
      }
      else {
        setProducts(prev => {
          prev.sort((a, b) => {
            let x = a.studentName.toLowerCase();
            let y = b.studentName.toLowerCase();
            if (x < y) { return 1; }
            if (x > y) { return -1; }
            return 0;
          });
          return [...prev];
        })
      }
    }
    if(arr[0]==="age"){
      if(arr[1]==='asc'){
        setProducts(prev=>{
          prev.sort((a,b)=>(a.age-b.age))
          return [...prev];
        })
        
      }
      else{
          setProducts(prev=>{
            prev.sort((a,b)=>(b.age-a.age))
            return [...prev];
          })
      }
    }
  }
  const elementForm = isToggle ? <Form
    renderProduct={product}
    actionName={actionName}
    onSubmit={handleSubmit}
  /> : "";
  return (
    <div className='container-fuild'>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <div className="card-header">
              <Control onAdd={handeAdd}
                onSearch={handleSeach}
                onSort={handleSort}
              />
            </div>
            <ListProduct renderProduct={dataSearch}
              onView={handeleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

          </div>
        </div>
        <div className="col-5 grid-margin">
          <div className="card">
            {/* <Form /> */}
            {elementForm}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App