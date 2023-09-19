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
import { useMultistepForm } from "@/utils/formMulti"
import { MouseEventHandler, RefAttributes } from "react"

type Props = {
  next: MouseEventHandler<HTMLButtonElement>

}

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
              <Label htmlFor="vill">Village's Name</Label>
              <Input id="vill" placeholder="Enter Village's name" />
            </div>
            <div className="flex  flex-col w-[49%] space-y-1.5">
              <Label htmlFor="po">Post Office</Label>
              <Input id="po" placeholder="Enter Post Office" />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[49%] space-y-1.5">
              <Label htmlFor="ps">Police Station</Label>
              <Input id="ps" placeholder="Enter Police Station's name" />
            </div>
            <div className="flex  flex-col w-[49%] space-y-1.5">
              <Label htmlFor="dist">District</Label>
              <Input id="dist" placeholder="Enter District's name" />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[49%] space-y-1.5">
              <Label htmlFor="state">State</Label>
              <Input id="state" placeholder="Enter State's name" />
            </div>
            <div className="flex  flex-col w-[49%] space-y-1.5">
              <Label htmlFor="pin">PIN</Label>
              <Input id="pin" type="number" maxLength={6} minLength={6}
                // @ts-ignore
                pattern="[0-9]{6}"
                // @ts-ignore
                title="PIN code must be 6 digits"
                // @ts-ignore
                required
                // @ts-ignore
                autoComplete="off" placeholder="Enter PIN code" />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[49%] space-y-1.5">
              <Label htmlFor="nation">Nationality</Label>
              <Input id="nation" placeholder="Enter Nationality" />
            </div>
          </div>

        </div>
      </CardContent>
    </>
  )
}
