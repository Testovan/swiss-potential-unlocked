export const SplineBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Spline Animation */}
      <iframe 
        src="https://my.spline.design/holographicearthwithdynamiclines-llPTzLFY9xqIwaowvPrpfaDS/" 
        frameBorder="0" 
        width="100%" 
        height="100%"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          border: 'none',
          background: 'transparent'
        }}
        loading="lazy"
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-swiss-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-swiss-navy/40 via-transparent to-swiss-navy/40" />
    </div>
  );
};