const Artisan = {
  svg_templates: {
    male: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64' role='img' aria-label='male icon'><circle cx='32' cy='18' r='10' fill='#c7e0ff'/><rect x='12' y='32' width='40' height='20' rx='4' fill='#97c2ff'/><path d='M22 52c0-4 6-6 10-6s10 2 10 6' fill='#739edb'/></svg>",
    female: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64' role='img' aria-label='female icon'><circle cx='32' cy='16' r='10' fill='#ffd9e6'/><path d='M18 34c0 0 6-6 14-6s14 6 14 6v14a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V34z' fill='#ffb3cc'/><path d='M22 52c0-4 6-6 10-6s10 2 10 6' fill='#e68aa6'/></svg>"
  },

  artisans: [
    // Original 20
    {
      id: 1, name: "Adebola A.", profession: "Carpenter", location: "Lagos", rating: 4.7,
      certification: "City & Guilds Carpentry Level 2", svg_icon: "male", years_experience: 9,
      contact: "+2348010000001", description: "Specializes in custom furniture, kitchen cabinets and wooden decking."
    },
    {
      id: 2, name: "Mary Okon", profession: "Tailor", location: "Abuja", rating: 4.6,
      certification: "Fashion Academy Graduate", svg_icon: "female", years_experience: 6,
      contact: "+2348010000002", description: "Creates beautiful native and bridal wears."
    },
    {
      id: 3, name: "Samuel Eze", profession: "Electrician", location: "Port Harcourt", rating: 4.8,
      certification: "Electrical Trade Test II", svg_icon: "male", years_experience: 10,
      contact: "+2348010000003", description: "Expert in wiring, electrical installations and maintenance."
    },
    {
      id: 4, name: "Grace Udo", profession: "Hair Stylist", location: "Uyo", rating: 4.5,
      certification: "NABTEB Hair & Beauty Certificate", svg_icon: "female", years_experience: 5,
      contact: "+2348010000004", description: "Specializes in bridal and fashion hair styling."
    },
    {
      id: 5, name: "Babatunde O.", profession: "Plumber", location: "Ibadan", rating: 4.4,
      certification: "Trade Test Level 3", svg_icon: "male", years_experience: 8,
      contact: "+2348010000005", description: "Handles water systems, pipe fitting and repairs."
    },
    {
      id: 6, name: "Ngozi Nwachukwu", profession: "Caterer", location: "Enugu", rating: 4.9,
      certification: "Catering and Hotel Management Diploma", svg_icon: "female", years_experience: 11,
      contact: "+2348010000006", description: "Offers indoor and outdoor catering for events."
    },
    {
      id: 7, name: "Michael Adeyemi", profession: "Welder", location: "Osogbo", rating: 4.3,
      certification: "NABTEB Welding & Fabrication Certificate", svg_icon: "male", years_experience: 7,
      contact: "+2348010000007", description: "Specializes in iron gates, tank construction, and steel furniture."
    },
    {
      id: 8, name: "Janet Bello", profession: "Makeup Artist", location: "Lagos", rating: 4.9,
      certification: "Certified Professional Makeup Artist (CPMA)", svg_icon: "female", years_experience: 6,
      contact: "+2348010000008", description: "Provides bridal, editorial, and casual makeup services."
    },
    {
      id: 9, name: "Joseph Danladi", profession: "Bricklayer", location: "Abuja", rating: 4.2,
      certification: "Trade Test Certificate", svg_icon: "male", years_experience: 9,
      contact: "+2348010000009", description: "Experienced in block laying, plastering, and building finishing."
    },
    {
      id: 10, name: "Ruth Edet", profession: "Fashion Designer", location: "Calabar", rating: 4.8,
      certification: "Fashion Institute Graduate", svg_icon: "female", years_experience: 8,
      contact: "+2348010000010", description: "Designs creative native and modern outfits."
    },
    {
      id: 11, name: "Ibrahim Musa", profession: "Auto Mechanic", location: "Kano", rating: 4.5,
      certification: "NIMechE Certified Technician", svg_icon: "male", years_experience: 12,
      contact: "+2348010000011", description: "Expert in diagnosing and repairing cars and trucks."
    },
    {
      id: 12, name: "Esther Chukwu", profession: "Interior Decorator", location: "Owerri", rating: 4.7,
      certification: "Interior Design Diploma", svg_icon: "female", years_experience: 9,
      contact: "+2348010000012", description: "Creates modern and traditional home decor designs."
    },
    {
      id: 13, name: "Femi Alabi", profession: "Painter", location: "Lagos", rating: 4.6,
      certification: "Professional House Painting Course", svg_icon: "male", years_experience: 7,
      contact: "+2348010000013", description: "Expert in decorative and industrial painting."
    },
    {
      id: 14, name: "Aisha Mohammed", profession: "Event Planner", location: "Kaduna", rating: 4.9,
      certification: "Event Management Certificate", svg_icon: "female", years_experience: 10,
      contact: "+2348010000014", description: "Coordinates weddings, conferences and corporate events."
    },
    {
      id: 15, name: "Emeka Okafor", profession: "Tiler", location: "Onitsha", rating: 4.4,
      certification: "Trade Test Level 2", svg_icon: "male", years_experience: 8,
      contact: "+2348010000015", description: "Specializes in wall and floor tiling with quality finishing."
    },
    {
      id: 16, name: "Blessing James", profession: "Baker", location: "Benin City", rating: 4.8,
      certification: "Bakery & Pastry Diploma", svg_icon: "female", years_experience: 6,
      contact: "+2348010000016", description: "Creates cakes, pastries, and event desserts."
    },
    {
      id: 17, name: "David Yusuf", profession: "Barber", location: "Jos", rating: 4.5,
      certification: "NABTEB Barbering Certificate", svg_icon: "male", years_experience: 5,
      contact: "+2348010000017", description: "Expert in men’s grooming and modern haircuts."
    },
    {
      id: 18, name: "Toyin Ajayi", profession: "Photographer", location: "Lagos", rating: 4.9,
      certification: "Digital Photography Course", svg_icon: "female", years_experience: 7,
      contact: "+2348010000018", description: "Specializes in portrait, wedding, and lifestyle photography."
    },
    {
      id: 19, name: "Sunday Oladipo", profession: "Shoemaker", location: "Abeokuta", rating: 4.3,
      certification: "Leather Craftsmanship Certificate", svg_icon: "male", years_experience: 9,
      contact: "+2348010000019", description: "Makes durable handmade shoes and sandals."
    },
    {
      id: 20, name: "Chidinma Umeh", profession: "Seamstress", location: "Owerri", rating: 4.6,
      certification: "Advanced Tailoring Diploma", svg_icon: "female", years_experience: 6,
      contact: "+2348010000020", description: "Creates quality clothing with excellent fitting."
    },

    // 🔁 Repeat & randomize professions for next 80
    ...Array.from({ length: 80 }, (_, i) => {
      const professions = ["Carpenter", "Tailor", "Electrician", "Plumber", "Painter", "Welder", "Baker", "Fashion Designer", "Bricklayer", "Photographer", "Barber", "Caterer"];
      const names = ["John", "Mary", "Tunde", "Grace", "Ibrahim", "Ngozi", "Femi", "Aisha", "Chuka", "Esther"];
      const locations = ["Lagos", "Abuja", "Ibadan", "Port Harcourt", "Kano", "Enugu", "Benin", "Uyo", "Kaduna", "Jos"];
      const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
      const gender = Math.random() > 0.5 ? "male" : "female";
      return {
        id: 21 + i,
        name: `${random(names)} ${random(["Ade", "Okon", "Udo", "Musa", "Eze", "Danladi"])}`,
        profession: random(professions),
        location: random(locations),
        rating: (4 + Math.random() * 1).toFixed(1),
        certification: "Certified Professional in " + random(professions),
        svg_icon: gender,
        years_experience: Math.floor(Math.random() * 15) + 1,
        contact: `+23480100000${(21 + i).toString().padStart(2, "0")}`,
        description: `Experienced ${gender === "male" ? "man" : "woman"} specializing in ${random(professions).toLowerCase()} works.`
      };
    })
  ]
};

export default Artisan;
