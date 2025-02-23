import React from 'react'
import Editor from './editor';
import Toolbar from './toolbar';

interface DocumentIdPageProps {
    params: Promise<{documentId: string}>
}
const DocumentIdPage = async ({params}:DocumentIdPageProps) => {
  // const {documentId} = await params;

  return (
    <div className='min-h-[100dvh] bg-[#fafbfd] p-2'>
      <Toolbar/>
    <Editor/>
    </div>
  )
}

export default DocumentIdPage;