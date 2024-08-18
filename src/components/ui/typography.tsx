import {PropsWithChildren} from "react";

const H1 = (props: PropsWithChildren) => {
  return (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {props.children}
      </h1>
  )
}
H1.displayName = "H1";

const H2 = (props: PropsWithChildren) => {
  return (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {props.children}
      </h2>
  )
}
H2.displayName = "H2";

const H3 = (props: PropsWithChildren) => {
  return (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {props.children}
      </h3>
  )
}
H3.displayName = "H3";

export {H1, H2, H3}