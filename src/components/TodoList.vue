<template>
  <div class="todos" v-bind:style="{ '--activeColor': activeColor }">
    <router-link to="/">
      <button class="todos__back-button"> 	
        &#10094;
      </button>
    </router-link>
    <input
      class="todos__input"
      type="text"
      placeholder="What needs to be done?"
      maxlength="30"
      v-if="note.noteTitle"
      v-model="newTodo"
      @keyup.enter="addTodo"
    >
    <h2
      class="todos__title"
      v-if="note.noteTitle"
      @dblclick="editNoteTitle(note.noteTitle)"
    >
      {{ note.noteTitle }}
    </h2>
    <input
      class="todos__title--input"
      type="text"
      placeholder="Give a title to your note"
      maxlength="30"
      v-else
      v-model="newNoteTitle"
      @keyup.enter="addNoteTitle"
    >
    <input
      class="todos__title--edit"
      type="text"
      placeholder="Edit note title"
      maxlength="30"
      v-if="titleEditing"
      v-model="note.noteTitle"
      @keyup.enter="doneEditTitle(note.noteTitle)"
      @keyup.esc="showEditModal"
      v-focus
    >
    <button
      class="todos__title--cancel-edit"
      title="Cancel editing"
      v-if="titleEditing"
      @click="showEditModal"
    >
      &times;
    </button>
    <ul class="todos__list" v-if="todos.length">
      <TodoItem
        v-for="(todo, index) of todos"
        v-bind:todo="todo"
        v-bind:index="index"
        v-bind:key="todo.id"
        @check-todo="checkTodo"
        @show-modal="showModal"
        @edit-todo="editTodo"
        @done-edit="doneEdit"
        @cancel-edit="cancelEdit"
      />
    </ul>
    <p class="todos__empty" v-else>No todos yet.</p>
    <Modal
      v-show="isModalShowing"
      @close="closeModal"
      @deleteItem="deleteItem"
    />
    <Modal
      v-show="isEditModalShowing"
      @close="closeModal"
    >
      <template v-slot:body>
        Are you sure you don't want to save your changes?
      </template>
      <template v-slot:footer>
        <button
          type="button"
          class="modal__button--red"
          @click="cancelEditTitle"
          aria-label="Close modal"
        >
          Don't save
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal';
import TodoItem from '@/components/TodoItem';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TodoList',
  data() {
    return {
      id: this.$route.params.id,
      currentNoteIndex: '',
      note: [],
      todos: [],
      newNoteTitle: '',
      editTitleCache: '',
      titleEditing: false,
      newTodo: '',
      newTodoCache: '',
      editTodoCache: '',
      isModalShowing: false,
      isEditModalShowing: false,
      deleteIndex: '',
      activeColor: '',
    }
  },
  directives: {
    focus: {
      inserted: function (element) {
        element.focus();
      },
    },
  },
  components: {
    Modal,
    TodoItem,
  },
  computed: {
    ...mapGetters(['getNotes', 'getColors']),
  },
  created() {
    this.note = this.getNotes.find(note => note.noteId === Number(this.id));
    this.currentNoteIndex = this.getNotes.indexOf(this.note);
    this.todos = this.note.todos;
  },
  methods: {
    ...mapMutations([
      'setCurrentNoteIndex',
      'addNoteTitle',
      'editNoteTitle',
      'setCurrentTodoIndex',
      'addTodo',
      'checkTodo',
      'editTodo',
      'removeTodo',
    ]),
    addNoteTitle() {
      this.$store.commit('setCurrentNoteIndex', this.currentNoteIndex)
      if (this.newNoteTitle.trim()) {
        this.$store.commit('addNoteTitle', this.newNoteTitle);
        this.newNoteTitle = '';
        this.getRandomColor();
      }
    },
    editNoteTitle(title) {
      this.editTitleCache = title;
      this.titleEditing = true;
    },
    doneEditTitle(title) {
      if (title.trim()) {
        this.$store.commit('editNoteTitle', title);
        this.titleEditing = false;
        this.getRandomColor();
      }
    },
    showEditModal() {
      this.isEditModalShowing = true;
    },
    cancelEditTitle() {
      this.note.noteTitle = this.editTitleCache;
      this.titleEditing = false;
      this.isEditModalShowing = false;
    },
    setCurrentTodoIndex(todoIndex) {
      this.$store.commit('setCurrentTodoIndex', todoIndex);
    },
    addTodo() {
      if (this.newTodo.trim()) {
        this.$store.commit('addTodo', {
          id: Date.now(),
          title: this.newTodo,
          completed: false,
          editing: false,
        });

        this.getRandomColor();
        this.newTodo = '';
      }
    },
    checkTodo(completeStatus, index) {
      this.setCurrentTodoIndex(index);
      this.$store.commit('checkTodo', completeStatus);
      this.getRandomColor();
    },
    editTodo(todo, index) {
      this.setCurrentTodoIndex(index);
      this.editTodoCache = todo.title;
      todo.editing = true;
    },
    doneEdit(todo) {
      if (todo.title.trim()) {
        this.$store.commit('editTodo', todo);
        todo.editing = false;
        this.getRandomColor();
      }
    },
    cancelEdit(todo) {
      todo.title = this.editTodoCache;
      todo.editing = false;
    },
    showModal(index) {
      this.isModalShowing = true;
      this.deleteIndex = index;
    },
    closeModal() {
      this.isModalShowing = false;
      this.isEditModalShowing = false;
    },
    deleteItem() {
      this.$store.commit('removeTodo', this.deleteIndex);
      this.getRandomColor();
    },
    getRandomColor() {
      const colors = this.getColors.sort(() => Math.random() - 0.5);
      this.activeColor = colors[0];
    },
  }
}
</script>

