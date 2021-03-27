import {DateTime} from 'luxon';
import {Member} from './members';
import {Sponsor} from './sponsor.model';

export class EventModel {
  get online(): boolean {
    return this._online;
  }

  set online(value: boolean) {
    this._online = value;
  }
  get eventPictures(): string[] {
    return this._eventPictures;
  }

  set eventPictures(value: string[]) {
    this._eventPictures = value;
  }
  get organizers(): Member[] {
    return this._organizers;
  }

  set organizers(value: Member[]) {
    this._organizers = value;
  }
  get sponsors(): Sponsor[] {
    return this._sponsors;
  }

  set sponsors(value: Sponsor[]) {
    this._sponsors = value;
  }
  get speakers(): Member[] {
    return this._speakers;
  }

  set speakers(value: Member[]) {
    this._speakers = value;
  }

  private _title: string;
  private _desc: string;
  private _date: Date;
  private _startTime: DateTime;
  private _endTime: DateTime;
  private _attendees: any[];
  private _image: string;
  private _id: string;
  private _address: string;
  private _state: string;
  private _online: boolean;
  private _country: string;
  private _speakers: Member[];
  private _sponsors: Sponsor[];
  private _organizers: Member[];
  private _eventPictures: string[];

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
  get id(): string {
    return this._id;
  }

  set id(value: string) {
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

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get startTime(): DateTime {
    return this._startTime;
  }

  set startTime(value: DateTime) {
    this._startTime = value;
  }

  get endTime(): DateTime {
    return this._endTime;
  }

  set endTime(value: DateTime) {
    this._endTime = value;
  }

  get shortAddress(): string {
    return this.state + ', ' + this.country;
  }

  get fullAddress(): string {
    return `${this.address}, ${this.state}, ${this.country}`;
  }

  get attendees(): any[] {
    return this._attendees;
  }

  set attendees(value) {
    this._attendees = value;
  }
  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }


  get isPast(): boolean{
      const currentTime = new Date().getDate();
      return currentTime > new Date(this.date).getDate();
  }

  constructor(data: any) {
    this._id = data._id;
    this._eventPictures = data.eventPictures;
    this._organizers = data.organizers;
    this._sponsors = data.sponsors;
    this._speakers = data.speakers;
    this._title = data.title;
    this._desc = data.desc;
    this._online = data.online;
    this._date = data.startTime;
    this._startTime = data.startTime;
    this._endTime = data.endTime;
    this._address = data.address;
    this._state = data.state;
    this._country = data.country;
    this._attendees = data.attendees;
    this._image = data.image;
  }
}
