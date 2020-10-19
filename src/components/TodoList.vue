<template>
  <div class="todos">
    <ul class="todos__list">
      <li
        v-for="(task, index) of global.state.tasksFiltered"
        :key="index"
        :class="{ 'todos__item--finished': task.done }"
        class="todos__item"
      >
        <div class="todos__title-and-btn">
          <p class="todos__text">{{ task.description }}</p>
          <button
            @click="global.toggleTaskStatus(task)"
            class="todos__check-btn"
          >
            ✔
          </button>
        </div>
        <button @click="global.deleteTask(task)" class="todos__delete-btn">
          Löschen
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ["global"],
  mounted() {
    this.global.filterTodos("all");
  },
};
</script>

<style lang="scss" scoped>
.todos {
  $parent: &;
  &__list {
    border-top: 1px solid #7e8187;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #7e8187;
    &--finished {
      #{ $parent } {
        &__text {
          text-decoration: line-through;
        }
      }
    }
  }

  &__title-and-btn {
    display: flex;
  }

  &__text {
    padding-right: 0.6rem;
    align-self: center;
  }

  &__check-btn {
    color: #fff;
    background-color: #grey !important;
    border-color: #28a745;
    display: inline-block;
    font-weight: 300;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  &__delete-btn {
    display: inline-block;
    font-weight: 300;
    color: #fff;
    background-color: #dc3545 !important;
    border-color: #dc3545;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
}
</style>