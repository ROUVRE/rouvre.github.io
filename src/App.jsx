import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsGrid from "./components/ProjectsGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-800 font-sans antialiased">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <Header />

        <ProjectsGrid />

        <Footer />
      </div>
    </div>
  );
}
