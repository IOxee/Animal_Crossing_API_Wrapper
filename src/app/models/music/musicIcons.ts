export class MusicIcons {
    _id: number;
    _code: string;
    _name: any = [];
    _image_uri: string;

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
}
