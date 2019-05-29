# A React Component and Icon Library using Zeppelin Element Library

install

```
yarn add @zlab-de/zel-react @zlab-de/zel-react-icons
```

## Getting Started: Components

This library requires the import of **\*zeppelin-element-library.css** for all styles.
You may also bring in **theme.json** to access Zeppelin Element Library Guidelines (colors, spacing...). This is particularly helpful if you are using a CSS-in-JS solution for your styles.

```
import Button from "@zlab-de/zel-react/Button"
import '@zlab-de/zel-react/zeppelin-element-library.css'
import '@zlab-de/zel-react/theme.json

// YourComponent
...
return(
<Button>Click Me</Button>
)
...
```

## Getting Started: Icons

For a complete list of Icons available, please check the (Zeppelin Design System Website)[https://live-zds.zepdev.net/content/guidelines/iconography/].

```
import ZepiconsCopy from "@zlab-de/zel-react-icons/ZepiconsCopy"


// YourComponent.js
...
return(
<ZepiconsCopy>
)
...
```
