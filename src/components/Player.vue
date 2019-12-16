<template>
    <v-card class="player">
        <h2>{{name}}</h2>

        <v-divider></v-divider>

        <br>

        <loan :turns-to-return-credit="turnsToReturnCredit"
              @loan-taken="onLoanTaken"
              @loan-closed="turnsToReturnCredit = 0"
        ></loan>

        <deposit :turns-to-take-deposit="turnsToTakeDeposit"
                 @deposit-put="onDepositPut"
                 @deposit-taken="turnsToTakeDeposit = 0"
        ></deposit>

        <v-container>
            <h3>Акции</h3>

            <ul>
                <li v-for="share in sharesToShow" :key="share.name">
                    <span>{{share.name}} : {{share.amount}}</span>
                </li>
            </ul>
        </v-container>

        <br>
        <br>

        <v-btn @click="finishCircle" color="success">Завершить круг</v-btn>

        <v-dialog v-model="showEvent" max-width="400">
            <v-card>
                <v-card-title>{{event.title}}</v-card-title>

                <v-card-text>{{event.message}}</v-card-text>

                <v-card-actions>
                    <v-btn @click="showEvent = false" color="primary">Продолжить...</v-btn>

                    <v-btn v-if="event.type === $options.EVENT_TYPES.SHARES"
                           @click="startSharesByingProcess(event.company)"
                           color="success">{{event.dealType}} акции...
                    </v-btn>

                    <v-dialog v-model="sharesByingInProcess" :max-width="400">
                        <v-card>
                            <v-card-title>Купить акции</v-card-title>

                            <v-card-text>
                                <v-overflow-btn
                                        v-model="amountOfSharesToBuy"
                                        :items="[10, 20, 30, 40, 50, 60, 70, 80, 90]"
                                        :placeholder="`Какое количество акций Вы хотели бы ${event.dealType}?`"
                                ></v-overflow-btn>

                                <p>Итоговая сумма: {{amountOfSharesToBuy * event.sharePrice}}</p>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="red" @click="amountOfSharesToBuy = false">Отмена</v-btn>

                                <v-spacer></v-spacer>

                                <v-btn v-if="event.dealType === $options.DEAL_TYPES.BUY" color="success"
                                       @click="buyShares">Купить {{company}}
                                </v-btn>

                                <v-btn v-else color="success" @click="sellShares">Продать {{company}}</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
    import Loan from './Loan'
    import Deposit from './Deposit'
    import {generateEvent} from "../providers/eventProvider";
    import {EVENT_TYPES} from "../registry/EVENTS";
    import {DEAL_TYPES} from "../registry/dealTypes";
    import {companies} from "../registry/companies";

    export default {
        name: 'Player',

        components: {Loan, Deposit},

        props: {
            name: {
                type: String,
                required: true
            }
        },

        created() {
            this.$options.EVENT_TYPES = EVENT_TYPES;
            this.$options.DEAL_TYPES = DEAL_TYPES;

            Object.values(companies).forEach(company => {
                this.$set(this.shares, company, 0);
            })
        },

        data() {
            return {
                turnsToReturnCredit: 0,
                turnsToTakeDeposit: 0,
                event: '',
                showEvent: false,

                // shares
                sharesByingInProcess: false,
                amountOfSharesToBuy: 0,
                company: '',
                shares: {}
            }
        },

        computed: {
            sharesToShow() {
                return Object.keys(this.shares).map(key => {
                    return {
                        name: key,
                        amount: this.shares[key]
                    }
                })
                    .filter(share => share.amount);
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

                this.event = generateEvent();

                this.showEvent = true;
            },
            startSharesByingProcess(company) {
                this.company = company;
                this.sharesByingInProcess = true;
            },

            buyShares() {
                this.shares[this.company] += this.amountOfSharesToBuy;

                this.sharesByingInProcess = false;
                this.company = '';

                this.$forceUpdate();
            },

            sellShares() {
                this.shares[this.company] -= this.amountOfSharesToBuy;

                this.sharesByingInProcess = false;
                this.company = '';

                this.$forceUpdate();
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