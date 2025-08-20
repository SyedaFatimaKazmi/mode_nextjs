import styles from './newissue.module.css'
// //example use of module css - not used much unless required for a specific usecase

// const NewIssuePage = ()=>{
//     return <div>
//         <button className= {styles.button}>hello this is newissue page</button>
//     </div>
// }
// export default NewIssuePage;

import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import NewIssue from '@/app/components/NewIssue'

export default async function NewIssuePage() {
  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <Link
        href="/dashboard"
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 mb-6"
      >
        <ArrowLeftIcon size={16} className="mr-1" />
        Back to Dashboard
      </Link>

      <h1 className="text-2xl font-bold mb-6">Create New Issue</h1>

      <div className="dark:bg-dark-elevated border border-gray-200 dark:border-dark-border-default rounded-lg shadow-sm p-6">
        <Suspense fallback={<div>Loading...</div>}>
          <NewIssue /> 
          {/* suspend new issue till y get "user data" and see if user exists */}
        </Suspense> 
      </div>
    </div>
  )
}