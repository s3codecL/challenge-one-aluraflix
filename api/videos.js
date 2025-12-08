// Datos iniciales de videos
const initialVideos = [
  {
    "id": 1,
    "title": "Qué Significa Pensar Como Programador",
    "category": "FRONT END",
    "photo": "https://i.ytimg.com/vi/ov7vA5HFe6w/sddefault.jpg",
    "link": "https://www.youtube.com/embed/ov7vA5HFe6w?si=rFYWWhqKMEWzxiJn",
    "description": "¿Cuáles son las principales características de un programador? ¿Qué habilidades y competencias debe tener alguien que quiere seguir esa carrera? En este video Christian Velasco nos habla de las principales características de un Programador."
  },
  {
    "id": 2,
    "title": "Cuándo usar let, var y const?",
    "category": "FRONT END",
    "photo": "https://i.ytimg.com/vi/PztCEdIJITY/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/PztCEdIJITY?si=hfEWd-LVzlUvP_qT",
    "description": "¿A veces cuando estás programando sientes dificuldades en saber en qué momento utilizar let, var o const para declarar una variable? En este video te sacamos estas dudas, además de explicarte lo que es escopo global y local en JavaScript."
  },
  {
    "id": 4,
    "title": "Equipo Front End",
    "category": "FRONT END",
    "photo": "https://i.ytimg.com/vi/rpvrLaBQwgg/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/rpvrLaBQwgg?si=V1VLVFRuKgOI_y6-",
    "description": "¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares? ¿O estás pensando en cambiar de carrera y entrar a la maravillosa area de tecnología?"
  },
  {
    "id": 5,
    "title": "Spring Framework. ¿Qué es ?",
    "category": "BACK END",
    "photo": "https://i.ytimg.com/vi/t-iqt1b2qqk/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/t-iqt1b2qqk?si=HaMciLKuslok023B",
    "description": "¿Busca un framework  para utilizar en sus proyectos? ¿Conoce Spring Framework? Spring es el framework más usado de Java. Nos ofrece herramientas que nos permiten crear proyectos más avanzados, con mejores prácticas y en menor tiempo. También posee una gran comunidad, lo que nos brinda muchísima documentación y ayuda."
  },
  {
    "id": 6,
    "title": "¿Qué es SQL y NoSQL?",
    "category": "BACK END",
    "photo": "https://i.ytimg.com/vi/cLLKVd5CNLc/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/cLLKVd5CNLc?si=MYp6WnXXQvqGSPYi",
    "description": "¿Cuáles son las diferencias entre una estructura de datos relacional (SQL) y una no relacional (NoSQL) y cuáles son las principales ventajas de cada una? Álvaro Camacho lo explica en este vídeo."
  },
  {
    "id": 7,
    "title": "Simplificando tu código en Java: Conoce los enum",
    "category": "BACK END",
    "photo": "https://i.ytimg.com/vi/EoPvlE85XAQ/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/EoPvlE85XAQ?si=jfXKclbzaZEcDm83",
    "description": "¿Escribir muchas variables del tipo constantes en Java te parece un proceso tedioso y que genera muchas líneas de código? En este Alura+ la instructora Génesys Rondón nos enseña a simplificar esta tarea usando un tipo de dato especial llamado enum."
  },
  {
    "id": 8,
    "title": "¿Qué son las Soft Skills?",
    "category": "INNOVACIÓN Y GESTIÓN",
    "photo": "https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/vhwspfvI52k?si=Tl0weD6ccR5Ry2gM",
    "description": "¿Qué son las SOFT SKILLS? ¿Por qué las SOFT SKILLS son tan importantes para el mercado de trabajo? ¿Cuáles son las SOFT SKILLS más deseadas por las empresas?"
  },
  {
    "id": 9,
    "title": "Las 7 Soft Skills más deseadas",
    "category": "INNOVACIÓN Y GESTIÓN",
    "photo": "https://i.ytimg.com/vi/YhR7Zp8NUzE/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/YhR7Zp8NUzE?si=BEftGCLl4dMe2maH",
    "description": "En un mundo donde las habilidades técnicas son fundamentales, las soft skills emergen como el factor diferencial que impulsa el éxito profesional."
  },
  {
    "id": 10,
    "title": "Ventajas de las metodologías ágiles",
    "category": "INNOVACIÓN Y GESTIÓN",
    "photo": "https://i.ytimg.com/vi/6N3OkLCfK-0/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/6N3OkLCfK-0?si=OhRjWZ7graEu_RiK",
    "description": "Hablamos de Métodos Ágiles o Metodologías Ágiles, para el desarrollo de software en cualquier empresa de tecnología, con Priscila Stuani, Instructora y Scrum master en Alura Latam."
  }
];

let videos = [...initialVideos];

export default function handler(req, res) {
  const { method } = req;
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathParts = url.pathname.split('/').filter(Boolean);
  const id = pathParts[2]; // /api/videos/:id

  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET all videos
  if (method === 'GET' && !id) {
    return res.status(200).json(videos);
  }

  // GET single video
  if (method === 'GET' && id) {
    const video = videos.find(v => v.id === parseInt(id));
    if (video) {
      return res.status(200).json(video);
    }
    return res.status(404).json({ error: 'Video not found' });
  }

  // POST new video
  if (method === 'POST') {
    const newVideo = req.body;
    const maxId = videos.length > 0 ? Math.max(...videos.map(v => v.id)) : 0;
    newVideo.id = maxId + 1;
    videos.push(newVideo);
    return res.status(201).json(newVideo);
  }

  // PUT/PATCH update video
  if ((method === 'PUT' || method === 'PATCH') && id) {
    const videoIndex = videos.findIndex(v => v.id === parseInt(id));
    if (videoIndex !== -1) {
      videos[videoIndex] = { ...videos[videoIndex], ...req.body, id: parseInt(id) };
      return res.status(200).json(videos[videoIndex]);
    }
    return res.status(404).json({ error: 'Video not found' });
  }

  // DELETE video
  if (method === 'DELETE' && id) {
    const videoIndex = videos.findIndex(v => v.id === parseInt(id));
    if (videoIndex !== -1) {
      const deletedVideo = videos.splice(videoIndex, 1);
      return res.status(200).json(deletedVideo[0]);
    }
    return res.status(404).json({ error: 'Video not found' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
