import { AppointmentRepository } from '../repositories/AppointmentRepository';
import { Appointment } from '../models/appointment';

export class AppointmentService {
  constructor(private appointmentRepo: AppointmentRepository) {}

  public async listAppointmentByDate(
    doctorId: number,
    date: string
  ): Promise<string> {
    if (!doctorId || doctorId < 0 || !date) {
      throw new Error(`Invalid arguments provided`);
    }

    const results = await this.appointmentRepo.listByDate(doctorId, date);
    if (results.length === 0) {
      throw new Error('No appointments were found in the system yet');
    }
    return JSON.stringify(results);
  }

  public async addAppointment(
    doctorId: number,
    firstName: string,
    lastName: string,
    date: string,
    time: string,
    kind: any
  ): Promise<string> {
    // validate time
    const mins = parseInt(time.split(':')[1].substring(0, 2));
    if (mins % 15 !== 0) {
      throw new Error(
        `Invalid time provided, only intervals of 15 are allowed`
      );
    }

    const appointment: Appointment = {
      id: 0,
      date,
      kind,
      patientFirstName: firstName,
      patientLastName: lastName,
      time,
    };
    await this.appointmentRepo.add(doctorId, appointment);
    return 'Successfully added';
  }

  public async deleteAppointment(
    doctorId: number,
    appointmentId: number
  ): Promise<string> {
    if (!doctorId || doctorId < 0 || !appointmentId || appointmentId < 0) {
      throw new Error(`Invalid arguments provided`);
    }

    await this.appointmentRepo.delete(doctorId, appointmentId);
    return 'Successfully deleted';
  }
}
