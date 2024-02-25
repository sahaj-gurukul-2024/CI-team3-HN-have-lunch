export const baseUrl = import.meta.env.PROD ? `http://${import.meta.env.VITE_API_URL}`:`http://${import.meta.env.VITE_API_URL}:${
    import.meta.env.VITE_API_PORT
}`;

export const apiEndpoints = {
    "employeeLogin": `${baseUrl}/login`,
    "employeeAttendance": `${baseUrl}/attendance`,
    "employeeAttendanceHistory": `${baseUrl}/attendance/history`,
    "attendanceList": `${baseUrl}/admin/list`,
    "attendanceCount": `${baseUrl}/admin`
}
