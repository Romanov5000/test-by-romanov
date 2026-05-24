const backgroundStyle = {
  background:
    'radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0.9) 22%, rgba(255,255,255,0.4) 45%, rgba(242,244,247,0) 72%)',
}

export const Loader = () => {
  return (
    <div className="relative flex h-[220px] w-[220px] items-center justify-center">
      <div className="absolute inset-0 rounded-full" style={backgroundStyle} />
      <img
        src="/icons/ellipse.svg"
        alt=""
        width={80}
        height={80}
        className="relative z-10"
        style={{ animation: 'loaderEllipsePulse 1.5s ease-in-out infinite' }}
        aria-hidden
      />
    </div>
  )
}
