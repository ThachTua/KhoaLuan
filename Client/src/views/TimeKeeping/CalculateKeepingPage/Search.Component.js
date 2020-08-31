import React, { useEffect, useState } from "react";

import OrgStructureAPI from "../../../api/cat_org_structure.api";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1),
    //textAlign: "center",
  },
  date1: {
    width: theme.spacing(26),
    marginRight: theme.spacing(2),
  },
  date2: {
    width: theme.spacing(26),
  },
}));

const Search = (props) => {
  const [OrgStructure, setOrgStructure] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const resultOrg = await OrgStructureAPI.get({
        all: 1,
        fields: { Code: 1, ID: 1, OrgStructureName: 1 },
      });
      setOrgStructure(resultOrg.data);
    };
    fetchAPI();
  }, []);
  const classes = useStyles();

  const { Filter, setFilter } = props;

  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid className={classes.paper} container spacing={2}>
        {
          // <Grid item xs={3}>
          //   Mã nhân viên
          // <TextField
          //     value={!Filter.CodeEmp ? "" : Filter.CodeEmp}
          //     onChange={(event) => {
          //       if ("" !== event.target.value.trim())
          //         return setFilter({
          //           ...Filter,
          //           ...{ CodeEmp: event.target.value.trim() },
          //         });
          //       const { CodeEmp, ...FilterNew } = Filter;
          //       setFilter(FilterNew);
          //     }}
          //     placeholder="Vui lòng nhập"
          //     variant="outlined"
          //     size="small"
          //     fullWidth
          //   />
          // </Grid>
          // <Grid item xs={3}>
          //   Tên nhân viên
          // <TextField
          //     value={!Filter.ProfileName ? "" : Filter.ProfileName}
          //     onChange={(event) => {
          //       if ("" !== event.target.value.trim())
          //         return setFilter({
          //           ...Filter,
          //           ...{ ProfileName: event.target.value.trim() },
          //         });
          //       const { ProfileName, ...FilterNew } = Filter;
          //       setFilter(FilterNew);
          //     }}
          //     variant="outlined"
          //     size="small"
          //     fullWidth
          //   />
          // </Grid>
        }

        <Grid item xs={3}>
          Phòng ban
          {
            <Autocomplete
              options={OrgStructure}
              onChange={(event, item) => {
                if (item)
                  return setFilter({
                    ...Filter,
                    ...{ OrgStructureID: item.ID },
                  });
                const { OrgStructureID, ...FilterNew } = Filter;
                setFilter(FilterNew);
              }}
              getOptionLabel={(option) =>
                `${option.OrgStructureName}-${option.Code}`
              }
              renderInput={(params) => (
                <TextField {...params} size="small" variant="outlined" />
              )}
            />
          }
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
            Kì công
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  // clearable
                  size="small"
                  fullWidth={false}
                  className={classes.date1}
                  emptyLabel="Kì công"
                  views={["year", "month"]}
                  maxDate={MaxMonth}
                  format="MM/yyyy"
                  value={!Filter.KiCong ? MaxMonth : Filter.KiCong}
                  onChange={(date) => {
                    if (date)
                      return setFilter({
                        ...Filter,
                        ...{ KiCong: date },
                      });
                    const { KiCong, ...FilterNew } = Filter;
                    setFilter(FilterNew);
                  }}
                />
              </div>
            </MuiPickersUtilsProvider>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;

const MaxMonth = new Date();
MaxMonth.setDate(1);
MaxMonth.setDate(MaxMonth.getDate() - 1);
