import PlanetariumSchedule from "@/components/PlanetariumSchedule";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <PlanetariumSchedule />
        </div>
      </div>
    </div>
  );
};

export default Index;
