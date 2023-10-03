export default function TabelaDeDados({ data }: any) {
  const column = Object.keys(data);

  return (
    <>
      {column.length > 0 ? (
        <table className={`border-2 p-2 m-4`}>
          <thead>
            <tr>
              {column.map((column, index) => (
                <th className={`bg-[#0071ad] text-white border-[#0071ad] border-2 p-2 text-center capitalize`} key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr >
              {column.map((column, index) => (
                <td className={`p-2 text-center capitalize`} key={index}>{data[column]}</td>
              ))}
            </tr>
          </tbody>
        </table>
      ) : <span></span>}
    </>
  );
}