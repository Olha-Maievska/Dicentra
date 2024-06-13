import { useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { stepsData } from './data'
import OrderContent from './components/OrderContent'
import OrderModal from './components/OrderModal'
import OrderProducts from './components/OrderProducts'

const Order = () => {
  const steps = stepsData
  const [activeStep, setActiveStep] = useState(0)
  const [content, setContent] = useState(steps[0].dataAtr)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setContent(steps[activeStep + 1].dataAtr)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
    setContent(steps[activeStep - 1].dataAtr)
  }

  const handleReset = () => {
    setActiveStep(0)
    setContent(steps[0].dataAtr)
  }

  return (
    <div className="pt-48 bg-light pb-28 font-roboto relative">
      <div className="container">
        <div className="flex  justify-between">
          <div className="w-[858px] h-[720px] border border-gold p-12 relative">
            <Box sx={{ width: '100%' }}>
              <Stepper activeStep={activeStep} className="h-10">
                {steps.map((step) => {
                  const stepProps: { completed?: boolean } = {}
                  return (
                    <Step
                      key={step.title}
                      {...stepProps}
                      sx={{
                        '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active':
                          {
                            color: '#292933',
                          },
                        '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root': {
                          color: '#FFF',
                          width: '34px',
                          height: '34px',
                        },
                        '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed':
                          {
                            color: '#292933',
                          },
                        '& .css-117w1su-MuiStepIcon-text': {
                          fill: '#000',
                        },
                        '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active .css-117w1su-MuiStepIcon-text':
                          {
                            fill: '#fff',
                          },
                      }}
                    >
                      <StepLabel>{step.title}</StepLabel>
                    </Step>
                  )
                })}
              </Stepper>

              <OrderContent
                content={content}
                activeStep={activeStep}
                steps={steps.length - 1}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            </Box>
          </div>
          <div>
            <OrderProducts />
          </div>
        </div>

        <OrderModal resetSteps={handleReset} />
      </div>
    </div>
  )
}

export default Order
