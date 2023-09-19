import { Button } from "@/components/ui/button"
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export default function AddressDetails() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-center text-3xl">Address Details</CardTitle>
        <CardDescription className="text-center text-1xl">Please enter residential details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[49%] space-y-1.5">
              <Label >Course</Label>
              <Select>
                <SelectTrigger >
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Course</SelectLabel>
                    <SelectItem value="ADCA">Advnced Diploma in Computer Application</SelectItem>
                    <SelectItem value="DCA">Diploma in Computer Application</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex  flex-col w-[49%] space-y-1.5">
              <Label >Duration</Label>
              <Select>
                <SelectTrigger >
                  <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Duration</SelectLabel>
                    <SelectItem value="12M">12 Months</SelectItem>
                    <SelectItem value="6M">6 Months</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[49%] space-y-1.5">
              <Label htmlFor="rolno">Roll No</Label>
              <Input id="rollno" placeholder="Enter Roll No" />
            </div>
            <div className="flex  flex-col w-[49%] space-y-1.5">
              <Label htmlFor="ay">Academic Year</Label>
              <Input id="ay" type="number" min={2000} max={2050} step={1}  onChange={() => { }} placeholder="Enter Academic Year" />
            </div>
          </div>

        </div>
      </CardContent>
    </>
  )
}
