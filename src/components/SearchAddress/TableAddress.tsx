export default function TableAddress({ data }: any) {

  const columns = Object.keys(data[0]);

  return (
    <>
      {columns.length > 0 ? (
        <table className={`border-2 p-2 m-4`}>
          <thead>
            <tr className={`bg-[#0071ad] text-white border-[#0071ad] border-2 p-2 text-center capitalize`}>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((endereco: any, rowIndex: any) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td className={`p-2 text-center capitalize`} key={colIndex}>{endereco[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : <span></span>}
    </>
  );
}