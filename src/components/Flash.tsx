import * as React from 'react';
import './Flash.css';

const Flash = React.forwardRef((_props, ref) => {
  const divRef = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => ({
    start() {
      const div = divRef.current;
      if (!div) return;
      div.classList.remove('Flash--capture');
      // Trigger reflow
      void div.offsetWidth;
      div.classList.add('Flash--capture');
    },
  }));

  return <div className="Flash" ref={divRef} />;
});

export default Flash;

export type StartType = { start: () => void }
export type RefType = React.RefObject<StartType>
export type CallbackType = () => void

export const useFlash = (): [RefType, CallbackType] => {
  const ref = React.useRef<StartType>(null);
  const callback = () => ref.current?.start();
  return [ref, callback];
};
