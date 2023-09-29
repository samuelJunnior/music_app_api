const MusicModel = require('../../app/models/music_model');

const loader = async () => {
    try {
        const amountMusics = await MusicModel.count();

        if (!amountMusics) { 
            console.log('Begin loader musics.');
            await MusicModel.create(
                {
                    "img": "http://localhost:3000/public/images/ambiente-musica-1.jpg",
                    "title": "Touch and Sound",
                    "path": "http://localhost:3000/public/http://localhost:3000/public/musics/touch-and-sound-113676.mp3",
                    "duration": 261,
                    "genre": "Ambiente",
                    "isFavoriteMusic": false
                },
                {
                    "img": "http://localhost:3000/public/images/ambiente-musica-2.jpg",
                    "title": "Middle East",
                    "path": "http://localhost:3000/public/http://localhost:3000/public/musics/middle-east-127104.mp3",
                    "duration": 182,
                    "genre": "Ambiente",
                    "isFavoriteMusic": false
                },
                {
                    "img": "http://localhost:3000/public/images/ambiente-musica-3.jpg",
                    "title": "Muladara chakra music",
                    "path": "http://localhost:3000/public/http://localhost:3000/public/musics/muladara-chakra-music-138093.mp3",
                    "duration": 314,
                    "genre": "Ambiente",
                    "isFavoriteMusic": false
                },
                {
                    "img": "http://localhost:3000/public/images/ambiente-musica-4.jpg",
                    "title": "Believe in Miracle by PrabajithK",
                    "path": "http://localhost:3000/public/http://localhost:3000/public/musics/believe-in-miracle-by-prabajithk-121041.mp3",
                    "duration": 122,
                    "genre": "Ambiente",
                    "isFavoriteMusic": false
                },
                {
                    "img": "http://localhost:3000/public/images/ambiente-musica-5.png",
                    "title": "Hang Drum Meditations",
                    "path": "http://localhost:3000/public/http://localhost:3000/public/musics/hang-drum-meditations-137894.mp3",
                    "duration": 336,
                    "genre": "Ambiente",
                    "isFavoriteMusic": false
                },
                {
                    "img": "http://localhost:3000/public/images/ambiente-musica-6.jpg",
                    "title": "Ambient Piano [Prod by BalanceBay",
                    "path": "http://localhost:3000/public/http://localhost:3000/public/musics/ambient-piano-prod-by-balancebay-109400.mp3",
                    "duration": 625,
                    "genre": "Ambiente",
                    "isFavoriteMusic": false
                },
                {
                    "img": "http://localhost:3000/public/images/ambiente-musica-7.jpg",
                    "title": "Slow Motion",
                    "path": "http://localhost:3000/public/http://localhost:3000/public/musics/slow-motion-121841.mp3",
                    "duration": 133,
                    "genre": "Ambiente",
                    "isFavoriteMusic": false
                },
                {
                    "img": "http://localhost:3000/public/images/ambiente-musica-8.jpg",
                    "title": "Documentary",
                    "path": "http://localhost:3000/public/http://localhost:3000/public/musics/documentary-138619.mp3",
                    "duration": 125,
                    "genre": "Ambiente",
                    "isFavoriteMusic": false
                },
                {
                    "img": "http://localhost:3000/public/images/ambiente-musica-9.jpg",
                    "title": "Winter Backseat Kiss",
                    "path": "http://localhost:3000/public/http://localhost:3000/public/musics/winter-backseat-kiss-130997.mp3",
                    "duration": 191,
                    "genre": "Ambiente",
                    "isFavoriteMusic": false
                },
                {
                    "img": "http://localhost:3000/public/images/eletronic-music-1.jpg",
                    "title": "Lifelike",
                    "path": "http://localhost:3000/public/musics/lifelike-126735.mp3",
                    "duration": 144,
                    "genre": "Eletrônico",
                    "isFavoriteMusic": false
                },
                {
                    "img": "http://localhost:3000/public/images/eletronic-music-2.jpg",
                    "title": "Powerful Beat",
                    "path": "http://localhost:3000/public/musics/powerful-beat-121791.mp3",
                    "duration": 73,
                    "genre": "Eletrônico",
                    "isFavoriteMusic": false
                },
                {
                    "img": "http://localhost:3000/public/images/eletronic-music-3.jpg",
                    "title": "Password Infinity",
                    "path": "http://localhost:3000/public/musics/password-infinity-123276.mp3",
                    "duration": 145,
                    "genre": "Eletrônico",
                    "isFavoriteMusic": false
                },
                {
                    "img": "http://localhost:3000/public/images/eletronic-music-4.jpg",
                    "title": "Stay Free",
                    "path": "http://localhost:3000/public/musics/stay-free-138363.mp3",
                    "duration": 141,
                    "genre": "Eletrônico",
                    "isFavoriteMusic": false
                }
            );
            console.log('End loader musics.');
        }

        
    } catch (error) {
        console.log(`Erro ao carregar músicas: ${error}`);
    }
}
 
module.exports = loader;