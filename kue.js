class Kue {
    constructor(gula,aksesoris,berat) {
        this._bahan = "tepung";
        this._gula = gula;
        this._aksesoris = aksesoris;
        this._berat = berat;
    }
 
    // getters
    get bahan() {
        return this._bahan; 
    }
    get gula() {
        return this._gula;
    }
    get aksesoris() {
        return this._aksesoris;
    }
    get berat() {
        return this._berat;
    }

    // setters
    set gula(value) {
        this._gula = value;
    }
    set aksesoris(value) {
        this._aksesoris = value;
    }
    set berat(value) {
        this._berat = value;
    }
}

// BUAT CLASS ANAK
class KuePutu extends Kue{
    constructor(gulaLevel ,...args) {
        super(...args);
        this._gulaLevel = gulaLevel;
    }

    // GETTER
    get gulaLevel() {
        return this._gulaLevel
    }

    // SETTER
    set gulaLevel(value) {
        this._gulaLevel = value;
    }
}

class KueCubit extends Kue{
    constructor(...args) {
        super(...args);
        this._bahan = ["tepung", "telur"];
    }
}

class KueKetawa extends Kue{
    constructor(...args) {
        super(...args);
        this._bahan = ["tepung", "telur"];
    }
}


// OBJECT
const KuePutuEnak = new KuePutu(50, "gula jawa", "daun", 10);
console.log(KuePutuEnak);