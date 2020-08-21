import React from "react";

import { Toolbar, Tooltip, IconButton,makeStyles, Chip, Typography } from "@material-ui/core";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import SearchIcon from '@material-ui/icons/Search';


import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SettingsIcon from '@material-ui/icons/Settings';



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

  const {  RowsSelected ,onSearch} = props;


  return (
   
      <Toolbar variant="dense" disableGutters className={classes.root} >
      <div className={classes.left}> 
      <Chip
      icon={<SearchIcon />}
      label="TÌM KIẾM"
      clickable
      className={classes.search} 
      onClick={onSearch}
      color="primary" 
      />
            <Typography variant="h6" component="h2" style={{width:"200px"}}>
            {RowsSelected.length>0?`${RowsSelected.length} dòng đã chọn`:null}
            </Typography>
    </div> 
      
     
     <div className={classes.right}> 
    

    <div>
     <IconButton   >
      <Tooltip   title="Xem chi tiết">
       <FindInPageIcon />
       </Tooltip>
     </IconButton> 
       <IconButton >
       <Tooltip title="Xóa">
         <DeleteOutlineIcon />
         </Tooltip> 
       </IconButton>
     
     </div>
     <div
     className={classes.setting}
     >     
      <IconButton>
        <Tooltip title="Export">
          <SaveAltIcon />
          </Tooltip>
        </IconButton>

        <IconButton>
        <Tooltip title="Cài đặt hiển thị">
          <SettingsIcon />
          </Tooltip>
        </IconButton>
      </div>
      </div>
       
      </Toolbar>
   
  );
};
export default ToolBar;
