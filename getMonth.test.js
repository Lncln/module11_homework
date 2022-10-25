const getMonth = require('./getMonth.js');


describe("test", () => {
    it('getMonth 12', () => {
        let result = getMonth(12);
        expect(result).toBe('декабрь');
    }),
    it('getMonth 0', () => {
        let result = getMonth(0);
        expect(result).toBe('неизвестно');
    }),
    it('getMonth -5', () => {
        let result = getMonth(-5);
        expect(result).toBe('неизвестно');
    }),
    it('getMonth 13', () => {
        let result = getMonth(13);
        expect(result).toBe('неизвестно');
    }),
    it('getMonth null', () => {
        let result = getMonth(null); 
        expect(result).toBe('неизвестно');
    });
});

describe("test", () => {
    it('getMonth декабрь', () => {
        let result = getMonth('декабрь');
        expect(result).toBe('неизвестно');
    }),

    it('getMonth \'3\'', () => {
        let result = getMonth('3');
        expect(result).toBe('март');
    });
    // Это корнер кейс?
});