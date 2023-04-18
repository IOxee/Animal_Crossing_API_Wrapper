export class Villagers {
    _id: number;
    _code: string;
    _name: any = [];
    _personality: string;
    _birthday_string: string;
    _birthday: string;
    _species: string;
    _gender: string;
    _subtype: string;
    _hobby: string;
    _catchphrase: string;
    _icon_uri: string;
    _image_uri: string;
    _bubble_color: string;
    _text_color: string;
    _saying: string;
    _catch_translations: any = [];

    constructor(
        id: number,
        code: string,
        name: any = [],
        personality: string,
        birthday_string: string,
        birthday: string,
        species: string,
        gender: string,
        subtype: string,
        hobby: string,
        catchphrase: string,
        icon_uri: string,
        image_uri: string,
        bubble_color: string,
        text_color: string,
        saying: string,
        catch_translations: any = []
    ) {
        this._id = id;
        this._code = code;
        this._name = name;
        this._personality = personality;
        this._birthday_string = birthday_string;
        this._birthday = birthday;
        this._species = species;
        this._gender = gender;
        this._subtype = subtype;
        this._hobby = hobby;
        this._catchphrase = catchphrase;
        this._icon_uri = icon_uri;
        this._image_uri = image_uri;
        this._bubble_color = bubble_color;
        this._text_color = text_color;
        this._saying = saying;
        this._catch_translations = catch_translations;
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

    get personality(): string {
        return this._personality;
    }

    get birthday_string(): string {
        return this._birthday_string;
    }

    get birthday(): string {
        return this._birthday;
    }

    get species(): string {
        return this._species;
    }

    get gender(): string {
        return this._gender;
    }

    get subtype(): string {
        return this._subtype;
    }

    get hobby(): string {
        return this._hobby;
    }

    get catchphrase(): string {
        return this._catchphrase;
    }

    get icon_uri(): string {
        return this._icon_uri;
    }

    get image_uri(): string {
        return this._image_uri;
    }

    get bubble_color(): string {
        return this._bubble_color;
    }

    get text_color(): string {
        return this._text_color;
    }

    get saying(): string {
        return this._saying;
    }

    get catch_translations(): any {
        return this._catch_translations;
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

    set personality(value: string) {
        this._personality = value;
    }

    set birthday_string(value: string) {
        this._birthday_string = value;
    }

    set birthday(value: string) {
        this._birthday = value;
    }

    set species(value: string) {
        this._species = value;
    }

    set gender(value: string) {
        this._gender = value;
    }

    set subtype(value: string) {
        this._subtype = value;
    }

    set hobby(value: string) {
        this._hobby = value;
    }

    set catchphrase(value: string) {
        this._catchphrase = value;
    }

    set icon_uri(value: string) {
        this._icon_uri = value;
    }

    set image_uri(value: string) {
        this._image_uri = value;
    }

    set bubble_color(value: string) {
        this._bubble_color = value;
    }

    set text_color(value: string) {
        this._text_color = value;
    }

    set saying(value: string) {
        this._saying = value;
    }

    set catch_translations(value: any) {
        this._catch_translations = value;
    }
}

