import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"

export default function EducationalDetails() {
    const sigData_INITIAL = {
        examName: "",
        instituteName: "",
        Examstatus: "",
        passingYear: "",
        totalMark: "",
        markObtained: "",
    }
    const eduData_INITIAL: any[] | (() => any[]) = []
    const [eduData, setEduData] = useState(eduData_INITIAL)
    const [sigData, setsigData] = useState(sigData_INITIAL)

    const handleSave = () => {
        setEduData([...eduData, sigData])
        setsigData(sigData_INITIAL)
    }

    const handleDelete = (index: number) => {
        const temp = [...eduData]
        temp.splice(index, 1)
        setEduData(temp)
        console.log(eduData)
    }

    const PopupMenu = ({type}: { type: 'add' | 'edit'}) => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" type="button">Add</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Enter Educational Details</DialogTitle>
                        <DialogDescription>
                            Make changes and add when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="exname" className="text-right">Exam Name</Label>
                            <Input id="exname" className="col-span-3" placeholder="Enter the Exam name" onChange={e => setsigData({ ...sigData, examName: e.target.value })} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="institute" className="text-right">Institute or School</Label>
                            <Input id="institute" className="col-span-3" placeholder="Enter the name of the Institute or School" onChange={e => setsigData({ ...sigData, instituteName: e.target.value })} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Status</Label>
                            <div className="col-span-2">
                                <Select onValueChange={e => setsigData({ ...sigData, Examstatus: e })}>
                                    <SelectTrigger >
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Status</SelectLabel>
                                            <SelectItem value="Passed">Passed</SelectItem>
                                            <SelectItem value="Failed">Failed</SelectItem>
                                            <SelectItem value="Appeared">Appeared</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="passingyear" className="text-right">Passing Year</Label>
                            <Input id="passingyear" className="col-span-3" placeholder="Enter Passing Year" onChange={e => setsigData({ ...sigData, passingYear: e.target.value })} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="totalmark" className="text-right">Total Mark</Label>
                            <Input id="totalmark" className="col-span-3" placeholder="Enter total mark of the Exam." onChange={e => setsigData({ ...sigData, totalMark: e.target.value })} />
                        </div><div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="markobtained" className="text-right">Mark Obtailed</Label>
                            <Input id="markobtained" className="col-span-3" placeholder="Total mark obtailed" onChange={e => setsigData({ ...sigData, markObtained: e.target.value })}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleSave}>Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }


    return (
        <>
            <CardHeader>
                <CardTitle className="text-center text-3xl">Educational Details</CardTitle>
                <CardDescription className="text-center text-1xl">Please enter educational details</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex w-full items-center gap-4">
                    <Table>
                        <TableCaption className="px-11">
                            <PopupMenu type='add' />
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">Index</TableHead>
                                <TableHead>Exam Name</TableHead>
                                <TableHead>Institute / School</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Year</TableHead>
                                <TableHead className="text-right">Percent</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        {/*  */}
                        <TableBody>
                            {eduData.map((edu, Index) => (
                                <TableRow key={Index}>
                                    <TableCell className="font-medium">{Index + 1}</TableCell>
                                    <TableCell>{edu.examName}</TableCell>
                                    <TableCell>{edu.instituteName}</TableCell>
                                    <TableCell>{edu.Examstatus}</TableCell>
                                    <TableCell>{edu.passingYear}</TableCell>
                                    <TableCell className="text-right">{((parseInt(edu.markObtained) / parseInt(edu.totalMark)) * 100).toFixed(2)}%</TableCell>
                                    <TableCell className="text-right"><PopupMenu type="edit" /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>
            </CardContent>
        </>
    )
}
