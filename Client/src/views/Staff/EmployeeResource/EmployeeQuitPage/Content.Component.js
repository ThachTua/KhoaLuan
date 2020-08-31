import React from "react";

import CIcon from "@coreui/icons-react";
import { cilBan } from "@coreui/icons";

import { CDataTable  } from "@coreui/react";
import { CircularProgress } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "grid",
    padding: "4px",
    borderRadius: "4px",
    backgroundColor: "#e8eaf5",
  },
  jss1:{
    overflow: "auto",
    maxWidth:"100%",
    backgroundColor: "#fff",
    borderRadius: "4px",
    height:"80vh"
  },
  table:{
    borderRadius: "4px",
  }
}));







const Content = (props) => {

  const {data,fields,RowSelected,setRowSelected,isLoading}=props

  const dataRender= data.map((item)=>{
    if(item._id===RowSelected._id)
        return {...item,_classes:"selected"}
     return item
  })

  const classes = useStyles();

  const onSelectRow=(row)=>{
    if(RowSelected&&row.CodeEmp===RowSelected.CodeEmp){
      return setRowSelected({})
    }
    setRowSelected(row)
  }

  return (

    <div className={classes.root}>
    <div className={classes.jss1}>
      <CDataTable
        addTableClasses={classes.table}
        fields={fields}
        items={dataRender}
        pagination={data.length > 20 ? true : false}
        itemsPerPage={20}
        border
        hover
        striped
        size="sm"
        onRowClick={onSelectRow}
        loadingSlot={Loading}
        noItemsViewSlot={isLoading?Loading:noItemView}
      />
      </div>
    </div>

  );
};
export default Content;



const noItemView= (
  <div className="text-center my-5 ">
  <h2>
    { "Không có dữ liệu" }
    <CIcon
      width="30"
      name="cilBan"
      content={cilBan}
      className="text-danger mb-2"
    />
  </h2>
</div>)

const Loading= (
  <div className="text-center my-5 ">
  <h2>
    { "Đang tải dữ liệu" }
    <CircularProgress />
  </h2>
</div>)
