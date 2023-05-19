import { Router } from 'express';
import searchRepository from '../repository/searchRepository.js';

const router = Router();

router.get('/ms/search/', (req, res) => {
    res.send("Welcome to the search API")
})

router.get('/ms/search/allEvents', searchRepository.allEvents);
router.post('/ms/searchsearchEvents', searchRepository.searchEvents);
router.post('/ms/searchnextEventPage', searchRepository.getNextEventPage);
router.post('/ms/searcheventsByCategory', searchRepository.getEventsByCategory);

export default router