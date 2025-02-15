import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

export const Home = () => {
    return (
        <main className="relative h-full overflow-y-auto antialiased">
            <div className="fixed inset-0 bg-fixed bg-cover bg-center
             bg-gradient-to-r from-purple-500 to-purple-900">
            </div>
            <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
                <Navbar />
                <Hero />
            </div>

        </main>
    )
}