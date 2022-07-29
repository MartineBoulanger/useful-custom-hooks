import { useState } from 'react';
import { useCopyToClipboard } from 'hooks/useCopyToClipboard';

const CopyToClipboardComponent = () => {
  const [state, setState] = useState();
  const [copyToClipboard, { success }] = useCopyToClipboard();

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleClick = () => {
    copyToClipboard(state);
    // the alert is only to show that the copying works
    alert(`This is the copied text : ${state}`);
  };

  return (
    <>
      <button onClick={handleClick}>{success ? 'Copied' : 'Copy Text'}</button>
      <input type='text' value={state} onChange={handleChange} />
    </>
  );
};

export default CopyToClipboardComponent;
