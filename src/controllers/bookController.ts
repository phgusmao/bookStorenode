import { Request, Response } from 'express'

const BookController = {

    async index(req: Request, res: Response): Promise<Response> {
        
        let books = {}
        
        return res.json(books)
    }

}

export {BookController}