import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ✅ Import Snow theme CSS

const Editor = () => {
  const [content, setContent] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-xl font-semibold mb-4">📝 Write Something</h2>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        placeholder="Type your content here..."
        style={{ height: '300px', marginBottom: '50px' }}
      />
      <div>
        <h3 className="text-lg font-medium">🔍 Preview:</h3>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          style={{
            background: '#f9f9f9',
            padding: '10px',
            borderRadius: '8px',
            minHeight: '100px',
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
