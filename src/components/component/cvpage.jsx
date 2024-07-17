import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { FaArrowAltCircleUp, FaArrowRight, FaAward, FaAws, FaBook, FaBookOpen, FaBookReader, FaBrain, FaCalendarAlt, FaCertificate, FaDoorOpen, FaDotCircle, FaEnvelope, FaGit, FaGithub, FaHackerrank, FaHandSparkles, FaHeart, FaInfo, FaJava, FaKaggle, FaLightbulb, FaLinkedin, FaLinux, FaLongArrowAltRight, FaMailBulk, FaMapMarkerAlt, FaMedal, FaNodeJs, FaPython, FaReact, FaRobot, FaStar, FaTasks, FaTrophy, FaVoicemail } from 'react-icons/fa';
import Link from "next/link"

export function cvpage() {
  
  return (
    (<div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <header
        className="bg-primary text-primary-foreground py-8 px-6 md:px-12 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="h-20 w-20 md:h-24 md:w-24">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Robinkumar J</h1>
            <p className="text-primary-foreground/80 text-sm">Tech Enthusiast</p>
          </div>
        </div>
        <p className="max-w-md text-center text-primary-foreground/80">An ambitious college student fueled by a deep passion for technology and the captivating world of intelligent automation by Artificial Intelligence and IoT</p>
      </header>
      <main className="py-12 px-6 md:px-12 grid gap-12">
        
<section>
  <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
      <FaJava className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm font-medium">JavaScript</p>
    </div>
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
      <FaReact className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm font-medium">React</p>
    </div>
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
      <FaNodeJs className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm font-medium">Node.js</p>
    </div>
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
      <FaLinux className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm font-medium">Linux</p>
    </div>
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
      <FaGit className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm font-medium">Git</p>
    </div>
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
      <FaRobot className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm font-medium">ML</p>
    </div>
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
      <FaBrain className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm font-medium">LLMs</p>
    </div>
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
      <FaPython className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm font-medium">Python</p>
    </div>
  </div>
</section>
<section>
  <h2 className="text-xl font-bold mb-4">Soft Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
      <FaLightbulb className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm font-medium">Creativity</p>
    </div>
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
      <FaTasks className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm font-medium">Multi-tasking</p>
    </div>
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
      <FaStar className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm font-medium">Leadership</p>
    </div>
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
      <FaHandSparkles className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm font-medium">Adaptive</p>
    </div>
  </div>
</section>
        <section>
          <h2 className="text-xl font-bold mb-4">Education</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium">Bachelor of Engineering</h3>
              <p className="text-muted-foreground text-sm flex items-center gap-2">
        <img src="/svce_logo2.png" alt="SVCE" className="h-6 w-6 inline-block" />
        Sri Venkateswara College of Engineering | 2021 - present
      </p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-muted-foreground" />
                    <p>Pursuing Electronics and Communications Engineering</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-muted-foreground" />
                    <p>Participated in various hackathons and coding competitions</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-muted-foreground" />
                    <p>Served as a mentor for fellow students</p>
                  </div>
                </li>
                <li>
                <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-muted-foreground" />
                    <p>Gained experience in Iot and Embedded systems</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium">Internship</h3>
              <p className="text-muted-foreground text-sm flex items-center gap-2">
        <img src="/ss.png" alt="Success Solutions" className="h-6 w-6 inline-block" />Success Solutions | 2024
      </p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-muted-foreground" />
                    <p>Learnt how video signals and power lines work hands on.</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-muted-foreground" />
                    <p>Contributed in the complete installation of CCTVs.</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-muted-foreground" />
                    <p>Contributed in configuring the software required for the cameras.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
  <div className="text-lg font-bold">Make-a-thon 4.0</div>
  <div className="flex items-center gap-2">
    <FaTrophy className="h-5 w-5 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">Winner</p>
  </div>
  <div className="flex items-center gap-2">
    <FaMapMarkerAlt className="h-5 w-5 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">SVCE</p>
  </div>
  <div className="flex items-center gap-2">
    <FaCalendarAlt className="h-5 w-5 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">March, 2023</p>
  </div>
</div>
<div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
  <div className="text-lg font-bold">ISTE annual convention - Project expo</div>
  <div className="flex items-center gap-2">
    <FaTrophy className="h-5 w-5 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">Runner</p>
  </div>
  <div className="flex items-center gap-2">
    <FaMapMarkerAlt className="h-5 w-5 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">SVCE</p>
  </div>
  <div className="flex items-center gap-2">
    <FaCalendarAlt className="h-5 w-5 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">April, 2023</p>
  </div>
</div>
<div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
  <div className="text-lg font-bold">AtomQuest by Atomberg</div>
  <div className="flex items-center gap-2">
    <FaMedal className="h-5 w-5 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">2nd Runner</p>
  </div>
  <div className="flex items-center gap-2">
    <FaMapMarkerAlt className="h-5 w-5 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">IIT Bombay</p>
  </div>
  <div className="flex items-center gap-2">
    <FaCalendarAlt className="h-5 w-5 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">December, 2023</p>
  </div>
</div>
<div className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2">
  <div className="text-lg font-bold">TechAid by The/Nudge</div>
  <div className="flex items-center gap-2">
    <FaAward className="h-5 w-5 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">Top 15</p>
  </div>
  <div className="flex items-center gap-2">
    <FaMapMarkerAlt className="h-5 w-5 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">IIT Bombay</p>
  </div>
  <div className="flex items-center gap-2">
    <FaCalendarAlt className="h-5 w-5 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">December, 2023</p>
  </div>
</div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-muted rounded-lg p-4 flex flex-col items-start gap-2">
  <div className="flex items-center gap-2">
    <h3 className="text-lg font-medium">GenAI with LLMs</h3>
  </div>
  <div className="flex items-center gap-2">
    <FaAws className="text-lg" />
    <p className="text-sm text-muted-foreground">AWS and DeepLearning.ai</p>
  </div>
  <p className="text-sm text-muted-foreground">Issued on: June 2024</p>
  <p className="text-sm text-muted-foreground">Skills Learned: LLMs, Transformer, AWS Sagemaker</p>
  <p className="text-sm text-muted-foreground">Mode: Online</p>
  <div className="flex items-center gap-2 ml-auto">
    <FaAward />
    <Link href="https://coursera.org/share/e2dd06c41dbb802f905f8cfa11284599">
      <Button variant="ghost">
        View Certificate
      </Button>
    </Link>
  </div>
</div>
  <div className="bg-muted rounded-lg p-4 flex flex-col items-start gap-2">
    <div className="flex items-center gap-2">
      <h3 className="text-lg font-medium">ReactJS</h3>
    </div>
    <div className="flex items-center gap-2">
      <FaHackerrank className="text-lg" />
      <p className="text-sm text-muted-foreground">Hackerrank</p>
    </div>
    <p className="text-sm text-muted-foreground">Issued on: July 2024</p>
    <p className="text-sm text-muted-foreground">Skills Learned: ReactJS</p>
    <p className="text-sm text-muted-foreground">Mode: Online</p>
    <div className="flex items-center gap-2 ml-auto">
    <FaAward />
    <Link href="https://www.hackerrank.com/certificates/0f3dd9dc0602">
      <Button variant="ghost">
        View Certificate
      </Button>
    </Link>
  </div>
  </div>
  <div className="bg-muted rounded-lg p-4 flex flex-col items-start gap-2">
    <div className="flex items-center gap-2">
      <h3 className="text-lg font-medium">Data Visulaization</h3>
    </div>
    <div className="flex items-center gap-2">
      <FaKaggle className="text-lg" />
      <p className="text-sm text-muted-foreground">Kaggle</p>
    </div>
    <p className="text-sm text-muted-foreground">Issued on: October 2023</p>
    <p className="text-sm text-muted-foreground">Skills Learned: Matplot library, Seaborn, Pandas</p>
    <p className="text-sm text-muted-foreground">Mode: Online</p>
    <div className="flex items-center gap-2 ml-auto">
    <FaAward />
    <Link href="https://www.kaggle.com/learn/certification/robinkumar246j/data-visualization">
      <Button variant="ghost">
        View Certificate
      </Button>
    </Link>
  </div>
  </div>
  <div className="bg-muted rounded-lg p-4 flex flex-col items-start gap-2">
    <div className="flex items-center gap-2">
      <h3 className="text-lg font-medium">Python</h3>
    </div>
    <div className="flex items-center gap-2">
      <FaHackerrank className="text-lg" />
      <p className="text-sm text-muted-foreground">Hackerrank</p>
    </div>
    <p className="text-sm text-muted-foreground">Issued on: April 2024</p>
    <p className="text-sm text-muted-foreground">Skills Learned: Python</p>
    <p className="text-sm text-muted-foreground">Mode: Online</p>
    <div className="flex items-center gap-2 ml-auto">
    <FaAward />
    <Link href="https://www.hackerrank.com/certificates/80fc75279736">
      <Button variant="ghost">
        View Certificate
      </Button>
    </Link>
  </div>
  </div>
          </div>
        </section>
    <section>
          <h2 className="text-xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-muted rounded-lg overflow-hidden">
              <img
                src="/saff.jpg"
                width="400"
                height="225"
                alt="Project 3"
                className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium">OptiSaff</h3>
                <p className="text-sm text-muted-foreground">
                  A project aiming to increase and optimize the production of Saffrons using IoT and Artificial Intelligence. This focuses on the intelligent cultivation and harvesting of saffron in a controlled environment.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden">
              <img
                src="/smartblink_logo.jpeg"
                width="400"
                height="225"
                alt="Project 1"
                className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium">SmartBlink</h3>
                <p className="text-sm text-muted-foreground">
                  An aiding device developed to assist people affected by cerebral palsy. A convenient and dedicated device is built (An android app for prototype) for this use case which can get inputs and is powered using a smart machine learning model. This project aims at assisting such patients using a simpler and cost effective approach.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden">
              <img
                src="/inx.jpeg"
                width="400"
                height="225"
                alt="Project 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col items-start gap-4">
                <h3 className="text-lg font-medium">Innovatronix</h3>
                <p className="text-sm text-muted-foreground">
                An offline SmartHome solution embedded with a light weight Language model which can converse and control the smart devices. The Control Device is built in such a way it is compatible with most of the smart devices using Matter and MQTT protocol. These messages are then obtained as input prompts from the user through an app.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className='bg-blue-200 hover:bg-blue-300'><FaBookOpen className='mr-3' />Read more</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <div className="flex flex-col items-center justify-center gap-4 py-8">
                      <p>The project is in Beta development and an early stage prototype is hosted in Huggingface. Due to resource constraints the AI model development takes considerable delay and issues. Any support will be appreciated.</p>
                      <div className="flex gap-2">
                        <div><Link href="https://huggingface.co/spaces/Robin246/inxai_steamlit"
                        target="_blank" rel="noopener noreferrer">
                          <Button type="button"><FaArrowRight className='mr-3' />Try it</Button></Link>
                        </div>
                        <div>
                        <Link href="https://huggingface.co/Robin246/inxai_v1.1"
                        target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className='bg-blue-300 hover:bg-blue-200' type="button">
                          <FaInfo className='mr-3' />Info                          </Button>
                          </Link>
                        </div>
                        <div>
                        <Link href="https://forms.office.com/r/EeTsx50znH"
                        target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className='bg-green-500 hover:bg-green-400' type="button">
                          <FaHeart className='mr-3' />Support
                          </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden">
              <img
                src="/cdgcover.jpeg"
                width="400"
                height="225"
                alt="Project 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col items-start gap-4">
                <h3 className="text-lg font-medium">ChatDataGen</h3>
                <p className="text-sm text-muted-foreground">
                  A project focusing on the scarcely available conversational datasets. This solutions aims at fostering a secure and open source community to contribute and collaborate conversational datasets in regional, colloquial, natural, coherent, vernacular and hybrid languages.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className='bg-blue-200 hover:bg-blue-300'>Try it <FaArrowRight className='ml-3' /></Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <div className="flex flex-col items-center justify-center gap-4 py-8">
                      <p>The project is live and is currently in beta development phase. Responses may be slower at initial requests. Your feedback and support will be appreciated.</p>
                      <div className="flex gap-2">
                        <div><Link href="https://chatdatagen.in.net"
                        target="_blank" rel="noopener noreferrer">
                          <Button type="button"><FaDoorOpen className='mr-3' />Continue visit</Button></Link>
                        </div>
                        <div>
                        <Link href="https://forms.office.com/r/EeTsx50znH"
                        target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className='bg-green-500 hover:bg-green-400' type="button">
                          <FaHeart className='mr-3' />Support
                          </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="bg-muted text-muted-foreground py-6 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/robinkumar-j-523a58284"
            className="text-muted-foreground hover:underline"
            prefetch={false}
            target="_blank"
  rel="noopener noreferrer">
            <FaLinkedin className="inline-block mr-1" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/RobinkumarJ246"
            className="text-muted-foreground hover:underline"
            prefetch={false}
            target="_blank"
  rel="noopener noreferrer"
            >
            <FaGithub className="inline-block mr-1" />
            GitHub
          </Link>
          <Link
            href="mailto:robin246j@gmail.com"
            target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:underline"
            prefetch={false}>
            <FaEnvelope className="inline-block mr-1" />
            Email
          </Link>
          <Link href="https://huggingface.co/Robin246"
          target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:underline"
            prefetch={false}
  >
          <p className="text-muted-foreground text-sm flex items-center gap-2">
  <img src="/hf_logo.png" alt="Hugging Face" className="h-6 w-6 inline-block" />HF</p></Link>
        </div>
      </footer>
    </div>)
  );
}


function AwardIcon(props) {
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
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function BadgeIcon(props) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}


function MedalIcon(props) {
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
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  )
}


function TrophyIcon(props) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}