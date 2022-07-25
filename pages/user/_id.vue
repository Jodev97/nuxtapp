<template>
  <div>
    <ProfileNewCard></ProfileNewCard>
    hola señor {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'UserId',
}
</script>
