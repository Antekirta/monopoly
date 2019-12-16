<template>
    <v-container class="players">
        <v-layout>
            <v-btn @click="addPlayer">Добавить игрока</v-btn>
        </v-layout>

        <v-layout>
            <ul class="players__list">
                <li v-for="playerId in playersIds" :key="playerId" class="players__item">
                    <player></player>
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
                playersIds: []
            };
        },

        methods: {
            addPlayer() {
                this.playersIds.push(id++);
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