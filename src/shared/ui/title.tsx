type TitleProps = {
  text: string
  children?: React.ReactNode
  isDynamic?: boolean
}

export const Title = ({ text, isDynamic, children }: TitleProps) => {
  const titleClassName = `font-display text-[28px] font-semibold leading-9 tracking-[-0.02em] lg:text-[36px] lg:leading-[44px] ${
    isDynamic ? 'text-[#101828]' : 'text-[var(--color-text-muted)]'
  }`

  return (
    <>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        <h1 className={`min-w-0 ${titleClassName}`}>{text}</h1>
        {children && (
          <div className="w-full shrink-0 [&>button]:w-full lg:w-auto lg:[&>button]:w-auto">
            {children}
          </div>
        )}
      </div>
      <hr className="mt-2.5 mb-4 border-0 border-t border-[#EAECF0]" />
    </>
  )
}
