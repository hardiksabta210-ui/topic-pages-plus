import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/home/HomeHero";
import TopicsGrid from "@/components/home/TopicsGrid";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HomeHero />
        
        <div id="topics-section">
          <TopicsGrid />
        </div>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">31%</div>
                <p className="text-primary-foreground/70 text-sm">Land Covered by Forests</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">71%</div>
                <p className="text-primary-foreground/70 text-sm">Earth Covered by Oceans</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
                <p className="text-primary-foreground/70 text-sm">Species at Risk</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">2050</div>
                <p className="text-primary-foreground/70 text-sm">Net-Zero Target Year</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                EcoBuddy is dedicated to empowering individuals with knowledge about environmental issues. 
                We believe that understanding the challenges our planet faces is the first step toward 
                meaningful action. Through education and community, we can create a sustainable future together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-secondary rounded-full px-6 py-3 text-sm font-medium">
                  🌱 Education First
                </div>
                <div className="bg-secondary rounded-full px-6 py-3 text-sm font-medium">
                  🤝 Community Driven
                </div>
                <div className="bg-secondary rounded-full px-6 py-3 text-sm font-medium">
                  🌍 Global Impact
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
