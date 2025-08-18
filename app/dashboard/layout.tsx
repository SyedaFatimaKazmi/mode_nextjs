// const DashboardLayout = ({children}) => {
//     return <div>{children}</div>;
// }

// export default DashboardLayout;

// to fix the typescript childreb error


import { PropsWithChildren } from "react";

const DashboardLayout = ({children} : PropsWithChildren) => {
    return <div>{children}</div>;
}

export default DashboardLayout;

