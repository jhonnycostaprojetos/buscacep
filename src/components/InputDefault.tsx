interface InputDefaultProps {
  label?: string,
  value?: any,
  required?: boolean,
  type?: 'text' | 'email' | 'password'
  setValue?: (event: any) => void
  placeholder: string
}

export default function InputDefault(props: InputDefaultProps) {
  return (
    <div className={`flex justify-center items-center mr-3`}>
      <label>{props.label}</label>
      <input
        placeholder={props.placeholder}
        required
        type={props.type ?? 'text'}
        value={props.value}
        onChange={e => props.setValue?.(e.target.value)}
        className={`text-center text-base border rounded border-blue-500 p-3`}
      />
    </div>
  )
}