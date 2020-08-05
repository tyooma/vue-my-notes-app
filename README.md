# My Notes App

## Performed
```
Simple SPA "My Notes" application to create notes with todos
``` 
## Instructions
```
### To create new note click on "+" button
- First you need to give a title to the note: press "Enter" to add a title
- Then you can add todos to this note: type todo and press "Enter"
- When you finish adding todos click on the button at the top left of the input - it's bring you back to the main page
- There is automatically save

### Edit notes & todos
- To edit a note, first you need to open it by clicking on its title or its todos list below
- After opening a note, you can edit the title and todos: double click on it to open editor
- To confirm title editing press "Enter", to cancel - press "Escape" or the button in the form of a cross, then a pop-up will appear where you can confirm the cancellation of editing
- To confirm todo editing, press "Enter", to cancel - "Escape", so as not to degrade the user experience, you can cancel the editing todos without confirmation
- You can also mark completed tasks by clicking on the checkbox to the left of the task. This also works the other way around.

### Delete notes & todos
- To delete a note, hover over the note on the main page, and then click on the cross-shaped button, then a pop-up will appear where you will need to confirm the deletion.
- Todos are deleted by analogy with notes, only first you will need to open the note in which there are todos that you want to delete
```
## Used technologies 
```
- HTML5
- SCSS + BEM Methodology
- Vue.js, Vue-Router, Vuex, Vuex-Persistedstate
```
## Demo
- [DEMO](https://tyooma.github.io/vue-my-notes-app/)

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
