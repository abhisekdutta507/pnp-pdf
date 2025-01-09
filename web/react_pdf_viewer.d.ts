import { CSSProperties } from "react";

declare type PDFViewerProps = {
  file: string;
  style: CSSProperties;
}

declare const PDFViewer: (props: PDFViewerProps) => JSX.Element;

export { PDFViewer };

export default PDFViewer;
