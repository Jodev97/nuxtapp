<template>
  <h1>este es un boton {{label}}</h1>
</template>

<script>
export default {
  name: 'NewCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    label: String,
  },
}
</script>
