import { DoctorRepository } from '../repositories/DoctorRepository';

export class DoctorService {
  constructor(private doctorRepo: DoctorRepository) {}

  public async listDoctors(): Promise<string> {
    const results = await this.doctorRepo.list();
    if (results.length === 0) {
      throw new Error('No doctors were found in the system yet');
    }
    return JSON.stringify(results);
  }

  public async getDoctorById(id: number): Promise<string> {
    if (id < 1) {
      throw new Error(
        `Invalid: No doctor with id ${id} was found in the system yet`
      );
    }
    const doctor = await this.doctorRepo.get(id);
    if (!doctor) {
      throw new Error(`No doctor with id ${id} was found in the system yet`);
    }
    return JSON.stringify(doctor);
  }
}
