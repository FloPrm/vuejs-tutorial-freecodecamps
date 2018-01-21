<template>
  <panel title="Synopsis">
    <v-container fluid>
      <textarea
        readonly
        v-model="synopsis">
      </textarea>
    </v-container>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'synopsis'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: sans-serif;
  border: none;
  height: 400px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
