import { MapPin, Users, Clock } from "lucide-react";

const LocalTrust = () => {
  const locations = ["Ramnagar", "Lanka", "Varanasi"];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-400 rounded-full blur-3xl opacity-20" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              Proudly Serving Your Local Area
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Neighborhood Pest Control Experts
            </h2>

            <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
              We're not just a service provider – we're your neighbors. Our local team
              understands the specific pest challenges in your area and responds quickly.
            </p>

            {/* Service Areas */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {locations.map((location) => (
                <span
                  key={location}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium border border-white/20"
                >
                  {location}
                </span>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <MapPin className="w-8 h-8 text-orange-300 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">Local</p>
                <p className="text-green-200 text-sm">Service Areas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Clock className="w-8 h-8 text-orange-300 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">Same Day</p>
                <p className="text-green-200 text-sm">Response</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Users className="w-8 h-8 text-orange-300 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">Expert</p>
                <p className="text-green-200 text-sm">Local Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalTrust;
