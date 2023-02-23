import React, { useState } from "react";
import {
  Grid,
  TextField,
  Box,
  Button,
  MenuItem,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import "../../App.css";
import { styled } from "@mui/material/styles";
const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});
function PositionDetailsStep(props) {
  const { activeStep, handleNext, handleBack, setFormValues, formValues } =
    props;
  const [potentialNameValid, setPotentialNameValid] = useState(true);
  const isItBecomeValid = function (event, bindValue) {
    if (event.target.value) {
      if (event.target.name == "potentialName") {
        setPotentialNameValid(true);
      }
    }
  };
  const formIsValid = function () {
    let flag = false;
    if (!formValues.potentialName) {
      flag = true;
      setPotentialNameValid(false);
    } else {
      setPotentialNameValid(true);
    }
    if (flag) {
      return false;
    }
    return true;
  };
  const validateForm = function () {
    if (!formIsValid()) {
      return;
    }
    handleNext();
  };
  const handleChange = function (event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFormValues((val) => {
      return {
        ...val,
        [`${fieldName}`]: value,
      };
    });
  };
  return (
    <>
      <Grid container spacing={2} sx={{ margin: "48px 0px" }}>
        <Grid item xs={12} sm={12}>
          <TextField
            variant="outlined"
            fullWidth
            select
            label="Requisition needed"
            name="requisitionNeeded"
            value={formValues.requisitionNeeded}
            onChange={handleChange}
          >
            <MenuItem value="yes" key="1">
              Yes
            </MenuItem>
            <MenuItem value="no" key="2">
              No
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="outlined"
            fullWidth
            label="Potential Name"
            name="potentialName"
            placeholder="Your potential name"
            value={formValues.potentialName}
            onChange={handleChange}
            onInput={isItBecomeValid}
            error={!potentialNameValid}
            helperText={
              !potentialNameValid && "The potential name field is required"
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="outlined"
            fullWidth
            label="Base Location"
            name="baseLocation"
            value={formValues.baseLocation}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="outlined"
            fullWidth
            label="Position"
            name="position"
            value={formValues.position}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            select
            label="Status"
            name="status"
            value={formValues.status}
            onChange={handleChange}
            placeholder="Select Status"
          >
            <MenuItem value="fullTime" key="1">
              Full Time
            </MenuItem>
            <MenuItem value="partTime" key="2">
              Part Time
            </MenuItem>
            <MenuItem value="consultant" key="3">
              Consultant
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FormLabel sx={{ color: "black" }}>Category</FormLabel>
            <RadioGroup
              row
              name="category"
              onChange={handleChange}
              value={formValues.category}
            >
              <FormControlLabel
                value="expatriate"
                control={<Radio sx={{ color: "black" }} />}
                label="Expatriate"
              />
              <FormControlLabel
                value="local"
                control={<Radio />}
                label="Local"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="outlined"
            fullWidth
            label="Directorate"
            name="directorate"
            value={formValues.directorate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="outlined"
            fullWidth
            label="Direct Supervisor"
            name="directSupervisor"
            value={formValues.directSupervisor}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="outlined"
            inputProps={{
              type: "number",
            }}
            fullWidth
            label="Number of vacancies"
            name="numberOfVacancies"
            value={formValues.numberOfVacancies}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            select
            label="Approved in HC plan"
            name="approvedInHCPlan"
            value={formValues.approvedInHCPlan}
            onChange={handleChange}
          >
            <MenuItem value="yes" key="1">
              Yes
            </MenuItem>
            <MenuItem value="no" key="2">
              No
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            select
            label="Manager"
            name="manager"
            value={formValues.manager}
            onChange={handleChange}
          >
            <MenuItem value="yes" key="1">
              Yes
            </MenuItem>
            <MenuItem value="no" key="2">
              No
            </MenuItem>
          </TextField>
        </Grid>
      </Grid>
      {
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={validateForm}>Next</Button>
          </Box>
        </React.Fragment>
      }
    </>
  );
}

export default PositionDetailsStep;
