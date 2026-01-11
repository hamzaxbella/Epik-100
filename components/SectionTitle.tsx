
const SectionTitle = ({title} : {title : string}) => {
  return (
    <div className="flex justify-between items-center gap-6 my-6 lg:my-12">
        <p className="text-2xl lg:text-4xl font-semibold whitespace-nowrap text-gray-800">{title}</p>
        <div className="w-full h-[1px] bg-black/70" />
    </div>
  )
}

export default SectionTitle