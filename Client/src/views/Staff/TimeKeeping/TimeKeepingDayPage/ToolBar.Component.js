import React from "react";

import { Toolbar, Tooltip, IconButton,makeStyles, Chip, Typography } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import FindInPageIcon from "@material-ui/icons/FindInPage";

import ExposureIcon from '@material-ui/icons/Exposure';
import NoteAddIcon from '@material-ui/icons/NoteAdd';


import SearchIcon from "@material-ui/icons/Search";



const useStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: "4px",
      paddingRight:"4px",
    },
    left: {
        flexGrow: 1,
        display:"flex"
    },
    search:{
        marginRight:theme.spacing(3)
    },
    right: {
     display:"flex"
    },
    setting:{
        marginLeft:theme.spacing(5)
    }
  }));



const ToolBar = (props) => {

    const classes = useStyles();

  const {   RowsSelected ,searchDataTimeKeeping,onCalculateTimeKeeping} = props;


  
  const checkCalculate=()=>{
    return RowsSelected.some((element)=>element.Status!=="DA_TINH_CONG")
  }

  return (
   
      <Toolbar variant="dense" disableGutters className={classes.root} >
      <div className={classes.left}> 
         <Chip
            icon={<SearchIcon />}
            label="TÌM KIẾM"
            clickable
            className={classes.search} 
            onClick={searchDataTimeKeeping}
            color="primary" 
            />
            <Typography variant="h6" component="h2" style={{width:"200px"}}>
            { RowsSelected.length>0?`${RowsSelected.length} dòng đã chọn`:null
          }
            </Typography>

          
  
    </div> 
      
     
     <div className={classes.right}> 
    

    <div>
    <Chip
    onClick={onCalculateTimeKeeping}
    icon={<ExposureIcon />}
    label="TÍNH NGÀY CÔNG"
    clickable 
    disabled={!checkCalculate()}
    className={classes.search} 
    color="primary" 
    />




     <IconButton disabled={RowsSelected.length!==1?true:false}  >
      <Tooltip   title="Xem chi tiết"  >
       <FindInPageIcon />
       </Tooltip>
     </IconButton>
     <Tooltip title="Thêm dữ liệu chấm công">
     <IconButton>
       <NoteAddIcon />
     </IconButton>
     </Tooltip>
     
     <IconButton disabled={RowsSelected.length!==1?true:false} >
     <Tooltip title="Sửa"  >
       <CreateIcon />
       </Tooltip>     
     </IconButton>
  
       <IconButton disabled={RowsSelected.length<=0?true:false} >
       <Tooltip title="Xóa">
         <DeleteOutlineIcon />
         </Tooltip> 
       </IconButton>
     
     </div>
     <div
     className={classes.setting}
     >     
      </div>
      </div>
       
      </Toolbar>
   
  );
};
export default ToolBar;




