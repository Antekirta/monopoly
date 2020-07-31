<template>
  <v-card class="player">
    <h2>{{ name }}</h2>

    <v-divider />

    <br>

    <loan
      :turns-to-return-credit="turnsToReturnCredit"
      @loan-taken="onLoanTaken"
      @loan-closed="turnsToReturnCredit = 0"
    />

    <deposit
      :turns-to-take-deposit="turnsToTakeDeposit"
      @deposit-put="onDepositPut"
      @deposit-taken="turnsToTakeDeposit = 0"
    />

    <v-container>
      <h3>Акции</h3>

      <ul v-if="sharesToShow.length">
        <li
          v-for="share in sharesToShow"
          :key="share.name"
        >
          <span>{{ share.name }} : {{ share.amount }} штук по средней цене {{ share.averageCost }}</span>
        </li>
      </ul>

      <p v-else>
        У Вас пока нет акций
      </p>
    </v-container>

    <br>
    <br>

    <v-btn
      color="success"
      @click="finishCircle"
    >
      Завершить круг
    </v-btn>

    <v-dialog
      v-model="showEvent"
      max-width="400"
    >
      <v-card>
        <v-card-title>{{ event.title }}</v-card-title>

        <v-card-text>{{ event.message }}</v-card-text>

        <v-card-actions>
          <v-btn
            color="primary"
            @click="showEvent = false"
          >
            Закрыть
          </v-btn>

          <v-btn
            v-if="event.type === $options.EVENT_TYPES.SHARES"
            color="success"
            @click="startSharesByingProcess(event.company)"
          >
            {{ event.dealType }} акции
          </v-btn>

          <v-dialog
            v-model="sharesByingInProcess"
            :max-width="400"
          >
            <v-card>
              <v-card-title>Купить акции</v-card-title>

              <v-card-text>
                <v-overflow-btn
                  v-model="amountOfSharesToBuy"
                  :items="[10, 20, 30, 40, 50, 60, 70, 80, 90]"
                  :placeholder="`Какое количество акций Вы хотели бы ${event.dealType}?`"
                />

                <p>Итоговая сумма: {{ amountOfSharesToBuy * event.sharePrice }}</p>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="red"
                  @click="amountOfSharesToBuy = false"
                >
                  Отмена
                </v-btn>

                <v-spacer />

                <v-btn
                  v-if="event.dealType === $options.DEAL_TYPES.BUY"
                  color="success"
                  @click="buyShares(event.sharePrice)"
                >
                  Купить {{ company.label }}
                </v-btn>

                <v-btn
                  v-else
                  color="success"
                  @click="sellShares"
                >
                  Продать {{ company.label }}
                </v-btn>
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
    import {COMPANIES} from "../registry/companies";

    export default {
        name: 'Player',
        components: {Loan, Deposit},
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                turnsToReturnCredit: 0,
                turnsToTakeDeposit: 0,
                /** @type {ShareEvent} */
                event: {},
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
                return Object.values(this.shares)
                    .map(share => {
                    return {
                        name: share.name,
                        amount: share.amount,
                        averageCost: share.averageCost
                    }
                })
                    .filter(share => share.amount);
            }
        },

        created() {
            this.$options.EVENT_TYPES = EVENT_TYPES;
            this.$options.DEAL_TYPES = DEAL_TYPES;

            Object.values(COMPANIES).forEach(company => {
                this.$set(this.shares, company.name, {
                    name: company.label,
                    amount: 0,
                    averageCost: 0
                });
            })
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

            buyShares(sharePrice) {
                // this.shares[this.company] += this.amountOfSharesToBuy;
                const key = this.company.name;


                this.shares[key] = {
                    amount: this.shares[key].amount += this.amountOfSharesToBuy,
                    name: this.company.label,
                    averageCost: (() => {
                        if (this.shares[key].averageCost) {
                            return  (this.shares[key].averageCost + sharePrice) / 2;
                        }

                        return sharePrice;
                    })()
                };

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