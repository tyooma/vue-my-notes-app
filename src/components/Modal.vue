<template>
  <transition name="modal-fade">
    <div class="backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal__header"
          id="modalTitle"
        >
          Please, confirm the action
          <button
            type="button"
            class="modal__button--close"
            @click="close"
            aria-label="Close modal"
          >
            &times;
          </button>
        </header>
        <div
          class="modal__body"
          id="modalDescription"
        >
          <slot name="body">
            Are you sure you want to delete this item?
          </slot>
        </div>
        <footer class="modal__footer">
          <slot name="footer">
            <button
              type="button"
              class="modal__button--red"
              @click="deleteItem"
              aria-label="Close modal"
            >
              Delete
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
      deleteItem() {
        this.$emit('deleteItem');
        this.$emit('close');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.2);
  }

  .modal {
    padding: 15px;

    width: 350px;

    display: flex;
    flex-direction: column;

    background: #fff;
    box-shadow: 1px 1px 10px 1px;
    overflow-x: auto;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 20px;
      font-weight: 500;
      color: #2c3e50;

      border-bottom: 1px solid #eee;
    }

    &__body {
      padding: 15px;
    }

    &__button--close {
      padding: 0 5px;

      font-size: 20px;
      font-weight: bold;

      color: #2c3e50;
      background: transparent;

      border: none;

      cursor: pointer;
    }

    &__button--red {
      padding: 10px 20px;

      font-size: 16px;

      color: white;
      background: #ff423b;

      border: none;
      border-radius: 2px;

      cursor: pointer;
    }
  }
</style>
