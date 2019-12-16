<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h2>Монополия</h2>
      </div>
    </v-app-bar>

    <br><br><br>

    <players />
  </v-app>
</template>

<script>
import Players from './components/Players';

export default {
  name: 'App',

  components: {
    Players,
  },

  data: () => ({
    //
  }),
};
</script>
