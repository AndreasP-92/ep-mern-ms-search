import { Router } from 'express';
import searchRepository from '../repository/searchRepository.js';

const router = Router();

router.get('/ms/searchservice/', (req, res) => {
    res.send("Welcome to the search API")
})

router.get('/ms/searchservice/allEvents', searchRepository.allEvents);
router.post('/ms/searchservice/searchEvents', searchRepository.searchEvents);
router.post('/ms/searchservice/nextEventPage', searchRepository.getNextEventPage);
router.post('/ms/searchservice/eventsByCategory', searchRepository.getEventsByCategory);

export default router