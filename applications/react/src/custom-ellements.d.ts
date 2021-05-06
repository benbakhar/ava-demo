// custom-elements.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    /**
     *  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> allows setting standard HTML attributes on the element
     */
    "ava-player": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      key?: string;
    };
  }
}
