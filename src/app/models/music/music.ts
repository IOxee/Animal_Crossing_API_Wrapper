export class Music {
    _id: number;
    _code: string;
    _name: any = [];
    _buy_price: number;
    _sell_price: number;
    _isOrderable: boolean;
    _music_uri: string;
    _image_uri: string;

    constructor(id: number, code: string, name: any, buy_price: number, sell_price: number, isOrderable: boolean, music_uri: string, image_uri: string) {
        this._id = id;
        this._code = code;
        this._name = name;
        this._buy_price = buy_price;
        this._sell_price = sell_price;
        this._isOrderable = isOrderable;
        this._music_uri = music_uri;
        this._image_uri = image_uri;
    }

    get id(): number {
        return this._id;
    }

    get code(): string {
        return this._code;
    }

    get name(): any {
        return this._name;
    }

    get buy_price(): number {
        return this._buy_price;
    }

    get sell_price(): number {
        return this._sell_price;
    }

    get isOrderable(): boolean {
        return this._isOrderable;
    }

    get music_uri(): string {
        return this._music_uri;
    }

    get image_uri(): string {
        return this._image_uri;
    }

    set id(id: number) {
        this._id = id;
    }

    set code(code: string) {
        this._code = code;
    }

    set name(name: any) {
        this._name = name;
    }

    set buy_price(buy_price: number) {
        this._buy_price = buy_price;
    }

    set sell_price(sell_price: number) {
        this._sell_price = sell_price;
    }

    set isOrderable(isOrderable: boolean) {
        this._isOrderable = isOrderable;
    }

    set music_uri(music_uri: string) {
        this._music_uri = music_uri;
    }

    set image_uri(image_uri: string) {
        this._image_uri = image_uri;
    }
}
