// fetch("/api/auth/register", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         email: values.email,
//         password: values.password,
//     })
"use client"
import React from 'react'

export default function page() {
  const data = {
    name: "One",
    father_name: "uday bhunia",
    religion: "hindu",
    sex: "male",
    PhoneNo: "8972649079",
    AddharNo: "89452889345",
    rollNo: "RTNY-1022",
    academicYear: "2021",
    address: {
      create: {
        vill: "Hello World",
        PO: "Hello World",
        PS: "Hello World",
        district: "Hello World",
        PIN: 743373,
        nationliaty: "Indian"
      }
    },
    course: {
      create: {
        courseName: "ACDA",
        duration: 12,
        totalfees: 5800,
        Startingmonth: 1,
        PaidMonths: 12,
      }
    },
    education: {
      create: [
        {
          ExamName: "MP",
          PassingInstitute: "NNHS",
          PassingYear: 2021,
          Percent: 70,
          TotalNo: 700,
          ObtainedNo: 560
        },
        {
          ExamName: "HS",
          PassingInstitute: "NNHS",
          PassingYear: 2023,
          Percent: 70,
          TotalNo: 500,
          ObtainedNo: 460
        }
      ]
    }
}

  const submmit = () => {
    fetch("/api/add", {
      method: "post",  // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)

    })
      .then(async (res) => {
        console.log(res)
      })
  }

  return (
    <button onClick={submmit}>Send</button>
  )
}
