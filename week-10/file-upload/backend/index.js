import express from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.post('/file-upload', upload.single('display-image'), (req, res) => {
  console.log(req.body);
  res.send('This is the posting response');
});

app.listen(3000, () => {
  console.log('Server is running');
});
