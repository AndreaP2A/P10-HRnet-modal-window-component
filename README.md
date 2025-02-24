# Modal Component

This library provides a simple and reusable modal window component built with React and Vite. The modal window is designed to be used as a "success" modal, which can be displayed when a form is completed, a button is clicked, or any other event that requires user feedback !

# Context

It was made for a [student project](https://github.com/AndreaP2A/P10-HRnet-React), where an old [jQuery app](https://github.com/OpenClassrooms-Student-Center/P12_Front-end) was to be "converted into" a React one and its subsequent components were to be converted as well. Out of the 4 major components, the modal window was the one I chose to work on, to implement and to publish separately as well, the remaining ones being popular libraries that I imported.

## Features

- Easy to integrate into any React project
- Customizable content through children props
- Simple show/hide functionality
- Styled with CSS for a clean and modern look : modal is encapsulated in an overlay that you can customize !

## Installation

To install the modal component, you can use npm:

```sh
npm install modal-window-ap2a
```

It's already installed, but you need the last updated version ? Then just use :

```sh
npm update modal-window-ap2a
```

## Usage

Here is an example of how to use the modal component in your React project, with a demo show button :

```jsx
import { useState } from "react";
import Modal from "modal-window-ap2a";
import "modal-window-ap2a/modalwindow.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Modal
        show={showModal}
        onClose={handleClose}
        closeButtonX={true}
        closeButton={true}
      >
        <h1>Hello, Modal!</h1>
      </Modal>
    </div>
  );
};

export default App;
```

## Props

The Modal component accepts the following props:

- show (boolean): Determines whether the modal is visible or not.
- onClose (function): Callback function to handle closing the modal.
- children (node): The content to be displayed inside the modal.
- closeButton (boolean): Determines whether the close button should be displayed. Default is true.
- closeButtonX (boolean): Determines whether the x close button should be displayed. Default is true.

## Customizing Styles

You can customize the appearance of the modal by overriding the default styles in your own CSS file. Here are the default class names you can target:

- `.modal__overlay`: Styles the overlay background.
- `.modal__content`: Styles the modal container.
- `.modal__close-btn`: Styles the close button at the bottom (the cta).
- `.modal__close-btn-x`: Styles the close button in the top right corner (the x).

## Styling example

```css
body .modal__overlay {
  background-color: rgba(0, 0, 0, 0.7);
}

body .modal__content {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

body .modal__close-btn {
  background-color: #5e6f21;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

body .modal__close-btn-x {
  background-color: #5e6f21;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 20px;
}
```
