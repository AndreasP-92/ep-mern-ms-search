import { Router } from 'express';
import searchRepository from '../repository/searchRepository.js';

const router = Router();

router.get('/ms/search/', (req, res) => {
    res.send("Welcome to the search API")
})

router.get('/ms/search/allEvents', searchRepository.allEvents);
router.post('/ms/search/searchEvents', searchRepository.searchEvents);
router.post('/ms/search/nextEventPage', searchRepository.getNextEventPage);
router.post('/ms/search/eventsByCategory', searchRepository.getEventsByCategory);
router.get('/ms/search/fetchEvent/:id', searchRepository.fetchEventDetails);
export default router