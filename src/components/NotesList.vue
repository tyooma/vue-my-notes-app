<template>
  <div class="notes">
    <router-link class="notes__link" :to="`/vue-my-notes-app/todo-list/${this.generatedNoteId}`">
      <button
        class="notes__button"
        @click="noteIdGenerator(); addNote()"
      >+</button>
    </router-link>

    <div v-if="getNotes.length">
      <ul class="notes__list">
        <li
          class="notes__item"
          v-for="(note, index) of getNotes"
          v-bind:key="note.noteId"
        >
          <router-link class="notes__link" :to="`/vue-my-notes-app/todo-list/${note.noteId}`">
            <div @click="setCurrentNoteIndex(index)">{{ note.noteTitle }}</div>
          </router-link>
          <button
            class="notes__remove"
            @click="showModal(index)"
          >
            &times;
          </button>
          <router-link class="notes__link" :to="`/vue-my-notes-app/todo-list/${note.noteId}`">
            <div v-if="note.todos.length">
              <div class="notes__todos" v-if="note.todos.length < 5">
                <span
                  class="notes__todos-items"
                  v-for="todo of note.todos"
                  v-bind:key="todo.id"
                >
                  {{todo.title}},
                </span>
                ...
              </div>
              <div class="notes__todos" v-else-if="note.todos.length >= 5">
                <span class="notes__todos-items">
                  {{note.todos[0].title}},
                  {{note.todos[1].title}},
                  {{note.todos[2].title}},
                  {{note.todos[3].title}},
                  {{note.todos[4].title}},
                </span>
                ...
              </div>
            </div>
            <div class="notes__todos-items" v-else>No todos yet.</div>
          </router-link>
        </li>
      </ul>
    </div>
    
    <div v-else class="notes__alt">
      Add your first note 😋
    </div>

    <Modal
      v-show="isModalShowing"
      @close="closeModal"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Modal from '@/components/Modal';

export default {
  name: 'NotesList',
  data() {
    return {
      isModalShowing: false,
      deleteIndex: '',
      generatedNoteId: '',
    }
  },
  computed: {
    ...mapGetters(['getNotes']),
  },
  methods: {
    ...mapMutations(['addNote', 'removeNote', 'setCurrentNoteIndex']),
    noteIdGenerator() {
      this.generatedNoteId = Date.now();
    },
    addNote() {
      this.$store.commit('addNote', {
        noteId: this.generatedNoteId,
        noteTitle: '',
        todos: [],
      });
    },
    setCurrentNoteIndex(noteIndex) {
      this.$store.commit('setCurrentNoteIndex', noteIndex);
    },
    showModal(id) {
      this.isModalShowing = true;
      this.deleteIndex = id;
    },
    closeModal() {
      this.isModalShowing = false;
    },
    deleteItem() {
      this.$store.commit('removeNote', this.deleteIndex);
    },
  },
  components: {
    Modal,
  }
}
</script>

<style lang="scss" scoped>
  $light-black-color: #2c3e50;
  $orange-color: #ffa42c;
  $white-color: #fff;
  $transition-time: 0.3s;

  .notes {
    padding: 15px;
    margin: 0 auto;

    width: 650px;

    background-color: $white-color;
    border-radius: 20px;
    box-shadow: 0 20px 0 20px $orange-color;

    &__button {
      margin-bottom: 15px;

      width: 50px;
      height: 50px;

      font-size: 30px;

      color: $white-color;
      background-color: $orange-color;

      border-radius: 50%;
      border: none;
      cursor: pointer;

      transition: opacity $transition-time;

      &:hover {
        opacity: 0.7;
      }
    }

    &__list {
      padding: 0;
      margin: 0;
      

      list-style: none;
    }

    &__item {
      padding: 15px;
      margin-bottom: 15px;

      position: relative;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      font-size: 24px;
      font-weight: 500;

      border: 1px solid #ccc;
      border-radius: 20px;
      cursor: pointer;

      transition: box-shadow $transition-time, opacity $transition-time;

      &:hover {
        box-shadow: 0 3px 0 5px $light-black-color;
      }
    }

    &__link {
      text-decoration: none;
      color: inherit;
    }

    &__remove {
      position: absolute;
      top: 5px;
      left: 616px;

      font-size: 24px;

      color: $light-black-color;
      background-color: $white-color;
      border: none;
      cursor: pointer;

      transition: color $transition-time;

      &:hover {
        color: #ff423b;
      }
    }

    &__todos {
      text-align: start;
    }

    &__todos-items {
      font-size: 18px;
      font-weight: 300;

      color: $light-black-color;
    }

    &__alt {
      font-size: 24px;
    }
  }
</style>
