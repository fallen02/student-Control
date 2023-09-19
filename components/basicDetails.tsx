import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
export default function BasicDetails() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-center text-3xl">Basic Details</CardTitle>
        <CardDescription className="text-center text-1xl">Please enter basic details</CardDescription>
      </CardHeader>
      <CardContent>

        <div className="grid w-full items-center gap-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fname">First name</Label>
              <Input id="fname" placeholder="Enter first name" required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mname">Middle Name (if any)</Label>
              <Input id="mname" placeholder="Enter middle name (if any)" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="lname">Last Name</Label>
              <Input id="lname" placeholder="Enter last name" required/>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="fatherName">Framework</Label>
            <Input id="fatherName" placeholder="Enter Father's name / Gurdian's name" required/>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input type="date" id="dob" onChange={(e) => console.log(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label >Sex</Label>
              <Select required>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select sex" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup >
                    <SelectLabel>Sex</SelectLabel>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="trans">Transgender</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                    <SelectItem value="pnos">Prefer not to say</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label >Religion</Label>
              <Select required>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select religion" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Religion</SelectLabel>
                    <SelectItem value="hinduism">Hinduism</SelectItem>
                    <SelectItem value="muslim">Muslim</SelectItem>
                    <SelectItem value="christian">Christian</SelectItem>
                    <SelectItem value="sikh">Sikh</SelectItem>
                    <SelectItem value="pnos">Prefer not to say</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label >Cast</Label>
              <Select required>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Cast" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Cast</SelectLabel>
                    <SelectItem value="GENAREL">Genarel</SelectItem>
                    <SelectItem value="SC">SC</SelectItem>
                    <SelectItem value="ST">ST</SelectItem>
                    <SelectItem value="OBC(A)">OBC(A)</SelectItem>
                    <SelectItem value="OBC(B)">OBC(B)</SelectItem>
                    <SelectItem value="pnos">Prefer not to say</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Student's Phone number</Label>
              <Input id="phone"
                type="tel"
                required
                placeholder="Enter Student's phone number"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="gphone">Gurdian's Phone number</Label>
              <Input id="gphone"
                type="tel"
                required
                placeholder="Enter Gurdian's phone number"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="addhar">Addhar No</Label>
              <Input id="addhar"
                type="text"
                maxLength={12}
                minLength={12}
                required
                title="12 digit addhar number"
                aria-describedby="addhar"
                aria-invalid="false"
                aria-errormessage="addhar"
                aria-required="true"
                placeholder="Enter Addhar No"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </>
  )
}
