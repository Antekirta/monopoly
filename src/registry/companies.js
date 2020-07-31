import _sample from 'lodash/sample'

/**
 * @typedef {Object} Company
 * @property {string} name
 * @property {string} label
 * @property {number} chanceToGrow
 * @property {number} chanceToStayTheSame
 * @property {number} chanceToLower
 * @property {number} volatility
 */

/**
 *
 * @param {String} name
 * @param {String} label
 * @return Company
 */
const getCompanyDescription = (name, label) => {
    return {
        name,
        label,
        chanceToGrow: Math.random(),
        chanceToStayTheSame: Math.random(),
        chanceToLower: Math.random(),
        volatility: _sample([
          0.2,
          0.5, 0.5, 0.5, 0.5, 0.5,
          1, 1, 1, 1,
          2
        ])
    }
};

export const calculateNewShareCost = () => {

};

export const COMPANIES = {
    COLA: getCompanyDescription('COLA', 'Кока-Кола'),
    YANDEX: getCompanyDescription('YANDEX', 'Яндекс'),
    NORNIKEL: getCompanyDescription('NORNIKEL', 'НОРНИКЕЛЬ'),
    YUKOS: getCompanyDescription('YUKOS', 'ЮКОС'),
    VAZ: getCompanyDescription('VAZ', 'ВАЗ')
};