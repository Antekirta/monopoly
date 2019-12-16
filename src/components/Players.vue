<template>
    <v-container class="players">
        <v-layout>
            <v-btn @click="createPlayer">Добавить игрока</v-btn>

            <v-dialog v-model="showPlayerCreationDialog" max-width="300">
                <v-card>
                    <v-card-title>Введите имя игрока</v-card-title>

                    <v-card-text>
                        <v-text-field
                                v-model="name"
                                label="Имя"
                                solo
                                @keydown.enter="addPlayer"
                        ></v-text-field>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="success" @click="addPlayer" >Добавить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>

        <v-layout>
            <ul class="players__list">
                <li v-for="player in players" :key="player.id" class="players__item">
                    <player :name="player.name"></player>
                </li>
            </ul>
        </v-layout>
    </v-container>
</template>

<script>
    import Player from './Player'

    let id = 1;

    export default {
        name: 'Players',

        components: {
            Player
        },

        data() {
            return {
                players: [],
                name: '',
                showPlayerCreationDialog: false
            };
        },

        methods: {
            createPlayer () {
                this.showPlayerCreationDialog = true;
            },

            addPlayer() {
                this.players.push({
                    id: id++,
                    name: this.name
                });

                this.showPlayerCreationDialog = false;

                this.name = '';
            }
        }
    }
</script>

<style lang="scss">
    .players {
        &__list {
            display: flex;
            flex-wrap: wrap;
            margin-top: 30px;
            list-style-type: none;
        }

        &__item {
            width: 400px;
            margin: 15px;
        }
    }
</style>