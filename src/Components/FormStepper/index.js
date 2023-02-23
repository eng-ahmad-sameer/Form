import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepLabel from "@mui/material/StepLabel";
import PositionDetailsStep from "../PositionDetailsStep";
import CompensationPlanStep from "../CompensationPlanStep";
import BenefitsStep from "../BenefitsStep";
import "../../App.css";
import FinishPage from "../FinishPage";

const steps = ["Position Details", "Compensation Plan", "Benefits"];

function FormStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    potentialName: "",
    baseLocation: "",
    position: "",
    requisitionNeeded: "",
    status: "",
    category: "",
    directorate: "",
    directSupervisor: "",
    numberOfVacancies: "",
    approvedInHCPlan: "",
    manager: "",
    grade: "",
    salaryStartingPoint: "",
    candidateCurrentSalary: "",
    relevantExperience: "",
    jobScarcity: "",
    education: "",
    fromSalary: "",
    toSalary: "",
    healthInsurance: "",
    lifeInsuranceForTheCandidate: "",
    annualPerformanceBonus: "",
    workLocationAllowance: "",
    transportationAllowance: "",
    otherAllowances: "",
    exEmployee: "",
    justificationForHiring: "",
  });
  const handleNext = function () {
    setActiveStep(activeStep + 1);
    console.log("next");
  };
  const handleBack = function () {
    setActiveStep(activeStep - 1);
    console.log("next");
  };
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <PositionDetailsStep
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            setFormValues={setFormValues}
            formValues={formValues}
          />
        );
      case 1:
        return (
          <CompensationPlanStep
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            setFormValues={setFormValues}
            formValues={formValues}
          />
        );
      case 2:
        return (
          <BenefitsStep
            a
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            setFormValues={setFormValues}
            formValues={formValues}
          />
        );
      case 3:
        return <FinishPage />;
      default:
        throw new Error("Unknown step");
    }
  };
  return (
    <Box sx={{ my: 5 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {handleSteps(activeStep)}
    </Box>
  );
}

export default FormStepper;
