import PlanetariumSchedule from "@/components/PlanetariumSchedule";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
      {/* Космический фон */}
      <div className="absolute inset-0">
        {/* Звёздное поле */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-16 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-32 w-1 h-1 bg-blue-300 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-60 left-1/4 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-40 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-80 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse"
            style={{ animationDelay: "2.5s" }}
          ></div>
        </div>

        {/* Туманности */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-purple-900/20 via-purple-600/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-radial from-cyan-900/20 via-blue-600/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex justify-center">
          <PlanetariumSchedule />
        </div>
      </div>
    </div>
  );
};

export default Index;
