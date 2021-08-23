export default class Tile {
    constructor(value) {
        this.value = value;
        this.flag = false;
    }

    setFlag(value) {
        this.flag = value;
    }

    getFlag() {
        return this.flag;
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    setDefaultValue() {
        this.value = 0;
        this.flag = false;
    }

    setFlagToDefulat() {
        this.flag = false;
    }

    findNumber() {
        var d = Math.random();
        let addedNumber = 2;
        if (d < 0.9) {
            addedNumber = 2;
        }
        else {
            addedNumber = 4;
        }
        return addedNumber;
    }

    toString() {
        console.log(this.value);
    }
}