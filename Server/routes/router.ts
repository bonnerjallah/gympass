import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Serve static files
router.use('/members', express.static(path.join(__dirname, '../../public/members')));
router.use('/trainers', express.static(path.join(__dirname, '../../public/trainers')));
router.use('/staffs', express.static(path.join(__dirname, '../../public/staffs')));

// Optional: define a type for folder names
type FolderType = 'members' | 'trainers' | 'staffs';

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) {
    let folder: FolderType = 'members'; // default
    if (req.baseUrl.includes('trainers')) folder = 'trainers';
    else if (req.baseUrl.includes('staffs')) folder = 'staffs';
    cb(null, path.join(__dirname, `../../public/${folder}`));
  },

  filename: function (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    callback: multer.FileFilterCallback // ✅ use multer's built-in type here
  ) => {
    const filetypes = /jpeg|jpg|png|jfif|webp/i;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      callback(null, true);
    } else {
      callback(new Error('Only image files are allowed!'));
    }
  },
});

// Example route using upload middleware
router.post('/upload', upload.single('file'), (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ message: 'File uploaded successfully', file: req.file });
});

export default router;
