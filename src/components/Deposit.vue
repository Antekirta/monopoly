<template>
    <v-container>
        <h3>Депозит</h3>

        <v-container v-if="hasDeposit">
            <p>{{depositWarning}}</p>

            <br>

            <v-btn :disabled="!!turnsToTakeDeposit" @click="returnDeposit" color="success">Забрать вклад</v-btn>
        </v-container>

        <v-container v-else>
            <v-row align-content="center">
                <v-row>
                    <p>У Вас пока нет депозитов.</p>
                </v-row>

                <v-row>
                    <v-btn @click="startDepositProcess" color="primary" ripple>Сделать вклад</v-btn>

                    <v-dialog v-model="isDepositProcessing" max-width="500">
                        <v-card class="player__dialog-content">
                            <v-card-title>Оформление вклада</v-card-title>

                            <v-card-text>
                                <h3>Банк готов принять вклад под {{depositInterestFormatted}} круговых.</h3>

                                <v-overflow-btn
                                        v-model="depositSum"
                                        :items="[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000]"
                                        placeholder="Какую сумму Вы хотели бы разместить?"
                                ></v-overflow-btn>

                                <v-overflow-btn
                                        v-model="depositTerm"
                                        :items="[1, 2, 3]"
                                        placeholder="На какой срок (количество ходов)?"
                                ></v-overflow-btn>

                                <br />

                                <p>{{depositMessage}}</p>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn @click="cancelDepositProcess" color="red">Отмена</v-btn>

                                <v-spacer></v-spacer>

                                <v-btn @click="setDeposit" color="success" :disabled="!depositTerm || !depositSum">Разместить депозит</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                    <v-spacer></v-spacer>

                    <v-chip color="primary"> Ставка: {{depositInterestFormatted}} </v-chip>
                </v-row>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        name: 'Deposit',

        props: {
            turnsToTakeDeposit: {
                type: Number,
                required: true
            }
        },

        data () {
            return {
                hasDeposit: false,
                isDepositProcessing: false,
                depositInterest: 0.1,
                depositTerm: 1,
                depositSum: 0
            }
        },

        computed: {
            depositInterestFormatted () {
                return this.depositInterest * 10 + '0%';
            },

            depositSumToReturn () {
                return this.depositSum + this.depositInterest * this.depositSum * this.depositTerm;
            },

            depositMessage () {
                const numeric = this.depositTerm === 1 ? 'круг' : 'кругов';

                return `Через ${this.depositTerm} ${numeric} Вы получите ${this.depositSumToReturn}.`
            },

            depositWarning () {
                if (!this.turnsToTakeDeposit) {
                    return `Заберите ${this.depositSumToReturn}`;
                }

                const numeric = this.turnsToTakeDeposit === 1 ? 'круг' : 'круга';

                return `Через ${this.turnsToTakeDeposit} ${numeric} Вы получите ${this.depositSumToReturn}.`
            }
        },

        methods: {
            startDepositProcess () {
                this.isDepositProcessing = true;
            },

            setDeposit () {
                this.hasDeposit = true;
                this.isDepositProcessing = false;

                this.$emit('deposit-put', this.depositTerm);
            },

            returnDeposit () {
                this.hasDeposit = false;

                this.$emit('deposit-taken');
            },

            cancelDepositProcess () {
                this.isDepositProcessing = false;
            }
        }
    }
</script>