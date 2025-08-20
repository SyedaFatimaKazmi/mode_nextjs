// const DashboardLayout = ({children}) => {
//     return <div>{children}</div>;
// }

// export default DashboardLayout;

// to fix the typescript childreb error


// import { PropsWithChildren, Suspense } from "react";

// const DashboardLayout = ({children} : PropsWithChildren) => {
//     return <div>
//             <Suspense fallback={<div> ...loading </div>}> 
//             {/* now this loading will be showed inplace of that component */}
//                 {children}
//             </Suspense>
//         </div>;
// }

// export default DashboardLayout;


import { Suspense } from 'react'
import Navigation from '../components/Navigation'
import DashboardSkeleton from '../components/DashboardSkeleton'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pl-16 md:pl-64 pt-0 min-h-screen">
        <div className="max-w-6xl mx-auto p-4 md:p-8">
          <Suspense>{children}</Suspense>
          {/* <Suspense fallback={<DashboardSkeleton />}>{children}</Suspense>  -> created loading page for this instead*/} 
        </div>
      </main>
    </div>
  )
}