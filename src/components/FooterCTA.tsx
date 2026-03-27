const FooterCTA = () => (
  <section id="book-a-call" className="bg-background py-24 border-t border-border overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Text Area (Left) */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase mb-6">READY TO START</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
            Turn Your Next Feature Launch Into User Adoption
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Book a 15-minute discovery call. We'll audit your current feature content pipeline and show you exactly what the first 30 days looks like with Reblues.
          </p>
        </div>
        
        {/* Calendly Widget (Right) */}
        <div className="w-full lg:w-[45%] bg-[#0f0f0f] border border-border shadow-2xl relative" style={{ minHeight: "650px" }}>
          <iframe 
            src="https://calendly.com/rebluesagency/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f0f0f&text_color=ffffff&primary_color=fe6b00" 
            width="100%" 
            height="100%" 
            frameBorder="0"
            className="absolute inset-0 w-full h-full rounded-none"
            title="Book a Call with Reblues"
          />
        </div>

      </div>
    </div>
  </section>
);
export default FooterCTA;
