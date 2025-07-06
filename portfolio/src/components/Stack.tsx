
export default function Stack({stack, level, }: {stack?: string, level?: string}) {
    const strength = `w-[${level}%]`
  return <div className="mt-4">
  <div className="flex justify-between items-center">
    <p>{stack}</p>
    <p>{level}%</p>
  </div>
  <div className="h-2 w-full bg-gray-300 rounded-full">
      <div className={`h-full ${strength} bg-[#aa6f47] rounded-full`}></div>
  </div>
</div>
}
