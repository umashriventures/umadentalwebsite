export async function bookAppointment(data) {
  // Simulate network latency
  await new Promise((r) => setTimeout(r, 800));

  // In a real app you would POST to /api/appointments
  console.log('📅 Appointment booked:', data);
  return { success: true, message: 'Your appointment is booked!' };
}
