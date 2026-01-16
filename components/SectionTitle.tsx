const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 my-6 lg:my-12">
      <p className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-800 text-center sm:text-left">
        {title}
      </p>
      <div className="w-full h-[1px] bg-black/70" />
    </div>
  )
}

export default SectionTitle