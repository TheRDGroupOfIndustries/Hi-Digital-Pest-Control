import { useEffect } from "react";

const Associations = () => {
    const associations = [
        {
            name: "BNI",
            logo: "/logo/BNI.jpeg",
        },
        {
            name: "JSK Foundation",
            logo: "/logo/shri.jpeg",
        },
        {
            name: "IBF",
            logo: "/logo/IBF.jpeg",
        },
        {
            name: "Ramanagar Industrial Association",
            logo: "/logo/ramnagar.jpeg",
        },
    ];

    return (
        <section className="py-10 bg-secondary/5 border-y border-secondary/10">
            <div className="container-custom">
                <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-widest">
                        Proudly Associated With
                    </h3>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {associations.map((item) => (
                        <div
                            key={item.name}
                            className="group relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                        >
                            <img
                                src={item.logo}
                                alt={`${item.name} logo`}
                                className="max-w-full max-h-full object-contain mix-blend-multiply"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Associations;
