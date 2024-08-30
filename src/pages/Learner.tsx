import React from 'react'
import { Card, CardContent } from "../components/Card"
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Learner() {
  return (
      <div className="flex flex-col min-h-[100dvh]">
          <Header />
          <main className="p-12 md:py-24">
              <div className="container">
                  <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 md:mb-12">Our Language Services</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      <Card className="h-full">
                          <CardContent className="flex flex-col items-center justify-center gap-4 p-6" expandable>
                              <LanguagesIcon className="w-12 h-12 text-primary my-2" />
                              <h3 className="text-xl text-muted-foreground font-semibold">IELTS</h3>
                              <p className="text-muted-foreground text-center">
                                  IELTS stands for the international English Language Testing System . In other words we can say that it's an English language proficiency test. It is accepted globally and every year more than 4 million tests are taken. IELTS is developed and run by the British Council in partnership with few educational institutions.
                                  IELTS is aimed at people who want to study or work abroad or in an English speaking country. They need to pass this test . IELTS is trusted by 140 countries and 12,000 organizations around the world. There are two types of IELTS tests for you to choose.
                              </p>
                          </CardContent>
                      </Card>
                      <Card className="h-full">
                          <CardContent className="flex flex-col items-center justify-center gap-4 p-6" expandable>
                              <EyeIcon className="w-12 h-12 text-primary my-2" />
                              <h3 className="text-xl text-muted-foreground font-semibold">IELTS  Academic</h3>
                              <p className="text-muted-foreground text-center">
                                  This test can help you secure university acceptance and student visa. The IELTS academic test is designed to measure whether your English is suitable for an academic environment or not.
                                  You can take IELTS Academic if you want to study at any undergraduate or postgraduate level in an English -Speaking country.
                              </p>
                          </CardContent>
                      </Card>
                      <Card className="h-full">
                          <CardContent className="flex flex-col items-center justify-center gap-4 p-6" expandable>
                              <GlobeIcon className="w-12 h-12 text-primary my-2" />
                              <h3 className="text-xl text-muted-foreground font-semibold">IELTS General</h3>
                              <p className="text-muted-foreground text-center">The IELTS General training test is particularly designed to measure your English language proficiency in a practical or everyday context. This test is often useful to prove your level when applying for any position in an English speaking country. </p>
                          </CardContent>
                      </Card>
                      <Card className="h-full">
                          <CardContent className="flex flex-col items-center justify-center gap-4 p-6" expandable>
                              <TestTubesIcon className="w-12 h-12 text-primary my-2" />
                              <h3 className="text-xl text-muted-foreground font-semibold">IELTS Test Format</h3>
                              <p className="text-muted-foreground text-center">
                                  In IELTS you need to have four skills, your all IELTS score will be based on these skills. And these skills are listening, reading, writing and speaking.
                              </p>
                          </CardContent>
                      </Card>
                      <Card className="h-full">
                          <CardContent className="flex flex-col items-center justify-center gap-4 p-6" expandable>
                              <HeadphonesIcon className="w-12 h-12 text-primary my-2" />
                              <h3 className="text-xl text-muted-foreground font-semibold">Listening</h3>
                              <p className="text-muted-foreground text-center">This assesses how well you understand ideas and can recognise opinions. In other words in this section you need to understand everything with correct meaning.</p>
                          </CardContent>
                      </Card>
                      <Card className="h-full">
                          <CardContent className="flex flex-col items-center justify-center gap-4 p-6" expandable>
                              <CaptionsIcon className="w-12 h-12 text-primary my-2" />
                              <h3 className="text-xl text-muted-foreground font-semibold">Reading</h3>
                              <p className="text-muted-foreground text-center">
                                  In this section you will assess how well you read in general .In this section you need to understand opinions and small details.
                              </p>
                          </CardContent>
                      </Card>
                      <Card className="h-full">
                          <CardContent className="flex flex-col items-center justify-center gap-4 p-6" expandable>
                              <MicIcon className="w-12 h-12 text-primary my-2" />
                              <h3 className="text-xl text-muted-foreground font-semibold">Writing</h3>
                              <p className="text-muted-foreground text-center">
                                  This section evaluates how well you organize your ideas and present them on paper. In this section you need to show your ability to use a high range of vocabulary along with grammar.
                              </p>
                          </CardContent>
                      </Card>
                      <Card className="h-full">
                          <CardContent className="flex flex-col items-center justify-center gap-4 p-6" expandable>
                              <SpellCheckIcon className="w-12 h-12 text-primary my-2" />
                              <h3 className="text-xl text-muted-foreground font-semibold">Spelling</h3>
                              <p className="text-muted-foreground text-center">
                                  As we understand by the name, this section assesses how good you can communicate and express your viewpoints.
                              </p>
                          </CardContent>
                      </Card>
                      <Card className="h-full">
                          <CardContent className="flex flex-col items-center justify-center gap-4 p-6" expandable>
                              <PointerIcon className="w-12 h-12 text-primary my-2" />
                              <h3 className="text-xl text-muted-foreground font-semibold">PTE services</h3>
                              <p className="text-muted-foreground text-center">
                                  PTE also known as The Pearson Test of English is an academic exam which measures a candidate's command over the English language. PTE is the world's leading computer based English language test which is trusted by the universities, colleges and governments around the world. Many universities and government agencies from across the world also consider PTE General exam scores from level 4 and level 5 for admissions and work visas. Anyone who is above 16 can give this test. The PTE exam is divided into two categories.
                              </p>
                          </CardContent>
                      </Card>
                      <Card className="h-full">
                          <CardContent className="flex flex-col items-center justify-center gap-4 p-6" expandable>
                              <SchoolIcon className="w-12 h-12 text-primary my-2" />
                              <h3 className="text-xl text-muted-foreground font-semibold">PTE Academic</h3>
                              <p className="text-muted-foreground text-center">
                                  PTE A academic is meant to prepare students for studying in an English speaking country. Many universities or colleges require proof of English proficiency. Australia and New Zealand are examples of countries that accept PTE. The exam pattern consists of three sections.
                                  •	Speaking and writing
                                  •	reading
                                  •	listening
                              </p>
                          </CardContent>
                      </Card>
                      <Card className="h-full">
                          <CardContent className="flex flex-col items-center justify-center gap-4 p-6" expandable>
                              <PentagonIcon className="w-12 h-12 text-primary my-2" />
                              <h3 className="text-xl text-muted-foreground font-semibold">PTE General </h3>
                              <p className="text-muted-foreground text-center">
                                  PTE General is an English language proficiency test which is designed to assess the language skills of non native English speakers. It is typically used for study, work or immigration purposes. PTE generally has a total of six levels from A1 to C2 . These exams include a  written paper and a spoken test. And moreover PTe general hold a lifetime validity. means you don't have to give it again after a particular time.
                              </p>
                          </CardContent>
                      </Card>
                      <Card className="h-full">
                          <CardContent className="flex flex-col items-center justify-center gap-4 p-6" expandable>
                              <JapaneseYenIcon className="w-12 h-12 text-primary my-2" />
                              <h3 className="text-xl text-muted-foreground font-semibold">Duolingo</h3>
                              <p className="text-muted-foreground text-center">
                                  We all know about this amazing language learning platform. Here we can learn multiple languages while playing and that makes it more interesting and fun. This platform allows users to learn new languages through games and puzzles. According to a report from 2011 Duolingo has gained immense popularity with more than 500 million downloads across the world.
                                  So we are also offering you Duolingo services for language learning. Here you can improve your language skills and can get admissions in good colleges.
                              </p>
                          </CardContent>
                      </Card>
                  </div>
              </div>
          </main>
          <Footer />
      </div>
  )
}

