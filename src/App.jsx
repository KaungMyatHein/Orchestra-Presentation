import React from 'react';
import Button from './components/Button/Button';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Figma Button Component Showcase</h1>

      <section className="showcase-section">
        <h2>Sizes</h2>
        <div className="button-group">
          <Button size="sm" label="Small" />
          <Button size="md" label="Medium" />
          <Button size="lg" label="Large" />
          <Button size="xl" label="Extra Large" />
          <Button size="2xl" label="2XL" />
        </div>
      </section>

      <section className="showcase-section">
        <h2>States</h2>
        <div className="button-group">
          <Button state="Default" label="Default" />
          <Button state="Disabled" label="Disabled" />
        </div>
      </section>

      <section className="showcase-section">
        <h2>Icons</h2>
        <div className="button-group">
          <Button icon="Default" label="Default Icon" />
          <Button icon="Dot leading" label="Dot Leading" />
          <Button icon="Only" aria-label="Icon Only" />
        </div>
      </section>

      <section className="showcase-section">
        <h2>Hierarchy</h2>
        <div className="button-group">
          <Button hierarchy="Primary" label="Primary" />
          {/* Add other hierarchies if implemented in CSS */}
        </div>
      </section>
    </div>
  );
}

export default App;
