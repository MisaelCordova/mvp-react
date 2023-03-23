export const Item = ({ codDocumento, codUc, competencia }: { codDocumento: string, codUc: string, competencia: String }) => {
  return (
    <li>
      <table>
        <th>{codDocumento}</th>
        <th>{codUc}</th>
        <th>{competencia}</th>
      </table>

    </li>
  )
}