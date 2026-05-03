import type { ReactNode } from "react"


type childrenProp = {
    children: ReactNode
}

const Alerts = ({children} : childrenProp) => {
  return (
    <>
        <div className="font-v1 text-6xl   text-red-600">
        {children}
        </div>
    </>
  )
}

export default Alerts