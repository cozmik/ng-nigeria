import {DateTime} from 'luxon';

export class EventModel {

  private _title: string;
  private _desc: string;
  private _date: string;
  private _time: string;
  private _attendees: {
    sample: string[]
    total: number
  };
  private _image: string;
  private _id: number;
  private _address: string;
  private _state: string;
  private _country: string;

  get shortDesc(): string {
    return this.desc.split('.')[0];
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get desc(): string {
    return this._desc;
  }

  set desc(value: string) {
    this._desc = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }

  get shortAddress(): string {
    return this.state + ', ' + this.country;
  }

  get fullAddress(): string {
    return `${this.address}, ${this.state}, ${this.country}`;
  }

  get attendees(): { sample: string[]; total: number } {
    return this._attendees;
  }

  set attendees(value: { sample: string[]; total: number }) {
    this._attendees = value;
  }
  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }


  get isPast(): boolean{
      const currentTime = DateTime.fromISO(new Date().toISOString().split('.')[0]);
      return currentTime > DateTime.fromISO(this.date);
  }

  constructor(data: any) {
    this._id = data.id;
    this._title = data.title;
    this._desc = data.desc;
    this._date = data.date;
    this._time = data.time;
    this._address = data.address;
    this._state = data.state;
    this._country = data.country;
    this._attendees = data.attendees;
    this._image = data.image;
  }
}
