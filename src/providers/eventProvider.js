import _sample from 'lodash/sample'
import _last from 'lodash/last'
import _max from 'lodash/max'
import {EVENTS, EVENT_TYPES} from '../registry/EVENTS'
import {DEAL_TYPES} from '../registry/dealTypes'
import {COMPANIES} from "../registry/companies";
import {streets} from "../registry/streets";

export const generateEvent = () => {
    let event = _sample(EVENTS);

    switch (event) {
        case EVENT_TYPES.PURCHASE_OFFER:
            return generatePurchaseOfferEvent();
        case EVENT_TYPES.RACKET:
            return generateRacketEvent();
        case EVENT_TYPES.FAS:
            return generateFasEvent();
        case EVENT_TYPES.SHARES:
            return generateSharesEvent();
        case EVENT_TYPES.FINE:
            return generateFineEvent();
    }
};

function generatePurchaseOfferEvent() {
    const factor = _sample([0.5, 1, 2, 3]);
    const street = _sample(streets);
    const title = 'Есть покупатель!';

    const message = `Вы можете продать "${street}" за "стоимость участка" х ${factor}
     или продать это право другому игроку`;

    return {
        title,
        message,
        type: EVENT_TYPES.PURCHASE_OFFER
    }
}

function generateRacketEvent() {
    const street = _sample(streets);
    const title = 'Рэкет!';

    const message = `Вы вынуждены отдать "${street}" за полцены или попробовать откупиться.
     Сумма взятки = бросок одного кубика х 100`;

    return {
        title,
        message,
        type: EVENT_TYPES.RACKET
    }
}

function generateFasEvent() {
    const title = 'ФАС ведет расследование!';

    const message = `ФАС заинтересовалась Вашей монополией. Продайте одну из улиц любой Вашей
     монополии по себестоимости или заплатите штраф. Сумма штрафа = бросок одного кубика х 100`;

    return {
        title,
        message,
        type: EVENT_TYPES.FAS
    }
}

const pricesHistory = {};

Object.keys(COMPANIES).map(key => {
    pricesHistory[key] = [_sample([10, 20, 30, 40, 50, 100])]
});

/**
 * Calculate new share's cost
 * @param {Company} company
 * @return {number}
 */
const calculateSharePrice = (company) => {
    let price;

    const coeffs = [0.5, 1, 2];

    const chances = {
        grow: _sample(coeffs) * company.chanceToGrow,
        stay: _sample(coeffs) * company.chanceToStayTheSame,
        lower: _sample(coeffs) * company.chanceToLower
    };

    const previousPrice = _last(pricesHistory[company.name]);

    const theHighestChance = _max(Object.values(chances));

    switch (theHighestChance) {
        case chances.grow:
            price = previousPrice + previousPrice * company.volatility;
            break;
        case chances.stay:
            price = previousPrice;
            break;
        case chances.lower:
            price = previousPrice - previousPrice * company.volatility;
    }

    pricesHistory[company.name].push(price);

    return price;
};

/**
 * @typedef {Object} ShareEvent
 * @property {string} title
 * @property {string} message
 * @property {number} sharePrice
 * @property {Company} company
 * @property {string} type
 */

/**
 *
 * @return {ShareEvent}
 */
function generateSharesEvent() {
    /** @type {Company} */
    const company = _sample(COMPANIES);
    const title = 'Движение на фондовом рынке!';
    const dealType = _sample([DEAL_TYPES.BUY, DEAL_TYPES.SELL]);

    let price = calculateSharePrice(company);

    const message = `Вы можете ${dealType} акции ${company.label} по цене ${price} за штуку.`;

    return {
        title,
        message,
        sharePrice: price,
        company,
        dealType,
        type: EVENT_TYPES.SHARES
    }
}

function generateFineEvent() {
    const reason = _sample([
        'Ваши помещения не соответствуют требования пожарной безопасности.',
        'Ваш сотрудник ударил ребенка.',
        'Ваш бухгалтер напутал с отчетностью.',
        'Вы оскорбили чувства верующих.',
        'Вы косо посмотрели на сотрудника администрации.',
        'Как-то криво Вы ходите под Богом.'
    ]);

    const title = 'Штраф!';

    const message = `${reason} Сумма штрафа = бросок кубика х 20`;

    return {
        title,
        message,
        type: EVENT_TYPES.FINE}
}
