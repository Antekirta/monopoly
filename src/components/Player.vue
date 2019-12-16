<template>
    <v-card class="player">
        <v-text-field
                v-model="name"
                label="Имя"
                solo
        ></v-text-field>

        <loan :turns-to-return-credit="turnsToReturnCredit"
              @loan-taken="onLoanTaken"
              @loan-closed="turnsToReturnCredit = 0"
        ></loan>

        <deposit :turns-to-take-deposit="turnsToTakeDeposit"
              @deposit-put="onDepositPut"
              @deposit-taken="turnsToTakeDeposit = 0"
        ></deposit>

        <br>
        <br>

        <v-btn @click="finishCircle" color="success">Завершить круг</v-btn>
    </v-card>
</template>

<script>
    import Loan from './Loan'
    import Deposit from './Deposit'

    export default {
        name: 'Player',

        components: {Loan, Deposit},

        data() {
            return {
                name: '',
                turnsToReturnCredit: 0,
                turnsToTakeDeposit: 0
            }
        },

        methods: {
            onLoanTaken(value) {
                this.turnsToReturnCredit = value;
            },
            onDepositPut(value) {
                this.turnsToTakeDeposit = value;
            },
            finishCircle() {
                if (this.turnsToReturnCredit) {
                    this.turnsToReturnCredit--;
                }

                if (this.turnsToTakeDeposit) {
                    this.turnsToTakeDeposit--;
                }
            }
        }
    }
</script>

<style lang="scss">
    .player {
        padding: 15px;

        &__dialog-content {
            padding: 15px;
        }
    }
</style>