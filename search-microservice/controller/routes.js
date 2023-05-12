import { Router } from 'express';
import searchRepository from '../repository/searchRepository.js';

const router = Router();

router.get('/', (req, res) => {
    res.send("Welcome to the search API")
})

router.get('/api/allEvents', searchRepository.allEvents);
router.post('/api/searchEvents', searchRepository.searchEvents);
router.post('/api/nextEventPage', searchRepository.getNextEventPage);
router.post('/api/eventsByCategory', searchRepository.getEventsByCategory);

export default router