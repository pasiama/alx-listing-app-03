const HeroSection = () => {
      return (
          <section
              className="h-[400px] flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/1.jpg')" }}
          >
              <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
              <p className="text-lg mt-2">
                  The best prices for over 2 million properties worldwide.
              </p>
          </section>
      );
  };
  
  export default HeroSection;
  