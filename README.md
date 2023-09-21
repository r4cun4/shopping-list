# shopping-list

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### Structure and flow

+-----------------------+
|   ProductListLayout   | ----> is the top-level component that holds the main structure of the application
|                       |
|   +-------------------+
|   | NavbarItem        | ----> represents the navigation bar at the top of the application
|   |                   |
|   +-------------------+
|                       |
|   +-------------------+
|   | EntryList         | ----> is responsible for displaying the list of entry items. It uses the EntryItem component for each entry
|   |                   |
|   +-------------------+
|                       |
|   +-------------------+
|   | TotalList         | ----> displays the total price calculated from the entry items
|   |                   |
|   +-------------------+
|                       |
+-----------------------+
           |
           |
           v
+--------------------------------+
|        EntryItem               | ----> represents each item in the entry list. It can be clicked to navigate to an EntryView
|                                |       for editing
+--------------------------------+
           |
           |
           v
+--------------------------------+
|       EntryView                | ----> is responsible for displaying and editing a single entry. It is used for creating new
|                                |       entries and editing existing ones
+--------------------------------+
           |
           |
           v
+--------------------------------+
|      Vuex Store (State,        | ----> manages the application's state and data flow.
|      Actions, Getters,         |       Actions: manage asynchronous tasks and interact with APIs to load, create, update and
|      Mutations)                |       delete entries.
|                                |       Getters: compute derived values from the state
+--------------------------------+       Mutations: modify the state synchronously
                                         State: holds the application's data, including the loading state and the list of entries
           |
           |
           v
+--------------------------------+
|      Router Configuration      | ----> manages the routing navigation, in this app shows the children route of the Layout
|                                |
+--------------------------------+