<template>
    <v-container v-if="!profile">
        Please login through the
        <a href="/login">Google</a>

    </v-container>
</template>

<script>
    export default {
        name: "Auth"
    }
</script>

<style scoped>

</style>