const RandomCharacter = class {
    constructor(character = {}) {
        this._character = {
            digit: '0123456789',
            lower: 'abcdefghijklmnopqrstuvwxyz',
            upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            korean: [44032, (55203 + 1)],
            special: ''
        };

        Object.assign(this._character, character);
    }

    _rendomNumber(value1, value2) {
        return (~~(Math.random() * (value2 - value1)) + value1);
    }

    _randomCharacter() {

    }

    getCharacter() {

    }
};

export default RandomCharacter;