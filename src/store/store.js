import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ['notes', 'currentNoteIndex', 'currentTodoIndex'],
});

export default new Vuex.Store({
  state: {
    notes: [],
    currentNoteIndex: '',
    currentTodoIndex: '',
    colors: [
      '#ef9a9a',
      '#f48fb1',
      '#ce93d8',
      '#b39ddb',
      '#9fa8da',
      '#90caf9',
      '#81d4fa',
      '#80deea',
      '#80cbc4',
      '#a5d6a7',
      '#c5e1a5',
      '#e6ee9c',
      '#fff59d',
      '#ffe082',
      '#ffcc80',
      '#ffab91',
      '#bcaaa4',
      '#eeeeee',
    ],
  },
  getters: {
    getNotes(state) {
      return state.notes
    },
    getColors(state) {
      return state.colors
    }
  },
  mutations: {
    setCurrentNoteIndex(state, noteIndex) {
      this.state.currentNoteIndex = noteIndex;
    },
    setCurrentTodoIndex(state, todoIndex) {
      this.state.currentTodoIndex = todoIndex;
    },
    addNote(state, note) {
      this.state.notes.push({...note});
    },
    addNoteTitle(state, noteTitle) {
      this.state.notes[this.state.currentNoteIndex].noteTitle = noteTitle.toUpperCase();
    },
    editNoteTitle(state, title) {
      this.state.notes[this.state.currentNoteIndex].noteTitle = title.toUpperCase();
    },
    removeNote(state, noteId) {
      this.state.notes.splice(noteId, 1);
    },
    addTodo(state, todo) {
      this.state.notes[this.state.currentNoteIndex].todos.push({...todo});
    },
    editTodo(state, todo) {
      this.state.notes[this.state.currentNoteIndex].todos[this.state.currentTodoIndex] = todo;
    },
    removeTodo(state, todoIndex) {
      this.state.notes[this.state.currentNoteIndex].todos.splice(todoIndex, 1);
    },
    checkTodo(state, completeStatus) {
      this.state.notes[this.state.currentNoteIndex].todos[this.state.currentTodoIndex].completed = completeStatus;
    },
  },
  plugins: [dataState],
});
