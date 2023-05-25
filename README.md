# vue-hierarchy-app

Description:
This app is useful in visualizing tree graph on frontend by converting the JSON data which contains information of all the nodes, to represent in a tree model. This conversion logic can be found in utils folder.
The data is fetched from json-server using Axios. JSON-server is used as backend server as the requirement was only to read data from backend. Also it is light weight and easy to configure.
Tree visualization is done with the help of VueBlocksTree plugin.
Bootstrap CDN is used for styling.

The data is handled in a way that even if there are multiple trees with different root nodes in the data set, all trees will be processed and displayed.

Features:
1. Dropdown to choose orientation of tree visualization (horizontal or vertical)
2. Processing and visualizing multiple trees if exist in the dataset
3. When any node is clicked on, we can see its details on the right sidev and the selected node will be highlighted
4. The node details card can be closed by two means -
    a. on clicking the X (close icon)
    b. clicking the selected node again


### Installations -------------
## Vue CLI
```
This has some advantages.
Please refer below urls

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Project setup (loading/importing all required packages)
Note: You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager.

## Setting up vue/cli
```
npm install -g @vue/cli

Note: You can check you have the right version with this command:
vue --version
```

## Installation of all required packages
```
npm install
```

### Compiles and hot-reloads for development

First you will need to run below command to get json-server up and running, (hit localhost:3000/data in browser to verify)
```
npm run server
```
Then, in separate terminal run below commond to compile the frontend and deploy on localhost
```
npm run serve
```

### Run your unit tests
```
npm run test:unit
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Release Notes
- **0.1.0** - First Release

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
