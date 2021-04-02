import './App.css';

import React, { useState } from 'react'
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

function App() {
  const [name, setName] = useState('Константин Константинопольский');
  const [title, setTitle] = useState('пользователь приложения');

  return (
    <div className="app">
      <div className="app__preview">
        <div className="preview" id="preview">
          <div className="preview__name">{name}</div>
          <div className="preview__title">{title}</div>
        </div>
      </div>
      <div className="app__form">
        <form className="form" onSubmit={(event) => {
          event.preventDefault();

          domtoimage.toBlob(document.getElementById('preview'))
              .then((blob) => {
                saveAs(blob, 'background.png');
              });
        }}>
          <label className="form__label">Имя
            <input
                className="form__text-input"
                type="text"
                value={name}
                onChange={event => {
                  setName(event.target.value);
                }}
                name="name"
            />
          </label>
          <label className="form__label">Подпись
            <input
                className="form__text-input"
                type="text"
                value={title}
                onChange={event => {
                  setTitle(event.target.value);
                }}
                name="title"
            />
          </label>
          <div className="form__submit-wrapper">
            <input className="form__submit" type="submit" value="Сохранить"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