<style lang="scss" scoped>
  $grey-color: #ccc;
  $white-color: #fff;
  $light-black-color: #2c3e50;
  $main-font-size: 24px;

  @mixin input-padding {
    padding: 10px 18px;
  }
  @mixin grey-border {
    border: 1px solid $grey-color;
  }
  @mixin placeholder {
    &::placeholder {
        font-style: italic;

        color: rgb(197, 197, 197);
      }
  }
  @mixin focus {
    &:focus {
      outline: none;
    }
  }

  .todos {
    --activeColor: #ffa42c;

    position: relative;

    padding: 15px;
    margin: 0 auto;

    width: 650px;

    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 20px 0 20px var(--activeColor);

    transition: box-shadow 0.3s;

    &__back-button {
      position: absolute;
      left: 25px;
      top: 20px;

      width: 30px;
      height: 30px;

      font-size: 20px;

      color: $light-black-color;
      background-color: #fff;

      border-radius: 50%;
      border: none;

      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        color: #fff;
        background-color: $light-black-color;
      }
    }

    &__title {
      margin-left: 10px;

      text-align: start;
    }

    &__title--input {
      @include input-padding;
      @include grey-border;
      @include placeholder;
      @include focus;

      width: 400px;

      font-size: $main-font-size;

      border-radius: 15px;
    }

    &__title--edit {
      @include input-padding;
      @include grey-border;
      @include placeholder;

      position: absolute;
      top: 71px;
      left: 20px;

      width: 430px;

      font-size: 18px;
    }

    &__title--cancel-edit {
      position: absolute;
      top: 75px;
      left: 500px;

      font-size: 28px;

      color: #ff423b;
      background-color: $white-color;
      border: none;

      cursor: pointer;

      &:hover {
        transition: transform 0.3s;
        transform: rotate(-90deg);
      }
    }

    &__input {
      @include input-padding;
      @include placeholder;
      @include focus;
      @include grey-border;

      width: 400px;

      font-size: $main-font-size;

      border-radius: 15px;
    }

    &__list {
      margin: 0;
      padding: 0;

      list-style: none;
    }

    &__empty {
      font-size: $main-font-size;
    }
  }

  .modal__button--red {
    padding: 10px 20px;

    font-size: 16px;

    color: white;
    background: #ff423b;

    border: none;
    border-radius: 2px;

    cursor: pointer;
  }
</style>
