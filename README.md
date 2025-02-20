# Modal Component

This library provides a simple and reusable modal window component built with React and Vite. The modal window is designed to be used as a "success" modal, which can be displayed when a form is completed, a button is clicked, or any other event that requires user feedback !

# Context

It was made for a [student project](https://github.com/AndreaP2A/P10-HRnet-React), where an old [jQuery app](https://github.com/OpenClassrooms-Student-Center/P12_Front-end) was to be "converted into" a React one and its subsequent components were to be converted as well. Out of the 4 major components, the modal window was the one I chose to work on, to implement and to publish separately as well, the remaining ones being popular libraries that I imported.

## Features

- Easy to integrate into any React project
- Customizable content through children props
- Simple show/hide functionality
- Styled with CSS for a clean and modern look

## Installation

To install the modal component, you can use npm:

```sh
npm install modal-window-ap2a
```

## Usage

Here is an example of how to use the modal component in your React project:

```jsx
import React, { useState } from "react";
import { Modal } from "modal-window-ap2a";
import "modal-window-ap2a/dist/my-library.css"; // Adjust the path if necessary

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        Show Success Modal Window
      </button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h1>Form Submitted Successfully!</h1>
        <p>Your form has been submitted. Thank you!</p>
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

## CSS

You can customize the appearance of the modal by modifying the CSS file. Here is an example of the default CSS:

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
}

.modal-close-btn {
  margin-top: 10px;
}
```
