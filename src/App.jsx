import BackgroundGrid from "./components/BackgroundGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsGrid from "./components/ProjectsGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-800 font-sans antialiased relative overflow-hidden">
      <BackgroundGrid />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <Header />
        <ProjectsGrid />
        <Footer />
      </div>
    </div>
  );
}
