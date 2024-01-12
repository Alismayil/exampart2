import mongoose from 'mongoose';
import express from 'express'
const { Schema } = mongoose;
import cors from "cors"

const app = express()
const port = 4001
app.use(express.json())
app.use(cors())

const ExamPart2Schema = new Schema({
    image: String,
    price: String,
    name: String
});
const Exampart2 = mongoose.model('Exampart2', ExamPart2Schema);

app.get('/exampart2', async (req, res) => {
    const data = await Exampart2.find({})
    res.send(data)
})

app.get('/exampart2/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await Exampart2.findById(id).exec();
        res.status(200).send(data)
    } catch (error) {
        res.status(200).send(error)

    }
})
app.post('/exampart2', async (req, res) => {
  try {
    const data = new Exampart2(req.body)
    await data.save()
    res.status(200).send("Create new Product")
  } catch (error) {
    res.status(404).send("Not Create new Product")
  }
})
app.delete('/exampart2/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await Exampart2.findByIdAndDelete(id).exec();
        res.status(200).send("Deleted Product")
    } catch (error) {
      res.status(404).send("Not Deleted Product")
    }
})

mongoose.connect('mongodb+srv://AliIsmayil:ali123@cluster0.tzldidp.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})