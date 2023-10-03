import { IconAttention, IconTrash } from "@/icons";
import TabelaDeDados from "./TableData";
import InputMask from "react-input-mask"

interface SearchCepProps {
  cep: string,
  setCep?: (event: any) => void
  submitButton: () => void
  error: null
  isVisible: boolean
  toggleVisibility: () => void
  setCepData: any
}

export default function SearchCep(props: SearchCepProps) {

  return (
    <>
      <div className={` flex items-center justify-center bg-white w-2/3 h-24 border shadow-lg shadow-black-500/40 rounded`}>
        <form className={`flex m-4`}>
          <InputMask
            className={`text-center border-2 rounded border-blue-500 text-base p-4`}
            mask="99999-999"
            maskChar="_"
            value={props.cep}
            onChange={props.setCep}
            placeholder="-"
          />
        </form>
        <button className={`flex flex-col justify-center items-center border-2 text-green-400 border-green-400 hover:bg-green-400 hover:text-white p-4 rounded`}
          onClick={() => props.submitButton()}
        >Buscar</button>
      </div>
      {props.error ? (<div className={`flex p-2 m-3 items-center bg-red-400 text-white border-red-700 rounded-lg`}>
        <div className={`w-6`}>
          {IconAttention}
        </div>
        <span className={``}>{props.error}</span>
      </div>
      ) : false}
      {props.isVisible && (
        <div className={`flex items-center justify-center bg-white mt-10 w-2/3 h-auto shadow-lg shadow-black-500/40 rounded`}>
          <TabelaDeDados data={props.setCepData}></TabelaDeDados>
          <button className={`hover:inline-flex`} onClick={() => props.toggleVisibility()}>
            {IconTrash}
          </button>
        </div>
      )}
    </>
  )

}