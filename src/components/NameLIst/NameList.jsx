/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { contextAPI } from "../../shared/Context/Context"

export default function NameList() {

  const { student, isOpen } = useContext(contextAPI);

  return (
    <>
      <p>{isOpen ? "true" : "false"}</p>

      {
        <div>
          <p>{student?.name}</p>
          <p>{student?.age}</p>
          <p>{student?.dept}</p>
        </div>
      }
    </>
  )
}
