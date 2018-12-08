const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();
const port = 4000;
const actionsRouter = require('./actions/actionsRouter.js');
const projectsRouter = require('./projects/projectsRouter.js');

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger('dev'));
server.use('/projects', projectsRouter);
server.use('/actions' , actionsRouter);



server.listen(port, () =>{
    console.log('Server? I hardly know her.');
})