puts "🌱 Seeding data..."
# Seed the database here

puts "Seeding users..."
User.create([
  {
    username: "taka-2628",
    password: "takataka",
    profile_image: "https://avatars.githubusercontent.com/u/77429137?v=4",
    intro: "Architectural Designer turned Creative Developer/Product Designer",
    website: "https://takashi-honzawa.com/",
    github: "https://github.com/taka-2628"
  },
  {
    username: "th",
    password: "takatakataka",
    profile_image: "https://archinect.imgix.net/uploads/45/45761a2b087dab7cc5cb74b1accecf13.jpg?fit=crop&auto=compress%2Cformat&w=300",
    intro: "Architectural Designer",
    website: "",
    github: ""
  },
  {
    username: "jojo",
    password: "Jojojo",
    profile_image: "https://images.squarespace-cdn.com/content/v1/6097ecb813c4e77969c1bf95/b4904932-c224-43c9-a6e4-3cac4f65bba5/JO+HEE.jpg",
    intro: "XR Designer & Developer",
    website: "https://youraveragejojo.com/",
    github: "https://github.com/jl5639"
  }
])

puts "Seeding projects..."
Project.create([
  { 
    user_id: 1,
    title: "CAPE TOWN BABOON INTERACTIVE",
    subtitle: "Animated Interactive 3D Web App built with Three.js and Blender",
    description: "Interactive topographic model of Cape Town with animated baboons simulating the behaviors of the baboon troops in the city. A predictive model of baboon troops is created based on behavioral algorithms (patch selection model), which becomes the basis for the interactive model.",
    image: "https://takashi-honzawa.com/static/media/03-Baboon-Interactive-Model.9194ad4f1ee7026b86ae.gif",
    url: "https://taka-2628.github.io/NoMoreMonkeyBusiness/",
    github_url: "https://github.com/taka-2628/NoMoreMonkeyBusiness"
  }, 
  {
    user_id: 1,
    title: "AMERICAN PETROLEUMSCAPE",
    subtitle: "Interactive Archive of Satelite Images of 155 Oil Refineries in America",
    description: "AMERICAN PETROLEUMSCAPE is developed as a part of a design/research project, which investigates the environmental and health issues around oil refineries. The archive contains satellite images of all of 155 oil refineries in the United States.",
    image: "https://takashi-honzawa.com/static/media/04-American-Petroleumscape.78f47302ef90df4d5ac5.gif",
    url: "https://taka-2628.github.io/coding-for-spatial-practices/project-03/",
    github_url: "https://github.com/taka-2628/coding-for-spatial-practices/project-03/"
  },
  {
    user_id: 3,
    title: "BAMBOO FUTURISM",
    subtitle: "Twinmotion Animation of New Building Typology for Jamaica",
    description: "Bamboo Futurism envisions a sustainable future of Jamaica where culms of baboo are used as the main construction material. Bamboo’s structural durability, incredible speed of growth, and maleability makes it an ideal material to replace the concrete and steel constructions that we see in Jamaica today.",
    image: "https://takashi-honzawa.com/static/media/a-V-01.3c1011c97e1052d37dfc.gif",
    url: "https://www.arch.columbia.edu/student-work/10323",
    github_url: ""
  },
  {
    user_id: 2,
    title: "LIFE AND DEATH OF 52,711 ACTORS",
    subtitle: "Data Visualization with D3.js and Mapbox API",
    description: "Data Visualization project that explores the correlation between the main genre of an actor and his or her maridge, divorce and cause of death. Are romance actors happily married? Do actors of the same genre die of the same cause?",
    image: "https://takashi-honzawa.com/static/media/02-52711-Actors.3c02d7ba44ac2c4cee99.gif",
    url: "https://taka-2628.github.io/52711_ACTORS/",
    github_url: "https://github.com/taka-2628/52711_ACTORS/"
  }
])

puts "Seeding comments..."
Comment.create([
  {
    user_id: 2,
    project_id: 1,
    body: "Hi, cool project. How did you bring your model into Three.js from Blender?"
  },
  {
    user_id: 1,
    project_id: 1,
    body: "Hi th, you can export the 3d file as glTF (GL Transmission Format). Three.js has GLTFLoader, which you can use to import your model from Blender. Hope this helps!"
  },
  {
    user_id: 2,
    project_id: 1,
    body: "Thanks taka-2628, I'll give it a try."
  },
  {
    user_id: 1,
    project_id: 1,
    body: "If you are working with GitHub pages to host your project, it will be a good idea to export as several glTF files to avoid exceeding 100mb file size limit."
  },
  {
    user_id: 2,
    project_id: 2,
    body: "Hi, how do you collected the satellite images?"
  },
  {
    user_id: 1,
    project_id: 2,
    body: "If you have coordinates of the locations, either as csv file or in JSON format, you can use Python and Google Static Map Api to automate the collection process."
  },
  {
    user_id: 2,
    project_id: 2,
    body: "Cool, thanks for the tip!"
  },
  {
    user_id: 1,
    project_id: 2,
    body: "👍"
  }
])