function CaptionsIcon(props: any) {
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
            <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
            <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
        </svg>
    )
}


function GlobeIcon(props: any) {
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
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    )
}


function HeadphonesIcon(props: any) {
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
            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
        </svg>
    )
}


function ImportIcon(props: any) {
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
            <path d="M12 3v12" />
            <path d="m8 11 4 4 4-4" />
            <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
        </svg>
    )
}


function MicIcon(props: any) {
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
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
    )
}
function LanguagesIcon(props: any) {
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
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
        </svg>
    )
}
function SpellCheckIcon(props: any) {
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
            <path d="m6 16 6-12 6 12" />
            <path d="M8 12h8" />
            <path d="m16 20 2 2 4-4" />
        </svg>
    )
}


function TestTubesIcon(props: any) {
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
            <path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2" />
            <path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2" />
            <path d="M3 2h7" />
            <path d="M14 2h7" />
            <path d="M9 16H4" />
            <path d="M20 16h-5" />
        </svg>
    )
}


function EyeIcon(props: any) {
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
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}



function LecternIcon(props: any) {
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
            <path d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3" />
            <path d="M18 6V3a1 1 0 0 0-1-1h-3" />
            <rect width="8" height="12" x="8" y="10" rx="1" />
        </svg>
    )
}


function PentagonIcon(props: any) {
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
            <path d="M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z" />
        </svg>
    )
}


function PointerIcon(props: any) {
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
            <path d="M22 14a8 8 0 0 1-8 8" />
            <path d="M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1" />
            <path d="M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" />
            <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
    )
}


function SchoolIcon(props: any) {
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
            <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
            <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
            <path d="M18 5v17" />
            <path d="m4 6 8-4 8 4" />
            <path d="M6 5v17" />
            <circle cx="12" cy="9" r="2" />
        </svg>
    )
}
function JapaneseYenIcon(props: any) {
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
            <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
            <path d="M6 15h12" />
            <path d="M6 11h12" />
        </svg>
    )
}
