import React from 'react';

function App() {
  return (
    <section className="w-[calc(100%-30px)] max-w-[1077px] mx-[auto] my-[30px]">
      <div className="mb-md">
        <a href="#" className="hs-badge">
          <span className="hs-badge__label">Test badge</span>
        </a>
      </div>
      <div>
        <button className="hs-button">
          <span className="hs-button__label">HSButton Tailwind</span>
        </button>
        <button className="hs-button is-outlined">
          <span className="hs-button__label">HSButton Tailwind</span>
        </button>
        <button className="hs-button is-filled">
          <span className="hs-button__label">HSButton Tailwind</span>
        </button>
      </div>
      <div>
        <button className="hs-button is-disabled">
          <span className="hs-button__label">HSButton Tailwind</span>
        </button>
        <button className="hs-button is-outlined is-disabled">
          <span className="hs-button__label">HSButton Tailwind</span>
        </button>
        <button className="hs-button is-filled is-disabled">
          <span className="hs-button__label">HSButton Tailwind</span>
        </button>
      </div>
      <div>
        <p>Bruh <a href="#" className="hs-link">this link</a> is very unsafe.</p>
      </div>
      <div>
        <label className="hs-form-field">
          <span className="hs-form-field__label">Form Field Label</span>
          <input className="hs-form-field__input" type="text" placeholder="Placeholder..." />
          <span className="hs-form-field__helper">Helper text</span>
        </label>
        <label className="hs-form-field is-required">
          <span className="hs-form-field__label">Form Field Label</span>
          <input className="hs-form-field__input" type="text" placeholder="Placeholder..." />
          <span className="hs-form-field__helper">Helper text</span>
        </label>
        <label className="hs-form-field is-danger">
          <span className="hs-form-field__label">Form Field Label</span>
          <input className="hs-form-field__input" type="text" placeholder="Placeholder..." />
          <span className="hs-form-field__helper">Helper text</span>
        </label>
      </div>
      <div>
        <label className="hs-select-field">
          <span className="hs-select-field__label">Select</span>
          <select className="hs-select-field__input">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <span className="hs-select-field__helper">Helper text</span>
        </label>
        <label className="hs-select-field is-required">
          <span className="hs-select-field__label">Select</span>
          <select className="hs-select-field__input">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <span className="hs-select-field__helper">Helper text</span>
        </label>
        <label className="hs-select-field is-danger">
          <span className="hs-select-field__label">Select</span>
          <select className="hs-select-field__input">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <span className="hs-select-field__helper">Helper text</span>
        </label>
      </div>
      <div className="w-[100px] h-[100px] bg-accent-400"></div>
      <h1 className="supertitle">Supertitle</h1>
      <h2 className="title">Title</h2>
      <h3 className="subtitle">Subtitle</h3>
      <p className="body">Body</p>
      <p className="mono">Mono</p>
      <p className="small">Small</p>
    </section>
  );
}

export default App;