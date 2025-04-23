import Image from "next/image"
import Link from "next/link"
import { Star, Pencil, Eye, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 fill-black" />
          <span className="text-xl font-medium">Alviya Rizwan</span>
        </div>
        <nav className="flex items-center gap-8">
          <Link href="/contacts" className="text-fuchsia-600 hover:underline">
            Contacts
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src="/Group.png"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full"
            />
            <div className="relative">
              <div className="bg-fuchsia-200 px-4 py-1 rounded-md text-xl font-medium">Alviya Rizwan</div>
              <svg className="absolute -left-12 top-2" width="40" height="30" viewBox="0 0 40 30" fill="none">
                <path d="M1 29C12 24 30 10 39 1" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl font-bold leading-tight">I design top notch websites</h1>
        </div>

        <div className="space-y-6">
          <p className="text-lg">I'll design your website and will develop to land it on internet using No-code.</p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Hire me
          </Link>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="relative mb-8">
          <div className="bg-fuchsia-200 px-4 py-1 rounded-md inline-block text-xl font-medium">What I do?</div>
          <svg className="absolute -bottom-12 left-4" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M1 1C10 15 20 30 39 39" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}
          <div className="bg-amber-200 p-8 rounded-lg transform rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-lg relative h-64 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-100 rounded-bl-lg rounded-tr-lg z-0"></div>
            <div className="relative z-10">
              <div className="bg-amber-300 px-3 py-1 rounded-md inline-block mb-4">Pen/Paper</div>
              <div className="mb-4">
                <Pencil className="h-8 w-8 text-amber-800" />
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold">User Research Design</h3>
              <p className="mt-2 text-amber-800 opacity-0 group-hover:opacity-100 transition-opacity">
                Discovering user needs through research and sketching
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-sky-200 p-8 rounded-lg transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-lg relative h-64 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-sky-100 rounded-bl-lg rounded-tr-lg z-0"></div>
            <div className="relative z-10">
              <div className="bg-sky-300 px-3 py-1 rounded-md inline-block mb-4">Figma</div>
              <div className="mb-4">
                <Eye className="h-8 w-8 text-sky-800" />
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold">UI & Product Design</h3>
              <p className="mt-2 text-sky-800 opacity-0 group-hover:opacity-100 transition-opacity">
                Creating beautiful interfaces that users love
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-pink-200 p-8 rounded-lg transform rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-lg relative h-64 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-pink-100 rounded-bl-lg rounded-tr-lg z-0"></div>
            <div className="relative z-10">
              <div className="bg-yellow-300 px-3 py-1 rounded-md inline-block mb-4">Webflow</div>
              <div className="mb-4">
                <Sparkles className="h-8 w-8 text-pink-800" />
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold">No-code Development</h3>
              <p className="mt-2 text-pink-800 opacity-0 group-hover:opacity-100 transition-opacity">
                Building functional websites without writing code
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-12 border-t border-dashed border-gray-300">
        <div className="relative mb-16">
          <div className="bg-fuchsia-200 px-4 py-1 rounded-md inline-block text-xl font-medium">Featured Projects</div>
          <svg className="absolute -bottom-12 left-4" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M1 1C10 15 20 30 39 39" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Project 1 */}
          <Link legacyBehavior href="https://www.figma.com/design/ZjqxjZVUKf2UrlqWbDqDCt/aura?m=auto&t=VAg1G1lShetbk0PR-1 " passHref>
          <a target="_blank" rel="noopener noreferrer">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="bg-purple-100 aspect-square flex items-center justify-center p-6">
              <Image
                src="/aura.png"
                alt="Online Fashion Store"
                width={600}
                height={800}
                className="rounded-md transform group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-medium">Online Fashion Store</h3>
                <span className="bg-sky-400 text-white px-3 py-1 rounded-full text-sm">UI Design</span>
              </div>
              <p className="text-gray-600 text-sm">
              An intuitive and stylish online shopping experience, designed to showcase the latest fashion collections.
              Features smart browsing, responsive layouts, and user-focused interactions to make discovering and buying fashion effortless.
              </p>
            </div>
          </div>
          </a>
          </Link>

          {/* Project 2 */}
          <Link legacyBehavior href="https://www.figma.com/design/zMBk1dXtRFtsnRVadvmYfK/TheTravelTree?m=auto&t=VAg1G1lShetbk0PR-1  "passHref>
          <a target="_blank" rel="noopener noreferrer">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="bg-purple-100 aspect-square flex items-center justify-center p-6">
              <Image
                src="/ttt.png"
                alt="Travel Booking Platform"
                width={600}
                height={800}
                className="rounded-md transform group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-medium">Travel Booking Platform</h3>
                <span className="bg-sky-400 text-white px-3 py-1 rounded-full text-sm">UI Design</span>
              </div>
              <p className="text-gray-600 text-sm">
              A seamless platform for booking flights and accommodations.
              Designed with an intuitive interface, smart search, and user-friendly navigation for a hassle-free travel experience.
              </p>
            </div>
          </div>
          </a>
          </Link>

          {/* Project 3 */}
          <Link legacyBehavior href="https://www.figma.com/design/Nzl3ZzKXsYElVuggAgNwMA/HACKCLUB?node-id=0-1&t=ofQaMN28SaZtM6N6-1  "passHref>
          <a target="_blank" rel="noopener noreferrer">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
          <div className="bg-purple-100 aspect-square flex items-center justify-center p-6">
              <Image
                src="/hc.png"
                alt="Event Landing Page"
                width={600}
                height={800}
                className="rounded-md transform group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-medium">Event Landing Page</h3>
                <span className="bg-sky-400 text-white px-3 py-1 rounded-full text-sm">UI Design</span>
              </div>
              <p className="text-gray-600 text-sm">
              A clean and focused web page created to share event details and encourage sign-ups.
              Designed with user-friendly navigation, clear information, and strong visual appeal.
              </p>
            </div>
          </div>
          </a>
          </Link>

          {/* Project 4 */}
          <Link legacyBehavior href="https://www.figma.com/design/PcoXnqumKXkn3whgi83ayZ/poetify?node-id=0-1&t=q9cyuFGxpZc9dD91-1 "passHref>
          <a target="_blank" rel="noopener noreferrer">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
          <div className="bg-purple-100 aspect-square flex items-center justify-center p-6">
              <Image
                src="/poetify.png"
                alt="Poetify: Discover & Share Poetry"
                width={250}
                height={350}
                className="rounded-md transform group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-medium">Poetify: Discover & Share Poetry</h3>
                <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm">UI Design</span>
              </div>
              <p className="text-gray-600 text-sm">
              A beautifully designed space to explore, pin, and share poetic works.
              Minimal layout, smooth browsing, and a calming aesthetic tailored for poetry lovers.
              </p>
            </div>
          </div>
          </a>
          </Link>

        </div>
      </section>

      {/* Work Experience */}
      <section className="container mx-auto px-4 py-12 border-t border-dashed border-gray-300">
        <div className="relative mb-8">
          <div className="bg-fuchsia-200 px-4 py-1 rounded-md inline-block text-xl font-medium">Experience</div>
          <svg className="absolute -bottom-12 left-4" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M1 1C10 15 20 30 39 39" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <p className="mt-16 mb-8 text-lg">Have been designing since my past 4 years</p>

        <div className="grid gap-6">
          {/* Experience 1 */}
          <div className="flex gap-6 items-start">
            <div className="bg-amber-200 w-16 h-16 flex items-center justify-center rounded-md text-2xl font-bold">
              1
            </div>
            <div>
              <h3 className="text-xl font-medium">
                App developer at <span className="font-bold">Hackclub</span>
              </h3>
              <p className="text-gray-600">Built a Flutter app with end-to-end UI/UX design implementation.</p>
              <p className="text-gray-500 text-sm">20, January 2025</p>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="flex gap-6 items-start">
            <div className="bg-sky-200 w-16 h-16 flex items-center justify-center rounded-md text-2xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-medium">
                Designer at <span className="font-bold">Designers Club</span>
              </h3>
              <p className="text-gray-600">Designed posters for events, campaigns, and promotions</p>
              <p className="text-gray-500 text-sm">8, March 2025</p>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="flex gap-6 items-start">
            <div className="bg-pink-200 w-16 h-16 flex items-center justify-center rounded-md text-2xl font-bold">
              3
            </div>
            <div>
              <h3 className="text-xl font-medium">
                Participated in <span className="font-bold">UI/UX hackathons </span>
              </h3>
              <p className="text-gray-600">Participated in a UI/UX-focused hackathon, collaborating on innovative design solutions under time constraints.</p>
              <p className="text-gray-500 text-sm">December 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12 border-t border-dashed border-gray-300">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="relative mb-8">
              <div className="bg-fuchsia-200 px-4 py-1 rounded-md inline-block text-xl font-medium">Contact here</div>
              <svg className="absolute -bottom-12 left-4" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M1 1C10 15 20 30 39 39" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <p className="mt-16 mb-2">Have a project idea?</p>
            <p className="text-lg">
              just say me <span className="font-bold">Hi</span>.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-b border-black pb-2">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <div className="flex">
                <div className="w-4 bg-fuchsia-400"></div>
                <input type="text" className="w-full bg-transparent focus:outline-none px-2" placeholder="Your name" />
              </div>
            </div>

            <div className="border-b border-black pb-2">
              <label className="block text-sm font-medium text-gray-700">Your email</label>
              <div className="flex">
                <div className="w-4 bg-amber-400"></div>
                <input
                  type="email"
                  className="w-full bg-transparent focus:outline-none px-2"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="border-b border-black pb-2">
              <label className="block text-sm font-medium text-gray-700">About Project</label>
              <div className="flex">
                <div className="w-4 bg-sky-400"></div>
                <input
                  type="text"
                  className="w-full bg-transparent focus:outline-none px-2"
                  placeholder="I want to discuss you about..."
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                Send Here
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Star className="h-6 w-6 fill-black" />
              <span className="text-xl font-medium">Alviya Rizwan</span>
            </div>

            <div className="flex gap-4">
              <Link legacyBehavior href="http://www.linkedin.com/in/alviya-rizwan" className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition" passHref>
              <a target="_blank" rel="noopener noreferrer">
                LinkedIn
                </a>
              </Link>
            </div>
          </div>

          <div className="text-center mt-6 text-gray-600">Copyright. Portfolio 2025</div>
        </div>
      </footer>
    </main>
  )
}
