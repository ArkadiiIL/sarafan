<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>Sarafan</v-toolbar-title>
            <v-spacer></v-spacer>
            <span v-if="profile">{{profile.name}}</span>
            <v-btn v-if="profile" icon href="/logout">
                <v-icon>exit_to_app</v-icon>
            </v-btn>
            <v-btn v-if="!profile" icon href="/login">
                <v-icon>meeting_room</v-icon>
            </v-btn>
        </v-app-bar>
        <v-content>
            <v-container v-if="profile">
                <messages-list :messages="messages" />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import MessagesList from "../components/messages/MessageList.vue";
    import {addHandler} from "util/ws.js";
    import {getIndex} from "util/collections.js";

    export default {
        components: {
          MessagesList
        },
        data() {
            return {
                messages: frontendData.messages,
                profile: frontendData.profile
            }
        },
        created() {
            addHandler(data => {
                let index = getIndex(this.messages, data.id);
                if(index > -1)
                {
                    this.messages.splice(index, 1 ,data);
                }
                else{
                    this.messages.push(data);
                }
            })

        }
    }
</script>

<style>

</style>