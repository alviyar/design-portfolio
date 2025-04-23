import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

export default function Portfolio() {
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

      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">My Portfolio</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className="bg-gray-100 p-4 aspect-square flex items-center justify-center overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Project ${i + 1}`}
                  alt={`Project ${i + 1}`}
                  width={300}
                  height={300}
                  className="rounded-md group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium">Project {i + 1}</h3>
                <p className="text-gray-600 mt-2">A brief description of this amazing project.</p>
                <div className="flex gap-2 mt-4">
                  <span className="bg-sky-400 text-white px-3 py-1 rounded-full text-sm">UI Design</span>
                  {i % 2 === 0 && (
                    <span className="bg-pink-400 text-white px-3 py-1 rounded-full text-sm">No-Code</span>
                  )}
                  {i % 3 === 0 && (
                    <span className="bg-amber-400 text-white px-3 py-1 rounded-full text-sm">UX Design</span>
                  )}
                </div>
              </div>
            </div>
          ))}
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
              <Link legacyBehavior href="http://www.linkedin.com/in/alviya-rizwan" >
              <div className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition">
                LinkedIn
                </div>
              </Link>
            </div>
          </div>

          <div className="text-center mt-6 text-gray-600">Copyright. Portfolio 2025</div>
        </div>
      </footer>
    </main>
  )
}
