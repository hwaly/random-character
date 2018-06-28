const RandomCharacter = class {
    constructor(character = {}) {
        this.current = {};

        this._character = {
            digit: '0123456789',
            lower: 'abcdefghijklmnopqrstuvwxyz',
            upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            korean: [44032, (55203 + 1)],
            special: '~!@#$%^&*()_+{}|:"<>?`-=[];\',./!♡♥☆★♩♪♬'
        };
        Object.assign(this._character, character);
    }

    _setCurrent({type, size}) {
        Object.assign(this.current, {
            type: type.split(',').map(type => type.trim()),
            size: size
    });

        return this;
    }

    _getCharacter() {
        const currentType = this.current.type;
        const characterType = currentType[this._rendomNumber(0, currentType.length)];
        const characterItem = this._character[characterType];

        if (Array.isArray(characterItem)) {
            return String.fromCharCode(this._rendomNumber(characterItem[0], characterItem[1]));
        } else {
            return characterItem[this._rendomNumber(0, characterItem.length)];
        }
    }

    _rendomNumber(value1, value2) {
        return (~~(Math.random() * (value2 - value1)) + value1);
    }

    _randomCharacter() {
        return Array.from({length: this.current.size}, _ => this._getCharacter()).join('');
    }

    generate({type = 'digit', size = 1} = {}) {
        if (typeof type !== 'string') {
            throw new Error('타입이 잘못 입력되었습니다.');
        }

        this._setCurrent({type, size});

        return this._randomCharacter();
    }
};

module.exports = RandomCharacter;