import axios from "axios";
import * as dotenv from 'dotenv'
dotenv.config()

let url = process.env.EVENT_MASTER_URL;

if (process.env.ENVIRONTMENT == 'dev') {
    url = process.env.DEV_EVENT_MASTER_URL
    console.log("hej")
}

export default {
    allEvents: async function (req, res) {
        const header = {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        };
        console.log(url)
        try {
            const response = await axios(
                `${process.env.ENVIRONTMENT == 'dev' ? url + '/get/all' : url}&locale=da-dk&page=1`,
                header
            )

            res.status(200).json(response.data);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    },
    searchEvents: async function (req, res) {
        const body = req.body;
        console.log(body)
        const header = {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        };

        try {
            const response = await axios(
                `${process.env.ENVIRONTMENT == 'dev' ? url + '/search' : url}&postalCode=${body.zipcode}&locale=da-dk`,
                header
            )

            res.status(200).json(response.data);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    },
    fetchEventDetails: async function (req, res) {
        const eventId = req.params.id
        console.log(eventId)

        const header = {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        };

        try {
            const response = await axios(
                `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${process.env.API_KEY}`,
                header
            )
            console.log(response);
            res.status(200).json(response.data);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    },
    getNextEventPage: async function (req, res) {
        const body = req.body;
        console.log(body)
        const header = {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        };

        try {
            const response = await axios(
                `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.API_KEY}&locale=da-dk&page=${body.page}`,
                header
            )

            res.status(200).json(response.data);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    },
    getEventsByCategory: async function (req, res) {
        const body = req.body;

        const header = {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        };

        try {
            const response = await axios(
                `https://app.ticketmaster.com/discovery/v2/classifications/segments/${body.category}.json?apikey=${process.env.API_KEY}`,
                header
            )

            res.status(200).json(response.data);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    },
    fetchEventDetails : async function (req, res) {
        const eventId = req.params.id
        console.log(eventId)
      
        const header = {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        };
      
        try {
          const response = await axios(
            `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${process.env.API_KEY}`,
            header
          )
          console.log(response);
          res.status(200).json(response.data);
        } catch (err) {
          res.status(500).json({message: err});
        }
      }
}