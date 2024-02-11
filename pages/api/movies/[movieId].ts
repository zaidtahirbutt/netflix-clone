import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if ( req.method !== 'GET') {
        return res.status(405).end();
    }
    
    try {

        await serverAuth(req, res);

        const { movieId } = req.query;

        console.log("inside /api/movies.")
        console.log(movieId)
            // prev from useMovie.ts we had id = 6472e6daa2272c3575784f6e

        if (typeof movieId !== 'string' ) {
            throw new Error('Invalid movieId Type (its not a sting)');
        }

        if (!movieId) {
            throw new Error('Invalid movieId');
        }

        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        });

        console.log(movie)

        if (!movie) {
            throw new Error('Invalid Movie ID')
        }

        return res.status(200).json(movie);

    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }

}