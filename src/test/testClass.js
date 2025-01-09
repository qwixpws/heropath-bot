const assert = require('node:assert');
class T {
    constructor(value) {
        this.value = value;
    }

    toBe(value) {
        assert.equal(this.value, value);
        return this;
    }

    notToBe(value) {
        assert.notEqual(this.value, value, `${this.value} should not be ${value}`);
        return this;
    }

    isType(type) {
        assert.equal(typeof this.value, type);
        return this;
    }

    isInstanceOf(type) {
        assert(this.value instanceof type);
        return this;
    }

    hasNotSpecialChars() {
        const specialChars = "$^&_=[]{}|;:<>?\\";
        let hasSpecialChars = false;
        assert.equal(typeof this.value, 'string');

        for (let i = 0; i < this.value.length; i++) {
            if (specialChars.includes(this.value[i]))
                hasSpecialChars = true;
        }

        assert.equal(hasSpecialChars, false);
        return this;
    }

    hasLength(length) {
        assert.equal(this.value.length, length);
        return this;
    }

    lengthIsLess(length) {
        assert(this.value.length < length);
        return this;
    }

    deepEqual(value) {
        assert.deepEqual(this.value, value);
        return this;
    }

    strictEqual(value) {
        assert.strictEqual(this.value, value);
        return this;
    }
}

module.exports = T;
