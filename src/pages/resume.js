import React from 'react'
import Resume from '../components/resume.pdf'
import MyHeader from "../components/myheader"
let pdfViewer

export default class ResumePage extends React.Component {
  constructor () {
    super();
    this.state = {showDoc: false};
  }
  componentDidMount () {
    pdfViewer = require('react-pdf/dist/esm/entry.webpack');
    this.setState({ showDoc: true});
  }

  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { numPages, pageNumber } = this.state;

    return (
      <div>
        <MyHeader />
        { this.state.showDoc ?
        <pdfViewer.Document
          file={Resume}
          onLoadSuccess={this.onDocumentLoad}
        >
          <pdfViewer.Page pageNumber={1} />
        </pdfViewer.Document> : "Loading doc"
      }
      <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}
