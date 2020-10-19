<template>
  <div>
    <header class="header">
      <div class="header__date">
        <h1 class="header__date-date">{{ dateNow }}</h1>
        <h3 class="header__date-active">{{ activeTasks() }}</h3>
      </div>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li
            @click="global.filterTodos"
            class="header__nav-item"
            :class="{
              'header__nav-item--active': global.state.activeTab === 'all',
            }"
          >
            All Tasks
          </li>
          <li
            @click="global.filterTodos('undone')"
            class="header__nav-item"
            :class="{
              'header__nav-item--active': global.state.activeTab === 'undone',
            }"
          >
            Incomplete Tasks
          </li>
          <li
            @click="global.filterTodos('done')"
            class="header__nav-item"
            :class="{
              'header__nav-item--active': global.state.activeTab === 'done',
            }"
          >
            Complete Tasks
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>