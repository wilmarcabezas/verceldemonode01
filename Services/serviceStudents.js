import { client } from '../Utils/Database.js';

const getStudents = async () => {
    try {
        
        const res = await client.query('SELECT * FROM students');
        return res.rows; 
        
    } catch (err) {
        console.error('Error al obtener estudiantes:', err);
    }
};

const saveStudent = async (student) => {
    try {
        
        const query = 'INSERT INTO students(name, age, note) VALUES($1, $2, $3)';
        const values = [student.name, student.age, student.note];
        await client.query(query, values);
        console.log('Estudiante guardado exitosamente');
    } catch (err) {
        console.error('Error al guardar estudiante:', err);
    }
};

const getStudentById = async (id) => {
    try {
        
        const res = await client.query('SELECT * FROM students WHERE id = $1', [id]);
        return res.rows[0];
    } catch (err) {
        console.error('Error al obtener estudiante:', err);
    }
};
const updateStudent = async (id, student) => {
    try {
        
        const query = 'UPDATE students SET name = $1, age = $2, note = $3 WHERE id = $4';
        const values = [student.name, student.age, student.note, id];
        await client.query(query, values);
        console.log('Estudiante actualizado exitosamente');
    } catch (err) {
        console.error('Error al actualizar estudiante:', err);
    }
};

const deleteStudent = async (id) => {
    try {
        
        await client.query('DELETE FROM students WHERE id = $1', [id]);
        console.log('Estudiante eliminado exitosamente');
    } catch (err) {
        console.error('Error al eliminar estudiante:', err);
    }
};

export default {getStudents, saveStudent, getStudentById, updateStudent,deleteStudent};