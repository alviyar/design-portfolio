import Link from "next/link"
import { Star } from "lucide-react"

export default function Contacts() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 fill-black" />
          <span className="text-xl font-medium">Alviya Rizwan</span>
        </div>
        <nav className="flex items-center gap-8">
          <Link href="/contacts" className="text-fuchsia-600 underline">
            Contacts
          </Link>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-12">Contact Me</h1>

        <div className="space-y-8">
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
                <textarea
                  className="w-full bg-transparent focus:outline-none px-2 min-h-[100px]"
                  placeholder="I want to discuss you about..."
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                Send Here
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-dashed">
            <h2 className="text-2xl font-medium mb-4">Other ways to reach me</h2>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> alviyarizwan10@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 9167028963
              </p>
              <p>
                <strong>Location:</strong> Chennai
              </p>
            </div>

            <div className="flex gap-4 mt-6">
            <Link legacyBehavior href="http://www.linkedin.com/in/alviya-rizwan" className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition" passHref>
              <a target="_blank" rel="noopener noreferrer">
                LinkedIn
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-12">
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
