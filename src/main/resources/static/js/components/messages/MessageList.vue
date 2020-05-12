<template>
    <v-layout align-space-around justify-start column>
        <message-form :messageAttr="message"/>
        <message-row v-for="message in sortedMessages"
                     :key="message.id"
                     :message="message"
                     :editMessage="editMessage" />
    </v-layout>

</template>

<script>
    import { mapGetters } from 'vuex'
    import MessageRow from "./MessageRow.vue";
    import MessageForm from "./MessageForm.vue";
    export default {
        data()
        {
            return{
                message: null
            }
        },
        components: {
            MessageRow,
            MessageForm
        },
        computed: mapGetters(['sortedMessages']),
        methods: {
            editMessage(message) {
                this.message = message;
            }
        }
    }
</script>

<style>

</style>