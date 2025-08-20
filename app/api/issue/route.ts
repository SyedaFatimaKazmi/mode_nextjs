import { NextResponse } from 'next/server'
import { db } from '@/db'
import { issues } from '@/db/schema'
import { getCurrentUser } from '@/lib/dal'

export async function GET() {
  try {
    const allIssues = await db.query.issues.findMany()
    return NextResponse.json({data: {allIssues}})
  } catch (error) {
    console.error('Error fetching issues:', error)
    return NextResponse.json(
      { error: 'Failed to fetch issues' },
      { status: 500 }
    )
  }
}

//export async function POST(request: Request) {
export async function POST(request: NextResponse) {
  try {
    // Validate required fields
    // if (!data.title || !data.userId) {
    //   return NextResponse.json(
    //     { error: 'Title and userId are required' },
    //     { status: 400 }
    //   )
    // }

       //   .values({
    //     title: data.title,
    //     description: data.description || null,
    //     status: data.status || 'backlog',
    //     priority: data.priority || 'medium',
    //     userId: data.userId,
    //   })

    const newIssueData = await request.json()
    // Create the issue
    const [newIssue] = await db
      .insert(issues)
      .values(newIssueData)
      .returning()

    return NextResponse.json(
      {data : {newIssue}}
    )
  } catch (error) {
    console.error('Error creating issue:', error)
    return NextResponse.json(
      { error: 'Failed to create issue' },
      { status: 500 }
    )
  }
}