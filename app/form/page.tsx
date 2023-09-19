"use client"
import { FormEvent } from "react"
import AddressDetails from "@/components/addressDetails"
import BasicDetails from "@/components/basicDetails"
import CourseDetails from "@/components/courseDetails"
import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import { useMultistepForm } from "@/utils/formMulti"



export default function CardWithForm() {
  const { step, steps, currentStepIndex, next, goTo, back, isFirstStep, isLastStep } = useMultistepForm([
    <BasicDetails key={0} />,
    <AddressDetails key={1} />,
    <CourseDetails key={2} />
  ])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if(!isLastStep) next()
    else console.log("Form Submitted")
  }

  return (
    <div className="h-full grid justify-center pt-8">
      <Card className="w-[800px]">
        <form onSubmit={handleSubmit} action="">
          {step}
          <CardFooter className="flex justify-between items-end">
            <div className="">
              {!isFirstStep && <Button type="button" variant="secondary" onClick={back}>Back</Button>}
            </div>
            <div className="items-end">
              <Button variant="outline">{isLastStep ? 'Save' : 'Next'}</Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}