export interface Appointment {
  id: number;
  patientFirstName: string;
  patientLastName: string;
  date: string;
  time: string;
  kind: 'New Patient' | 'Follow-up';
}
