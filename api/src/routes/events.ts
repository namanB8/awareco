import { Router } from 'express';
import { Event } from '../models/Event';

const router = Router();

router.get('/', (req, res) => {
  Event.find().then(docs => {
    res.json({
      status: true,
      message: "",
      data: {
        events: docs
      },
    });
  }).catch(err => {
    res.json({
      status: false,
      message: err.message,
      data: {

      }
    })
  })
});

router.get('/:eventId', (req, res) => {
  Event.findById(req.params.eventId).lean().then(event => {
    res.json({
      status: true,
      message: "",
      data: {
        event
      },
    });
  }).catch(err => {
    res.json({
      status: false,
      message: err.message,
      data: {
        
      }
    })
  })
});

export default router;