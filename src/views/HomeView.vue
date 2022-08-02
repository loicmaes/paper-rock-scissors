<template>
  <span class="loader" :class="{ display: !loaded }"></span>

  <main class="home" :class="{ display: loaded }">
    <div class="home__title">
      <h1 class="home__title__content">Rock, Paper, Scissors</h1>
      <p class="home__title__score">Score: {{ $store.state.wins }}</p>
    </div>

    <div class="home__play">
      <router-link class="home__play__button" to="/game/classic">Classic</router-link>
      <router-link class="home__play__button" to="/game/advanced">Advanced</router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
    loaded: false
  }),
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/css/variables';

.loader {
  top: 50%;
  left: 50%;
  opacity: 0;
  width: .5em;
  height: .5em;
  position: absolute;
  transition: opacity 350ms ease;
  transform: translate(-50%, -50%);

  &::before, &::after {
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    background-color: variables.$text;
    animation: bloup 1s ease-out infinite;

    @keyframes bloup {
      from {
        opacity: .5;
        transform: scale(1);
      }

      to {
        opacity: 0;
        transform: scale(3);
      }
    }
  }

  &::after {
    animation-delay: 400ms;
  }

  &.display {
    opacity: 1;
  }
}

.home {
  opacity: 0;
  display: flex;
  grid-gap: 5em;
  align-items: center;
  pointer-events: none;
  transform: scale(.95);
  flex-direction: column;
  justify-content: center;
  transition: opacity 500ms 200ms ease-out, transform 500ms 200ms ease-out;

  &__title {
    text-transform: uppercase;

    &__content {
      font-size: 4em;
      font-weight: 700;
    }

    &__score {
      font-size: 1.25em;
    }
  }

  &__play {
    display: flex;
    grid-gap: 3em;
    align-items: center;

    &__button {
      display: flex;
      font-weight: 700;
      font-size: 1.25em;
      line-height: 100%;
      padding: 1rem 5rem;
      border-radius: .5rem;
      color: variables.$dark-text;
      background-color: variables.$text;
      transition: transform 300ms ease-in-out;

      &:hover {
        transform: scale(.95);
      }
    }
  }

  &.display {
    opacity: 1;
    transform: none;
    pointer-events: all;
  }
}
</style>
