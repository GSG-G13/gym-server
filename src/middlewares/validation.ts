import { type NextFunction, type Request, type Response } from 'express';
import { type AnySchema } from 'yup';

const validationData = (schema: AnySchema) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    }, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default validationData;
