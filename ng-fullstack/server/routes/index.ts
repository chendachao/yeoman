import * as express from 'express';
import {TodoRoutes} from '../api/todo/routes/todo-routes';


export class Routes {
   static init(app: express.Application, router: express.Router) {
     TodoRoutes.init(router);
     

     app.use('/', router);
   }
}
