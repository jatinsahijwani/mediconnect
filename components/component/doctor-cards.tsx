/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/w2lw0obl4vV
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Archivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"

export default function DoctorList() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Find the Right Doctor</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              className="pl-10 pr-4 py-2 rounded-md border border-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-800"
              placeholder="Search by name or specialty"
              type="text"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="mr-2 h-5 w-5" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 p-2">
              <DropdownMenuLabel>Filter by Specialty</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Checkbox id="diabetes" />
                Diabetes
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="cancer" />
                Cancer
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="thyroid" />
                Thyroid
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="cardiology" />
                Cardiology
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="dermatology" />
                Dermatology
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="orthopedic" />
                Orthopedic
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="pediatric" />
                Pediatric
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="gastroenterology" />
                Gastroenterology
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="neurology" />
                Neurology
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="psychiatry" />
                Psychiatry
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="urology" />
                Urology
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="obstetrics-gynecology" />
                Obstetrics & Gynecology
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. John Doe"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. John Doe</h3>
          <p className="text-gray-500 mb-4">Diabetes Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-gray-300 mr-1" />
            <span className="text-gray-500 ml-2">4.2 (123 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. Jane Smith"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. Jane Smith</h3>
          <p className="text-gray-500 mb-4">Cancer Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-gray-300 mr-1" />
            <span className="text-gray-500 ml-2">4.5 (87 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. Michael Johnson"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. Michael Johnson</h3>
          <p className="text-gray-500 mb-4">Thyroid Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <span className="text-gray-500 ml-2">5.0 (65 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. Emily Davis"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. Emily Davis</h3>
          <p className="text-gray-500 mb-4">Cardiology Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-gray-300 mr-1" />
            <span className="text-gray-500 ml-2">4.3 (92 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. Sarah Lee"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. Sarah Lee</h3>
          <p className="text-gray-500 mb-4">Dermatology Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-gray-300 mr-1" />
            <span className="text-gray-500 ml-2">4.7 (78 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. David Kim"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. David Kim</h3>
          <p className="text-gray-500 mb-4">Orthopedic Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-gray-300 mr-1" />
            <span className="text-gray-500 ml-2">4.4 (102 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. Lisa Chen"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. Lisa Chen</h3>
          <p className="text-gray-500 mb-4">Pediatric Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <span className="text-gray-500 ml-2">5.0 (59 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. Robert Nguyen"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. Robert Nguyen</h3>
          <p className="text-gray-500 mb-4">Gastroenterology Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-gray-300 mr-1" />
            <span className="text-gray-500 ml-2">4.6 (81 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. Jessica Hernandez"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. Jessica Hernandez</h3>
          <p className="text-gray-500 mb-4">Neurology Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-gray-300 mr-1" />
            <span className="text-gray-500 ml-2">4.3 (97 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. Sophia Martinez"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. Sophia Martinez</h3>
          <p className="text-gray-500 mb-4">Psychiatry Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <span className="text-gray-500 ml-2">5.0 (72 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. Christopher Gonzalez"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. Christopher Gonzalez</h3>
          <p className="text-gray-500 mb-4">Urology Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-gray-300 mr-1" />
            <span className="text-gray-500 ml-2">4.4 (88 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. Olivia Ramirez"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. Olivia Ramirez</h3>
          <p className="text-gray-500 mb-4">Obstetrics & Gynecology Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-gray-300 mr-1" />
            <span className="text-gray-500 ml-2">4.4 (88 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. Olivia Ramirez"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. Olivia Ramirez</h3>
          <p className="text-gray-500 mb-4">Obstetrics & Gynecology Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-gray-300 mr-1" />
            <span className="text-gray-500 ml-2">4.4 (88 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
        <Card className="p-4 flex flex-col items-center">
          <img
            alt="Dr. Olivia Ramirez"
            className="rounded-full mb-4"
            height={120}
            src="/placeholder.svg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="text-xl font-bold mb-2">Dr. Olivia Ramirez</h3>
          <p className="text-gray-500 mb-4">Obstetrics & Gynecology Specialist</p>
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-yellow-500 mr-1" />
            <StarIcon className="text-gray-300 mr-1" />
            <span className="text-gray-500 ml-2">4.4 (88 reviews)</span>
          </div>
          <Button className="w-[20vh] ">Chat</Button>
        </Card>
              </div>
    </div>
  )
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}