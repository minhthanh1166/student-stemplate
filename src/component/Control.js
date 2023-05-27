import React, { useState } from 'react'

function Control({onAdd,onSearch,onSort}) {
  const handleAdd=(product)=>{
    onAdd(true,"Save",product)
  }
  const [keyword,setKeyword]=useState('')
  const handleSeach=()=>{
      onSearch(keyword)
  }
  // const [sort,setSort]=useState("NAME-ASC")
  const handleSort=(param)=>{
  
    onSort(param)
    // setSort(param.toUpperCase())
    // console.log('a',arr);
    onSort(param)
  }
  return (
    <div className="row">
    <div className="col-3 ">
      <button type="button" className="btn btn-primary btn-icon-text"
      onClick={handleAdd}
      >
        Thêm mới sinh viên
      </button>
    </div>
    <div className="col-6 ">
      <form className="search-form" action="#">
        <i className="icon-search" />
        <input
          type="search"
          className="form-control"
          placeholder="Search MSV"
          title="Search here"
          value={keyword}
          onChange={(ev)=>setKeyword(ev.target.value)}
        />
        <button className="btn btn-primary btn-icon-text"
        onClick={handleSeach}
        >
          Tìm kiếm
        </button>
      </form>
    </div>
    <div className="col-3 d-flex align-items-center">
      <select className="form-control" onClick={handleSort}>
        <option >Sắp xếp</option>
        <option value={"name-asc"}>Name-ASC</option>
        <option value={"name-desc"}>Name-DESC</option>
        <option value={"age-asc"} >AGE-ASC </option>
        <option value={"age-desc"} >AGE-DESC </option>
      </select>
    </div>
  </div>
  )
}

export default Control