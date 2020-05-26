<template>
    <router-link
            :to="userLink"
            class="px-3"
    >
        <v-avatar
                v-if="user && user.userpic"
                :size="`${size || 36}px`"
        >
            <img
                    :src="user.userpic"
                    :alt="user.name"
            >
        </v-avatar>
        <v-avatar
                v-else
                :size="`${size || 36}px`"
                color="indigo">
            <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
        <span>{{ userName }}</span>
    </router-link>
</template>

<script>
    export default {
        name: "UserLink",
        props: ['user', 'size'],
        computed: {
            userName() {
                return this.user ? this.user.name : 'unknown'
            },
            userLink() {
                return this.user ? `/user/${this.user.id}` : '/'
            }
        }
    }
</script>

<style scoped>

</style>