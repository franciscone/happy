import { Router } from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload'; 

const routes = Router();
const upload = multer(uploadConfig);

// MVC 
// Model = Representação do Banco, representação do dado
// View = Como fica disponível para o front-end, como são visualizadas
// Controller = Lógica das Rotas

// Metodos padrões do Controller: index, show, create, update e delete

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;