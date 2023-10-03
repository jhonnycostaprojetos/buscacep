export default function SelectState({ options, value, setValue }) {

  return (
    <div className={`flex mr-3 text-base`}>
      <select className={`flex border border-blue-500 rounded items-center justify-center p-3 text-base`} value={value} onChange={({ target }) => setValue(target.value)}>
        <option className={` `} key={"UF"} value={""} disabled>UF</option>
        {options.map((option) => (
          <option className={``} key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}