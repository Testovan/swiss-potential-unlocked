export const SwissAnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-float-slow" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-success-green/10 rounded-lg rotate-45 animate-float-medium" />
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-premium-gold/8 rounded-full animate-float-fast" />
        
        {/* Small accent shapes */}
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/3 rounded-lg animate-float-reverse" />
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-success-green/5 rounded-full animate-pulse-slow" />
        <div className="absolute top-2/3 left-1/6 w-8 h-8 bg-premium-gold/6 rounded-lg rotate-12 animate-bounce-subtle" />
        
        {/* Additional floating elements */}
        <div className="absolute top-1/6 right-1/6 w-6 h-6 bg-white/10 rounded-full animate-float-tiny" />
        <div className="absolute bottom-1/3 right-2/3 w-10 h-10 bg-success-green/8 rounded-lg animate-float-slow" />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-swiss-navy/40 via-swiss-navy-dark/60 to-swiss-navy/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.05),transparent_50%)]" />
    </div>
  );
};