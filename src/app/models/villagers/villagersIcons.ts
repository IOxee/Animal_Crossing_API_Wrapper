export class VillagersIcons {
    private _id: number;
    private _code: string;
    private _name: any = [];
    private _image_uri: string;
    private _arrName: any = [];

    constructor(id: number, code: string, name: any, image_uri: string) {
        this._id = id;
        this._code = code;
        this._name = name;
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

    get image_uri(): string {
        return this._image_uri;
    }

    set id(value: number) {
        this._id = value;
    }

    set code(value: string) {
        this._code = value;
    }

    set name(value: any) {
        this._name = value;
    }

    set image_uri(value: string) {
        this._image_uri = value;
    }
}
