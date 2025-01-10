declare interface IViewerConfig {
  appContainer: HTMLElement;
  principalContainer: HTMLElement | null;
  mainContainer: HTMLElement | null;
  viewerContainer: HTMLElement | null;
  printContainer: HTMLElement | null;
  sidebar: {
    outerContainer: HTMLElement | null;
    sidebarContainer: HTMLElement | null;
    toggleButton: HTMLElement | null;
    resizer: HTMLElement | null;

    thumbnailButton: HTMLElement | null;
    outlineButton: HTMLElement | null;
    attachmentsButton: HTMLElement | null;
    layersButton: HTMLElement | null;

    thumbnailView: HTMLElement | null;
    outlineView: HTMLElement | null;
    attachmentsView: HTMLElement | null;
    layersView: HTMLElement | null;
    currentOutlineItemButton: HTMLElement | null;
  };
  toolbar: {
    container: HTMLElement | null;
    numPages: HTMLElement | null;
    pageNumber: HTMLElement | null;
    scaleSelect: HTMLElement | null;
    customScaleOption: HTMLElement | null;
    previous: HTMLElement | null;
    next: HTMLElement | null;
    zoomIn: HTMLElement | null;
    zoomOut: HTMLElement | null;
    print: HTMLElement | null;
    editorFreeTextButton: HTMLElement | null;
    editorFreeTextParamsToolbar: HTMLElement | null;
    editorHighlightButton: HTMLElement | null;
    editorHighlightParamsToolbar: HTMLElement | null;
    editorHighlightColorPicker: HTMLElement | null;
    editorInkButton: HTMLElement | null;
    editorInkParamsToolbar: HTMLElement | null;
    editorStampButton: HTMLElement | null;
    editorStampParamsToolbar: HTMLElement | null;
    download: HTMLElement | null;
  },
  secondaryToolbar: {
    toolbar: HTMLElement | null;
    toggleButton: HTMLElement | null;
    presentationModeButton: HTMLElement | null;
    openFileButton: HTMLElement | null;
    printButton: HTMLElement | null;
    downloadButton: HTMLElement | null;
    viewBookmarkButton: HTMLElement | null;
    firstPageButton: HTMLElement | null;
    lastPageButton: HTMLElement | null;
    pageRotateCwButton: HTMLElement | null;
    pageRotateCcwButton: HTMLElement | null;
    cursorSelectToolButton: HTMLElement | null;
    cursorHandToolButton: HTMLElement | null;
    scrollPageButton: HTMLElement | null;
    scrollVerticalButton: HTMLElement | null;
    scrollHorizontalButton: HTMLElement | null;
    scrollWrappedButton: HTMLElement | null;
    spreadNoneButton: HTMLElement | null;
    spreadOddButton: HTMLElement | null;
    spreadEvenButton: HTMLElement | null;
    imageAltTextSettingsButton: HTMLElement | null;
    imageAltTextSettingsSeparator: HTMLElement | null;
    documentPropertiesButton: HTMLElement | null;
  };
  findBar: {
    bar: HTMLElement | null;
    toggleButton: HTMLElement | null;
    findField: HTMLElement | null;
    highlightAllCheckbox: HTMLElement | null;
    caseSensitiveCheckbox: HTMLElement | null;
    matchDiacriticsCheckbox: HTMLElement | null;
    entireWordCheckbox: HTMLElement | null;
    findMsg: HTMLElement | null;
    findResultsCount: HTMLElement | null;
    findPreviousButton: HTMLElement | null;
    findNextButton: HTMLElement | null;
  },
  documentProperties: {
    dialog: HTMLElement | null;
    closeButton: HTMLElement | null;
    fields: {
      fileName: HTMLElement | null;
      fileSize: HTMLElement | null;
      title: HTMLElement | null;
      author: HTMLElement | null;
      subject: HTMLElement | null;
      keywords: HTMLElement | null;
      creationDate: HTMLElement | null;
      modificationDate: HTMLElement | null;
      creator: HTMLElement | null;
      producer: HTMLElement | null;
      version: HTMLElement | null;
      pageCount: HTMLElement | null;
      pageSize: HTMLElement | null;
      linearized: HTMLElement | null;
    },
  };
}

declare function getVC(file: string): IViewerConfig;

export function open(file: string): void;
