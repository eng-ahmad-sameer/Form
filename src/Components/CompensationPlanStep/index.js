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
  InputAdornment,
  Paper,
  Input,
  InputLabel,
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

function CompensationPlanStep(props) {
  const { activeStep, handleNext, handleBack, setFormValues, formValues } =
    props;
  const [salaryStartingPointValid, setSalaryStartingPointValid] =
    useState(true);
  const [candidateCurrentSalaryValid, setCandidateCurrentSalaryValid] =
    useState(true);
  const isItBecomeValid = function (event) {
    if (event.target.value) {
      if (event.target.name == "candidateCurrentSalary") {
        setCandidateCurrentSalaryValid(true);
      }
      if (event.target.name == "salaryStartingPoint") {
        setSalaryStartingPointValid(true);
      }
    }
  };
  const formIsValid = function () {
    let flag = false;
    if (!formValues.salaryStartingPoint) {
      flag = true;
      setSalaryStartingPointValid(false);
    } else {
      setSalaryStartingPointValid(true);
    }
    if (!formValues.candidateCurrentSalary) {
      flag = true;
      setCandidateCurrentSalaryValid(false);
    } else {
      setCandidateCurrentSalaryValid(true);
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
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            select
            label="Grade"
            name="grade"
            value={formValues.grade}
            onChange={handleChange}
          >
            <MenuItem value="gradeA" key="1">
              Grade A
            </MenuItem>
            <MenuItem value="gradeB" key="2">
              Grade B
            </MenuItem>
            <MenuItem value="gradeC" key="3">
              Grade C
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="outlined"
            fullWidth
            label="Salary Starting Point"
            name="salaryStartingPoint"
            value={formValues.salaryStartingPoint}
            onChange={handleChange}
            inputProps={{
              type: "number",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₪</InputAdornment>
              ),
            }}
            onInput={isItBecomeValid}
            error={!salaryStartingPointValid}
            helperText={
              !salaryStartingPointValid &&
              "The salary starting point field is required"
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="outlined"
            fullWidth
            label="Candidate’s Current Salary"
            name="candidateCurrentSalary"
            value={formValues.candidateCurrentSalary}
            onChange={handleChange}
            onInput={isItBecomeValid}
            inputProps={{
              type: "number",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₪</InputAdornment>
              ),
            }}
            error={!candidateCurrentSalaryValid}
            helperText={
              !candidateCurrentSalaryValid &&
              "The candidate current salary field is required"
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="outlined"
            fullWidth
            label="Relevant Experience"
            name="relevantExperience"
            inputProps={{
              type: "number",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">%</InputAdornment>
              ),
            }}
            helperText="2% ‐ 4% Per Year"
            value={formValues.relevantExperience}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            select
            label="Job Scarcity"
            name="jobScarcity"
            value={formValues.jobScarcity}
            onChange={handleChange}
            placeholder="Select Job Scarcity"
          >
            <MenuItem value="percent" key="1">
              Percent
            </MenuItem>
            <MenuItem value="value" key="2">
              Value
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="outlined"
            fullWidth
            label="Education"
            name="education"
            inputProps={{
              type: "number",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">%</InputAdornment>
              ),
            }}
            helperText="Up to 15% on starting salary"
            value={formValues.education}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <fieldset
            style={{
              borderRadius: "4px",
              borderColor: "#fff",
              marginTop: "-20px",
              padding: "10px 8px",
            }}
          >
            <legend
              style={{
                color: "rgb(89,89,89)",
                fontSize: "1rem",
                fontWeight: "400",
              }}
            >
              Expected Salary
            </legend>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <StyledTextField
                variant="outlined"
                fullWidth
                label="From"
                name="fromSalary"
                value={formValues.fromSalary}
                onChange={handleChange}
                inputProps={{
                  type: "number",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₪</InputAdornment>
                  ),
                }}
              />
              <span>-</span>
              <StyledTextField
                variant="outlined"
                fullWidth
                label="To"
                name="toSalary"
                value={formValues.toSalary}
                onChange={handleChange}
                inputProps={{
                  type: "number",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₪</InputAdornment>
                  ),
                }}
              />
            </div>
          </fieldset>
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

export default CompensationPlanStep;
