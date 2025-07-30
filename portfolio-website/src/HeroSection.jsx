import { Download, Star } from 'lucide-react';
import myPhoto from './assets/my-photo.jpg'; // Replace with your photo

const HeroSection = () => {
    const onDownloadResume = () => {
        const link = document.createElement("a")
        link.href = "/saiprakash.pdf"
        link.download = "saiprakash.pdf"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 px-4 overflow-hidden">
      <div className="flex flex-col items-center text-center max-w-3xl w-full">
    
        <div className="relative mb-6">
          <img
            src={myPhoto}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-xl"
          />
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
            <Star className="text-white" size={20} />
          </div>
        </div>

        <div className="text-3xl mb-2 animate-bounce">👋</div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sai Prakash
          </span>
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        System Engineer @ Tata Consultancy Services | Java Developer
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onDownloadResume}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200">
            <Download className="mr-2" size={20} />Download Resume
          </button>
          <button className="flex items-center justify-center px-6 py-3 border border-gray-500 text-gray-300 hover:border-blue-400 hover:text-blue-400 font-medium rounded-lg transition duration-200">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
