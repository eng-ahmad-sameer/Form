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
  IconButton,
  Typography,
} from "@mui/material";
import CloudUpload from "@mui/icons-material/CloudUpload";
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

function BenefitsStep(props) {
  const { activeStep, handleNext, handleBack, setFormValues, formValues } =
    props;
  const [justificationForHiringValid, setJustificationForHiringValid] =
    useState(true);
  const isItBecomeValid = function (event) {
    if (event.target.value) {
      if (event.target.name == "justificationForHiring") {
        setJustificationForHiringValid(true);
      }
    }
  };
  const formIsValid = function () {
    let flag = false;
    if (!formValues.justificationForHiring) {
      flag = true;
      setJustificationForHiringValid(false);
    } else {
      setJustificationForHiringValid(true);
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
            label="Health Insurance"
            name="healthInsurance"
            value={formValues.healthInsurance}
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
            label="Life Insurance for the candidate"
            name="lifeInsuranceForTheCandidate"
            value={formValues.lifeInsuranceForTheCandidate}
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
            label="Annual Performance Bonus"
            name="annualPerformanceBonus"
            value={formValues.annualPerformanceBonus}
            onChange={handleChange}
          >
            <MenuItem value="1-2%" key="1">
              1-2%
            </MenuItem>
            <MenuItem value="3-4%" key="2">
              3-4%
            </MenuItem>
            <MenuItem value="5-6%" key="3">
              5-6%
            </MenuItem>
            <MenuItem value="Above 6%" key="4">
              Above 6%
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            select
            label="Work Location Allowance"
            name="workLocationAllowance"
            value={formValues.workLocationAllowance}
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
            label="Transportation Allowance"
            name="transportationAllowance"
            value={formValues.transportationAllowance}
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
            label="Other Allowances"
            name="otherAllowances"
            value={formValues.otherAllowances}
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
        <Grid item xs={12} sm={12}>
          <TextField
            variant="outlined"
            fullWidth
            select
            label="Ex‐Employee"
            name="exEmployee"
            value={formValues.exEmployee}
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
            multiline
            rows={4}
            label="Justification for hiring"
            name="justificationForHiring"
            value={formValues.justificationForHiring}
            onChange={handleChange}
            onInput={isItBecomeValid}
            error={!justificationForHiringValid}
            helperText={
              !justificationForHiringValid &&
              "The justification for hiring field is required"
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <fieldset
            style={{
              borderRadius: "4px",
              borderColor: "#fff",
              height: "125px",
              marginTop: "-10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <legend
              style={{
                color: "rgb(89,89,89)",
                fontSize: "1rem",
                fontWeight: "400",
              }}
            >
              Attachments
            </legend>
            <Typography variant="subtitle1" align="center">
              There is nothing attached
            </Typography>
            <IconButton
              variant="contained"
              component="label"
              sx={{ height: "fit-content" }}
            >
              <CloudUpload fontSize="large" />
              <input hidden accept="image/*" multiple type="file" />
            </IconButton>
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
            <Button onClick={validateForm}>Finish</Button>
          </Box>
        </React.Fragment>
      }
    </>
  );
}

export default BenefitsStep;
