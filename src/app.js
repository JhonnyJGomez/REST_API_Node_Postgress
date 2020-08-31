import express, {json} from 'express';
import morgan from 'morgan';

//importing routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//initialization
const app = express();

//midlewares
app.use(morgan('dev')); //muestra por consola los request.
app.use(json()); // para que entienda los json de los request. 

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/task', taskRoutes);

export default app; 