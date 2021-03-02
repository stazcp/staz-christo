import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'
import PDF from './StazChristodoulakisResume.pdf'

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const pageWidth = window.innerWidth

  function onDocLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  return (
    <div className="pdf_root">
      <Document
        file={PDF}
        options={{ workerSrc: 'pdf.worker.js' }}
        onLoadSuccess={onDocLoadSuccess}
      >
        <Page pageNumber={pageNumber} width={pageWidth} />
      </Document>
    </div>
  )
}

//more pages https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9
