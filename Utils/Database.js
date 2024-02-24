import pkg from 'pg';
const {Client} = pkg;

const connectionString = 'postgres://default:bf3BTmnKYd4P@ep-orange-smoke-08960365.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require';

const client = new Client({
    connectionString: connectionString,
});

const conectar = () => {
    client.connect()
        .then(() => {
            console.log('Conexión exitosa a la base de datos');
        })
        .catch((error) => {
            console.error('Error al conectar a la base de datos:', error);
        });
};

export default conectar;
export { client }; 