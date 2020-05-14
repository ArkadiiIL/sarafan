<template>
    <v-container>
        <v-layout justify-space-around>
            <v-flex :xs6="!$vuetify.breakpoint.xsOnly">
                <div class="title mb-3">User profile</div>
                <v-layout row justify-space-between>
                    <v-card
                            max-width="375"
                            class="mx-auto"
                    >
                        <v-img
                                :src="profile.userpic"
                                height="300px"
                                dark
                        >
                        </v-img>
                    </v-card>
                    <v-flex class="px-1">
                        <v-layout column>
                            <v-flex>{{profile.name}}</v-flex>
                            <v-flex>{{profile.locale}}</v-flex>
                            <v-flex>{{profile.gender}}</v-flex>
                            <v-flex>{{profile.email}}</v-flex>
                            <v-flex>{{profile.lastVisit}}</v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'Profile',
        computed: mapState(['profile'])
    }
</script>

<style scoped>

</style>