# keeper  

*App to handle and keep ideas (A front end version of Google-Keep)

## Content

  1. [Requirements](#requirements)
  1. [Install Dependencies](#Step-1---Install-dependencies)
  1. [Start App](#Step-2---Start)
  1. [Acess App](#Access-the-application-in-the-browser)
  1. [Files](#Files)
  

## Requirements

No Requirements: only front end functionality

## How to install

```
git clone https://github.com/giovanimachado/keeper.git
```

### Step 1 - Install dependencies

```
npm install
```

### Step 2 - Start

```
npm start
```

## (REST Client) - To do

### Access the application in the browser

The React application runs on port 3000.


## Files
    .
    ├── public
    │   ├── index.html               # HTML page
    │   └── styles.css               # Styles apllied to the elements
    │   
    ├── src                          # Folder containing javascript, objects codes and React.js components
    │   ├── index.js                 # Code to Render the App componene on the index.html
    │   ├── notes.js                 # JS object with notes to test the app
    │   └── Components               # React.js components folder.
    |        ├── App.jsx             # Code related to App functionalities and components rendering.
    |        ├── CreateArea.jsx      # Code to create Area for new notes.
    |        ├── Footer.jsx          # Code to generate Footer section.
    |        ├── Headaer.jsx         # Code to generate Header section.
    |        ├── Note.jsx            # Code to handle each note component
    |
    ├── .gitignore                   # File containing untracked files
    ├── package.json                 # File dependencies
    ├── package-lock.json            # File with a tree representation of components.
    └── ...
