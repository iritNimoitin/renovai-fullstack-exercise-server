import express from 'express';
import bodyParser from 'body-parser';
import driversRouts from './routes/driversRouts';
import tasksRouts from './routes/tasksRouts';
import connectionsRouts from './routes/connectionsRouts';
import cors from 'cors';

const app = express();
const port = 3001;

// Allow requests from all origins during development
app.use(cors());

app.use(bodyParser.json());

app.use('/api/drivers', driversRouts);
app.use('/api/tasks', tasksRouts);
app.use('/api/connections', connectionsRouts);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});