import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import orphanageView from '../views/orphanages_view';
import Orphanage from '../models/Orphanages';

export default {
  //Listar Orfanatos
  async index(request: Request, response: Response) {
    
    const orpahangesRepository = getRepository(Orphanage);

    const orphanages = await orpahangesRepository.find({
      relations: ['images']
    });

    return response.json(orphanageView.renderMany(orphanages));
  },

  //Listar apenas um orfanato pelo id
  async show(request: Request, response: Response) {

    const { id } = request.params;
    
    const orpahangesRepository = getRepository(Orphanage);

    const orphanage = await orpahangesRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return response.json(orphanageView.render(orphanage));
  },

  async create(request: Request, response: Response){
    const{
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;
   
    const orpahangesRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename }
    })

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images
    } 
    
    const schema = Yup.object().shape({
      name : Yup.string().required(),
      latitude : Yup.number().required(),
      longitude : Yup.number().required(),
      about : Yup.string().required().max(300),
      instructions : Yup.string().required(),
      opening_hours : Yup.string().required(),
      open_on_weekends : Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    });

    await schema.validate(data, {
      abortEarly: false,
    })

    const orphanage = orpahangesRepository.create(data);
  
    await orpahangesRepository.save(orphanage);
  
    // console.log(request.query);
    // console.log(request.params);
    // console.log(request.body);
  
    return response.status(201).json(orphanage);
  }
}