puts "Seeding genres..."
Genre.create([
  {genre: "virtual art"},
  {genre: "computer graphics"},
  {genre: "computer animation"},
  {genre: "digital art"},
  {genre: "interactive art"},
  {genre: "sound art"},
  {genre: "Internet art"},
  {genre: "video games"},
  {genre: "robotics"},
  {genre: "3D printing"},
  {genre: "cyborg art"}
])

puts "Seeding technologies..."
Technology.create([
  {technology: "Python", category: "language"},
  {technology: "JavaScript", category: "language"},
  {technology: "Ruby", category: "language"},
  {technology: "Java", category: "language"},
  {technology: "R", category: "language"},
  {technology: "C", category: "language"},
  {technology: "C#", category: "language"},
  {technology: "C++", category: "language"},
  {technology: "C++", category: "language"},
  {technology: "Objective-C", category: "language"},
  {technology: "Three.js", category: "library/framework"},
  {technology: "D3.js", category: "library/framework"},
  {technology: "p5.js", category: "library/framework"},
  {technology: "ml5.js", category: "library/framework"},
  {technology: "Matter.js", category: "library/framework"},
  {technology: "Phaser.js", category: "library/framework"},
  {technology: "howler.js", category: "library/framework"},
  {technology: "Natural", category: "library/framework"},
  {technology: "Processing", category: "library/framework"},
  {technology: "Processing.py", category: "library/framework"},
  {technology: "generativepy", category: "library/framework"},
  {technology: "Shoebot", category: "library/framework"},
  {technology: "Nodebox", category: "library/framework"},
  {technology: "Cinder", category: "library/framework"},
  {technology: "openFrameworks", category: "library/framework"},
  {technology: "Mapbox", category: "library/framework"},
  {technology: "Blender", category: "app software"},
  {technology: "ZBrush", category: "app software"},
  {technology: "Unity", category: "app software"},
  {technology: "UnrealEngine", category: "app software"},
  {technology: "Twinmotion", category: "app software"},
  {technology: "Amazon Sumerian", category: "app software"},
  {technology: "Google VR", category: "app software"},
  {technology: "CRYENGINE", category: "app software"},
  {technology: "Oculus Medium", category: "app software"},
  {technology: "Cinema 4D", category: "app software"},
  {technology: "3ds Max", category: "app software"},
  {technology: "Maya", category: "app software"},
  {technology: "Arnold", category: "app software"},
  {technology: "Rhinoceros 3D", category: "app software"},
  {technology: "V-Ray", category: "app software"},
  {technology: "Lumion", category: "app software"},
  {technology: "Enscape", category: "app software"},
  {technology: "Photoshop", category: "app software"},
  {technology: "Illustrator", category: "app software"},
  {technology: "InDesign", category: "app software"},
  {technology: "Affter Effects", category: "app software"},
  {technology: "Premiere Pro", category: "app software"},
  {technology: "Premiere Rush", category: "app software"},
  {technology: "Lightroom", category: "app software"},
  {technology: "XD", category: "app software"},
  {technology: "Spark", category: "app software"},
  {technology: "Substance", category: "app software"},
  {technology: "Fresco", category: "app software"},
  {technology: "Dimension", category: "app software"},
  {technology: "Arduino", category: "hardware"},
  {technology: "Raspberry Pi", category: "hardware"},
  {technology: "Adafruit", category: "hardware"},
  {technology: "Kasa Smart Devices", category: "hardware"},
  {technology: "Oculus", category: "hardware"},
])

puts "Seeding project-genres..."
ProjectGenre.create([
  {
    project_id: 1,
    genre_id: 3
  },
  {
    project_id: 1,
    genre_id: 5
  },
  {
    project_id: 1,
    genre_id: 7
  },
  {
    project_id: 2,
    genre_id: 5
  },
  {
    project_id: 2,
    genre_id: 7
  }
])

puts "Seeding project-technologies..."
ProjectTechnology.create([
  {
    project_id: 1,
    technology_id: 2
  },
  {
    project_id: 1,
    technology_id: 11
  },
  {
    project_id: 1,
    technology_id: 27
  },
  {
    project_id: 1,
    technology_id: 40
  },
  {
    project_id: 2,
    technology_id: 1
  },
  {
    project_id: 2,
    technology_id: 2
  },
  {
    project_id: 2,
    technology_id: 26
  }
])


puts "✅ Done seeding!"