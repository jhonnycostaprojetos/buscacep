import SelectState from "./SelectState";
import InputDefault from "../InputDefault";
import TabelaDeDados from "../SearchCep/TableData";
import { IconAttention, IconTrash } from "@/icons";
import TableAddress from "./TableAddress";

interface SearchAddressProps {
  city: string,
  setCity?: (event: any) => void
  nameAddress: string,
  setNameAddress?: (event: any) => void
  submitButton: () => void,
  selectState: string,
  selectSetState?: (event: any) => void
  options: any,
  setAddressData: any
  error: null
}

export default function SearchAddress(props: SearchAddressProps) {

  return (
    <>
      <div className={`flex items-center justify-center bg-white w-2/3 h-28 shadow-lg shadow-black-500/40 rounded`}>
        <SelectState options={props.options} value={props.selectState} setValue={props.selectSetState} />
        <InputDefault value={props.city} required type="text" setValue={props.setCity} placeholder="Cidade" />
        <InputDefault value={props.nameAddress} required type="text" setValue={props.setNameAddress} placeholder="Endereço" />
        <button className={`flex flex-col justify-center items-center border text-green-400 border-green-400 hover:bg-green-400 hover:text-white p-3 rounded`}
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
      <div className={`flex m-6 relative items-center justify-center bg-white w-2/3 h-auto overflow-y-auto shadow-lg shadow-black-500/40 rounded`}>
        <div className={`m-auto`}>
          <TableAddress data={props.setAddressData} />
        </div>

      </div>
    </>





  )

}