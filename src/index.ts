import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { UserService } from './service/user-service';

createConnection().then(connection => {
  const userService = new UserService(connection);
  const app = express();
  app.use(bodyParser.json()); // add html form stuff

  app.get('/users', async (request: Request, response: Response) => {
    const users = await userService.getUsers();
    return response.send(users);
  });

  app.get('/users/:id', async (request: Request, response: Response) => {
    const results = await userService.getUser(parseInt(request.params.id));
    return response.send(results);
  });

  app.post('/users', async (request: Request, response: Response) => {
    const user = await userService.createUser(request.body);
    return response.send(user);
  });

  app.patch('/users/:id', async (request: Request, response: Response) => {
    const result = await userService.patchUser(parseInt(request.params.id), request.body);
    return response.send(result);
  });

  app.delete('/users/:id', async (request: Request, response: Response) => {
    const result = await userService.deleteUser(parseInt(request.params.id));
    return response.send(result);
  });

  app.listen(3000, () => {
    console.log("Server is running");
  });
});
