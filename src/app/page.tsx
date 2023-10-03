"use client"
import SearchAddress from "@/components/SearchAddress/SearchAddress"
import SearchCep from "@/components/SearchCep/SearchCep"
import { statedata } from "@/model/statesModel"
import { useState } from "react"

export default function Home() {
  const [cep, setCep] = useState('')
  const [cepData, setCepData] = useState('')
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectForm, setSelectForm] = useState('buscacep')
  const [city, setCity] = useState('')
  const [nameAddress, setNameAddress] = useState('')
  const [addressData, setAddressData] = useState([''])
  const [uf, setUf] = useState('')

  function handleInputChange(e: any) {
    setCep(e.target.value)
  }

  function handleSelectRadio({ target }) {
    setSelectForm(target.value)
  }

  async function getCep(cep: string) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json();
    setCepData(data)

    return data;
  }

  async function getAddres(uf: string, city: string, nameAddress: string) {
    const response = await fetch(`https://viacep.com.br/ws/${uf}/${city}/${nameAddress}/json/`)
    const data = await response.json();
    setAddressData(data)
    return data;
  }

  function displayError(msg: any, timeSeconds = 10) {
    setError(msg)
    setTimeout(() => setError(null), timeSeconds * 1000)
  }

  const handleSubmit = () => {
    if (cep.length === 0) {
      return displayError('Campo vazio! Por favor preencher!');
    }
    getCep(cep)
    setIsVisible(!isVisible);
  }

  const handleSubmitAddress = () => {
    if (city.length === 0 || nameAddress.length === 0) {
      return displayError('Campo vazio! Por favor preencher!');
    }
    getAddres(uf, city, nameAddress)
    setIsVisible(!isVisible);
  }
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setCepData('')
    setCep('')
  };

  return (
    <div className={`flex flex-col h-screen items-center justify-center`}>
      <div>
        <h1 className={`flex items-center flex-row text-3xl normal-case font-bold tracking-wide mb-6`}>Busque seu Cep</h1>
      </div>
      <div className={`flex flex-col justify-center items-center mb-4 w-2/3 h-24`}>
        <form className={`flex`}>
          <label className="flex items-center justify-center m-3">
            <input className={`mr-2`} type="radio" name="busca" value="buscacep" onChange={({ target }) => setSelectForm(target.value)} checked={selectForm === 'buscacep'} />
            Busca por Cep
          </label>

          <label className="flex items-center justify-center m-3">
            <input className={`mr-2`} type="radio" name="busca" value="buscaendereco" onChange={handleSelectRadio} checked={selectForm === 'buscaendereco'} />
            Busca por Endereço
          </label>
        </form>
      </div>
      {selectForm === 'buscacep' ? (
        <SearchCep
          cep={cep}
          setCep={handleInputChange}
          submitButton={handleSubmit}
          error={error}
          isVisible={isVisible}
          toggleVisibility={toggleVisibility}
          setCepData={cepData}
        />

      ) :
        <SearchAddress
          options={statedata}
          selectState={uf}
          selectSetState={setUf}
          city={city}
          setCity={setCity}
          nameAddress={nameAddress}
          setNameAddress={setNameAddress}
          submitButton={handleSubmitAddress}
          setAddressData={addressData}
          error={error}
        />
      }
    </div>
  )
}
