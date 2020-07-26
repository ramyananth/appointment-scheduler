import * as _ from 'lodash';
import { Doctor } from '../models/doctor';

export class DoctorRepository {
  private seq: number;
  constructor(
    private doctorsMap: Map<number, number>,
    private doctorsList: Doctor[]
  ) {
    this.seq = 1;
  }

  public async list(): Promise<Doctor[]> {
    return this.doctorsList;
  }

  public async get(id: number): Promise<Doctor> {
    return this.doctorsList[this.doctorsMap.get(id)];
  }

  public async add(doctor: Doctor): Promise<boolean> {
    doctor.id = this.seq++;
    this.doctorsList.push(doctor);
    this.doctorsMap.set(doctor.id, this.doctorsList.length - 1);
    return true;
  }

  public async delete(id: number): Promise<boolean> {
    if (!this.doctorsMap.has(id))
      throw new Error(`Doctor with id ${id} not found`);

    const idx = this.doctorsMap.get(id);
    this.doctorsList.splice(idx, 1);
    this.doctorsMap.delete(id);
    return true;
  }
}
