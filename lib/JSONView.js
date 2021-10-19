import ReactJson from 'react-json-view';

export function JSONViewer(props) {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <ReactJson
      src={props.jsonmodal}
      theme="rjv-default"
      iconStyle="square"
      displayObjectSize={false}
      displayDataTypes={false}
      enableClipboard={false}
      indentWidth={2}
    />
  );
}
