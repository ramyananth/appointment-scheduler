import * as _ from 'lodash';
import { Appointment } from '../models/appointment';

export class AppointmentRepository {
  private seq: number;
  constructor(private appMap: Map<number, Appointment[]>) {
    this.seq = 1;
  }

  public async list(doctorId: number): Promise<Appointment[]> {
    if (!this.appMap.has(doctorId)) {
      throw new Error(`Doctor with id ${doctorId} not found`);
    }
    return this.appMap.get(doctorId);
  }

  public async listByDate(
    doctorId: number,
    date: string
  ): Promise<Appointment[]> {
    if (!this.appMap.has(doctorId)) {
      throw new Error(`Doctor with id ${doctorId} not found`);
    }
    const result = _.filter(this.appMap.get(doctorId), { date: date });
    return result;
  }

  public async add(
    doctorId: number,
    appointment: Appointment
  ): Promise<boolean> {
    appointment.id = this.seq++;
    if (!this.appMap.has(doctorId)) {
      this.appMap.set(doctorId, []);
    }
    this.appMap.get(doctorId).push(appointment);
    return true;
  }

  public async delete(
    doctorId: number,
    appointmentId: number
  ): Promise<boolean> {
    if (!this.appMap.has(doctorId)) {
      throw new Error(`Doctor with id ${doctorId} not found`);
    }
    _.remove(
      this.appMap.get(doctorId),
      (appointment: Appointment) => appointment.id === appointmentId
    );
    return true;
  }
}
