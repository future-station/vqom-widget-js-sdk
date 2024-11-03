# @vqom/widget-js-sdk

[![npm version](https://img.shields.io/npm/v/@vqom/widget-js-sdk.svg)](https://www.npmjs.com/package/@vqom/widget-js-sdk)
[![license](https://img.shields.io/npm/l/@vqom/widget-js-sdk.svg)](LICENSE)
[![documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](#documentation)

> A JavaScript SDK for integrating the vQom chat widget into web applications with ease.

---

## Table of Contents

- [@vqom/widget-js-sdk](#vqomwidget-js-sdk)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
  - [Usage Examples](#usage-examples)
    - [React](#react)
    - [Angular](#angular)
    - [Vue.js](#vuejs)
    - [Ember.js](#emberjs)
    - [Svelte](#svelte)
  - [API Reference](#api-reference)
    - [vQom Initialization](#vqom-initialization)
    - [update](#update)
  - [Configuration Options](#configuration-options)
  - [Troubleshooting](#troubleshooting)
    - [Widget Not Displaying](#widget-not-displaying)
    - [TypeScript Issues](#typescript-issues)
    - [`update` Method Not Working](#update-method-not-working)
  - [Support](#support)
  - [Contributing](#contributing)
  - [License](#license)
  - [Frequently Asked Questions](#frequently-asked-questions)
    - [Can I use this SDK in a plain JavaScript project?](#can-i-use-this-sdk-in-a-plain-javascript-project)
    - [Does the widget support multiple languages?](#does-the-widget-support-multiple-languages)
    - [Is the widget responsive?](#is-the-widget-responsive)
  - [Additional Notes](#additional-notes)

---

## Introduction

The `@vqom/widget-js-sdk` is a JavaScript Software Development Kit (SDK) that allows developers to seamlessly integrate the vQom chat widget into their web applications. With support for popular JavaScript frameworks and TypeScript definitions, it's designed to make the integration process straightforward and efficient.

---

## Features

- **Easy Integration**: Quickly add the vQom chat widget to your web application.
- **Framework Support**: Compatible with React, Angular, Vue.js, Ember.js, Svelte, and plain JavaScript.
- **TypeScript Support**: Includes TypeScript definitions for type safety and improved developer experience.
- **Customizable**: Pass custom configurations and user data to personalize the chat experience.
- **Efficient Loading**: Optimized for performance with asynchronous script loading.

---

## Installation

Install the SDK via npm:

```bash
npm install @vqom/widget-js-sdk
```

Or using Yarn:

```bash
yarn add @vqom/widget-js-sdk
```

---

## Getting Started

To start using the vQom chat widget in your application, you need to:

1. **Import the SDK** into your project.
2. **Initialize the widget** with your unique `widget_id`.

The basic initialization looks like this:

```javascript
import vQom from '@vqom/widget-js-sdk';

vQom({ widget_id: 'your_widget_id' });
```

---

## Usage Examples

### React

```jsx
import React, { useEffect } from 'react';
import vQom from '@vqom/widget-js-sdk';

const App = () => {
  useEffect(() => {
    vQom({ widget_id: 'your_widget_id' });
  }, []);

  return (
    <div>
      {/* Your app components */}
    </div>
  );
};

export default App;
```

### Angular

```typescript
import { Component, OnInit } from '@angular/core';
import vQom from '@vqom/widget-js-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    vQom({ widget_id: 'your_widget_id' });
  }
}
```

### Vue.js

```vue
<script>
import { onMounted } from 'vue';
import vQom from '@vqom/widget-js-sdk';

export default {
  setup() {
    onMounted(() => {
      vQom({ widget_id: 'your_widget_id' });
    });
  },
};
</script>

<template>
  <!-- Your app components -->
</template>
```

### Ember.js

```javascript
import Component from '@glimmer/component';
import { action } from '@ember/object';
import vQom from '@vqom/widget-js-sdk';

export default class AppComponent extends Component {
  @action
  initializeVQom() {
    vQom({ widget_id: 'your_widget_id' });
  }
}

// In your template, call the action when the component is inserted
{{did-insert this.initializeVQom}}
```

### Svelte

```svelte
<script>
  import { onMount } from 'svelte';
  import vQom from '@vqom/widget-js-sdk';

  onMount(() => {
    vQom({ widget_id: 'your_widget_id' });
  });
</script>

<!-- Your app components -->
```

---

## API Reference

### vQom Initialization

**Function Signature:**

```typescript
vQom(settings: vQomSettings): void;
```

**Description:**

Initializes the vQom chat widget with the provided settings. This function must be called before using any other methods provided by the SDK.

**Parameters:**

- `settings` (**Required**): An object containing the widget configuration. At a minimum, it must include the `widget_id`.

**Example:**

```javascript
vQom({
  widget_id: 'your_widget_id',
  user_name: 'John Doe',
  email: 'john.doe@example.com',
  custom_data: {
    plan: 'Premium',
    signup_date: '2023-10-01',
  },
});
```

### update

**Function Signature:**

```typescript
update(newSettings: Partial<vQomSettings>): void;
```

**Description:**

Updates the widget settings or user information after initialization.

**Parameters:**

- `newSettings` (**Required**): An object containing the new settings or user data to update.

**Example:**

```javascript
update({
  user_name: 'Jane Smith',
  email: 'jane.smith@example.com',
});
```

---

## Configuration Options

The `vQomSettings` object can include the following properties:

- **widget_id** (`string`) **[Required]**: Your unique vQom widget ID.
- **user_name** (`string`): The name of the current user.
- **email** (`string`): The email address of the current user.
- **language** (`string`): Set the language for the chat widget (e.g., `'en'`, `'es'`).
- **custom_data** (`object`): An object containing any additional custom data you'd like to associate with the user.
- **theme_color** (`string`): Customize the theme color of the widget (e.g., `'#ff6600'`).
- **[key: string]: any**: Additional properties for future extensions or custom configurations.

**Example:**

```javascript
vQom({
  widget_id: 'your_widget_id',
  user_name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  language: 'en',
  theme_color: '#00aaff',
  custom_data: {
    userId: 'user_12345',
    subscriptionLevel: 'Gold',
  },
});
```

---

## Troubleshooting

### Widget Not Displaying

- **Ensure Correct `widget_id`**: Double-check that you have provided the correct `widget_id`.
- **Client-Side Initialization**: Make sure the initialization code runs on the client side. If you're using server-side rendering, wrap the initialization code in a `useEffect`, `onMounted`, or equivalent hook to ensure it runs only on the client.
- **Check for JavaScript Errors**: Open the browser console to see if there are any errors related to the widget script.
- **Script Blocking**: Ensure that your content security policy (CSP) allows loading scripts from `https://widget.vqom.chat`.

### TypeScript Issues

- **Type Definitions**: The SDK includes TypeScript definitions. If you encounter issues, ensure that your project recognizes these types.
- **tsconfig.json**: You may need to update your `tsconfig.json` to include `"node_modules/@vqom/widget-js-sdk"` in the `include` array.

### `update` Method Not Working

- **Initialization**: Ensure that you have called `vQom()` before calling `update()`.
- **Correct Parameters**: Verify that you're passing an object with valid keys to the `update()` method.

---

## Support

If you need assistance or have any questions, please reach out:

- **Website**: [https://www.vqom.chat](https://www.vqom.chat)
- **Email**: [support@vqom.chat](mailto:support@vqom.chat)

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -am 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

Please make sure to update tests as appropriate.

---

## License

This project is licensed under the **BSD 3-Clause License** - see the [LICENSE](LICENSE) file for details.

---

_Developed with ❤️ by [Future Station](https://www.vqom.chat)_

---

## Frequently Asked Questions

### Can I use this SDK in a plain JavaScript project?

Yes, the SDK is compatible with plain JavaScript projects. Simply include the SDK and initialize it as shown:

```html
<script src="node_modules/@vqom/widget-js-sdk/dist/index.js"></script>
<script>
  vQom({ widget_id: 'your_widget_id' });
</script>
```

### Does the widget support multiple languages?

Yes, you can specify the language by setting the `language` property in the configuration options.

### Is the widget responsive?

Absolutely! The vQom chat widget is designed to be responsive and works well on both desktop and mobile devices.

---

## Additional Notes

- **Optimized Loading**: The SDK ensures that the chat widget script is loaded asynchronously without blocking your application's main thread.
- **Custom Data**: Utilize the `custom_data` object to pass additional user information, which can be helpful for personalized support or analytics.
- **Security**: Make sure to adhere to best security practices, especially when dealing with user data.

---

By integrating the vQom chat widget into your application, you can enhance user engagement and provide real-time support to your users. The `@vqom/widget-js-sdk` simplifies this integration, allowing you to focus on building great features.

For any further assistance, please don't hesitate to contact our support team.

Happy Coding! 🚀
