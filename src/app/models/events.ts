import {DateTime} from 'luxon';

export class EventModel {
  private _title: string;
  private _desc: string;
  private _date: string;
  private _time: string;
  private _location: string;
  private _attendees: {
    sample: string[]
    total: number
  };
  private _image: string;

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

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
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


  isPast(): boolean{
      const currentTime = DateTime.fromISO(new Date().toISOString().split('.')[0]);
      return currentTime > DateTime.fromISO(this.date);
  }

  constructor(data: any) {
    this._title = data.title;
    this._desc = data.desc;
    this._date = data.date;
    this._time = data.time;
    this._location = data.location;
    this._attendees = data.attendees;
    this._image = data.image;
  }
}
