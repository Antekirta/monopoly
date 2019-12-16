<template>
    <v-container>
        <h3>Кредит</h3>

        <v-container v-if="hasLoan">
            <p>{{loanWarning}}</p>

            <br>

            <v-btn @click="returnLoan" color="success">Погасить кредит</v-btn>
        </v-container>

        <v-container v-else>
            <v-row align-content="center">
                <v-row>
                    <p>У Вас пока нет кредитов.</p>
                </v-row>

                <v-row>
                    <v-btn @click="startLoanProcess" color="primary" ripple>Взять кредит</v-btn>

                    <v-dialog v-model="isLoanProcessing" max-width="500">
                        <v-card class="player__dialog-content">
                            <v-card-title>Оформление кредита</v-card-title>

                            <v-card-text>
                                <h3>Банк готов предоставить кредит под {{loanInterestFormatted}} круговых.</h3>

                                <v-overflow-btn
                                        v-model="loanSum"
                                        :items="[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000]"
                                        placeholder="Какую сумму Вы хотели бы взять?"
                                ></v-overflow-btn>

                                <v-overflow-btn
                                        v-model="loanTerm"
                                        :items="[1, 2, 3]"
                                        placeholder="На какой срок (количество ходов)?"
                                ></v-overflow-btn>

                                <br />

                                <p>{{loanMessage}}</p>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn @click="cancelLoanProcess" color="red">Отмена</v-btn>

                                <v-spacer></v-spacer>

                                <v-btn @click="takeLoan" color="success" :disabled="!loanTerm || !loanSum">Взять кредит</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                    <v-spacer></v-spacer>

                    <v-chip color="primary"> Ставка: {{loanInterestFormatted}} </v-chip>
                </v-row>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        name: 'Loan',

        props: {
            turnsToReturnCredit: {
                type: Number,
                required: true
            }
        },

        data () {
            return {
                hasLoan: false,
                isLoanProcessing: false,
                loanInterest: 0.5,
                loanTerm: 1,
                loanSum: 0
            }
        },

        computed: {
            loanInterestFormatted () {
                return this.loanInterest * 10 + '0%';
            },

            loanSumToReturn () {
                return this.loanSum + this.loanInterest * this.loanSum * this.loanTerm;
            },

            loanMessage () {
                const numeric = this.loanTerm === 1 ? 'круг' : 'кругов';

                return `Через ${this.loanTerm} ${numeric} Вы должны будете вернуть ${this.loanSumToReturn}.`
            },

            loanWarning () {
                if (!this.turnsToReturnCredit) {
                    return `Верни ${this.loanSumToReturn}, урод, а не то мы выбьем из тебя все дерьмо, мать твою, и заберем твою недвижимость!`;
                }

                const numeric = this.turnsToReturnCredit === 1 ? 'круг' : 'круга';

                return `Через ${this.turnsToReturnCredit} ${numeric} Вы должны будете вернуть ${this.loanSumToReturn}.`
            }
        },

        methods: {
            startLoanProcess () {
                this.isLoanProcessing = true;
            },

            takeLoan () {
                this.hasLoan = true;
                this.isLoanProcessing = false;

                this.$emit('loan-taken', this.loanTerm);
            },

            returnLoan () {
                this.hasLoan = false;

                this.$emit('loan-closed');
            },

            cancelLoanProcess () {
                this.isLoanProcessing = false;
            }
        }
    }
</script>