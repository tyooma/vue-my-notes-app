<template>
  <li class="todo">
    <span class="todo__wrapper" v-bind:class="{todo__done:todo.completed}">
      <input
        class="todo__checkbox"
        type="checkbox"
        v-bind:checked="todo.completed"
        @change="$emit('check-todo', todo.completed=!todo.completed, index)"
      >
      <div class="todo__title">
        <div
          v-if="!todo.editing"
          @dblclick="$emit('edit-todo', todo, index)"
          class="todo__title--text"
        >
          {{ todo.title }}
        </div>
        <input
          v-else
          class="todo__title--edit"
          type="text"
          maxlength="30"
          v-model="todo.title"
          @blur="$emit('done-edit', todo)"
          @keyup.enter="$emit('done-edit', todo)"
          @keyup.esc="$emit('cancel-edit', todo)"
          v-focus
        >
      </div>
    </span>
    <button
      class="todo__remove"
      @click="$emit('show-modal', index)"
    >
      &times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  directives: {
    focus: {
      inserted: function (element) {
        element.focus();
      },
    },
  },
}
</script>

<style lang="scss" scoped>
  .todo {
    padding: 10px;
    margin-bottom: 10px;

    display: flex;
    justify-content: space-between;

    font-size: 24px;
    
    overflow: hidden;
    cursor: pointer;

    &__wrapper {
      display: flex;
      align-items: center;
    }

    &__checkbox {
      width: 20px;
      height: 20px;

      margin-right: 1rem;

      cursor: pointer;
    }

    &__done {
      text-decoration: line-through;
    }

    &__title {
      width: 500px;
  
      margin-left: 1rem;

      display: flex;
      align-items: center;

      text-align: start;

      overflow: hidden;
    }

    &__title--edit {
      padding: 10px;
      margin-left: 15px;

      font-size: inherit;

      border: 1px solid #ccc;
    }

    &__remove {
      font-size: 28px;

      color: #ff423b;
      background-color: #fff;
      border: none;

      cursor: pointer;

      &:hover {
        transition: transform 0.3s;
        transform: rotate(-90deg);
      }
    }
  }  
</style>
