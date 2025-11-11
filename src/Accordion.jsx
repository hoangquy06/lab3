import React, { useState } from 'react';

function Panel({ title, isActive, onShow, children }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <strong>{title}</strong>
        <button onClick={onShow}>{isActive ? 'Hide' : 'Show'}</button>
      </div>
      {isActive && <div className="panel-body">{children}</div>}
    </div>
  );
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <Panel title="Panel 1" isActive={activeIndex === 0} onShow={() => setActiveIndex(activeIndex === 0 ? null : 0)}>
        <p>This is the content of panel 1.</p>
      </Panel>

      <Panel title="Panel 2" isActive={activeIndex === 1} onShow={() => setActiveIndex(activeIndex === 1 ? null : 1)}>
        <p>This is the content of panel 2.</p>
      </Panel>
    </div>
  );
}
