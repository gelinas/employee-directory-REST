
exports.seed = function(knex) {
  return knex('employees')
    .truncate() // Deletes ALL existing entries and resets primary keys
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {
          first_name: "Amanda",
          last_name: "Anderson",
          phone: "111-111-1234",
          email: "aa@example.com",
          address: "1 Anderson Ave",
          city: "Anytown",
          state: "MI",
          zip: "11111",
          photo: "https://frontendtest.rivet.work/images/aa.jpg",
          notes: null
        },
        {
          first_name: "Brent",
          last_name: "Barton",
          phone: "222-222-2222",
          email: "bb@example.com",
          address: "102 Bean",
          city: "Beanvill",
          state: "AL",
          zip: "12345",
          photo: "https://frontendtest.rivet.work/images/bb.jpg",
          notes: null
        },
        {
          first_name: "Carla",
          last_name: "Carrington",
          phone: "333-333-3333",
          email: "cc@example.com",
          address: "1 Carrington Cr",
          city: "Carter City",
          state: "AL",
          zip: "33333",
          photo: "https://frontendtest.rivet.work/images/cc.jpg",
          notes: null
        },
        {
          first_name: "Don",
          last_name: "Douglas",
          phone: "444-444-4444",
          email: "dd@example.com",
          address: "1 Douglas Dr",
          city: "Dusty Crossing",
          state: "DE",
          zip: "44444",
          photo: "https://frontendtest.rivet.work/images/dd.jpg",
          notes: null
        },
        {
          first_name: "Eddie",
          last_name: "Edmunds",
          phone: "555-555-5555",
          email: "ee@example.com",
          address: "1 Edmunds Est",
          city: "Eagleton",
          state: "FL",
          zip: "55555",
          photo: "https://frontendtest.rivet.work/images/ee.jpg",
          notes: null
        },
        {
          first_name: "Fran",
          last_name: "Franklin",
          phone: "666-666-6666",
          email: "ff@example.com",
          address: "1 Franklin Fwy",
          city: "Funkytowne",
          state: "FL",
          zip: "66666",
          photo: "https://frontendtest.rivet.work/images/ff.jpg",
          notes: null
        },
        {
          first_name: "George",
          last_name: "Gallows",
          phone: "777-777-7777",
          email: "gg@example.com",
          address: "1 Gallows Grv",
          city: "Gambino",
          state: "GA",
          zip: "77778",
          photo: "https://frontendtest.rivet.work/images/gg.jpg",
          notes: null
        },
        {
          first_name: "Harriet",
          last_name: "Henderson",
          phone: "888-888-8888",
          email: "hh@example.com",
          address: "1 Henderson Hwy",
          city: "Hamilton",
          state: "Hi",
          zip: "88888",
          photo: "https://frontendtest.rivet.work/images/hh.jpg",
          notes: null
        },
        {
          first_name: "Issac",
          last_name: "Indigo",
          phone: "999-999-9999",
          email: "ii@example.com",
          address: "1 Indigo Is",
          city: "Istanbul",
          state: "Il",
          zip: "99999",
          photo: "https://frontendtest.rivet.work/images/ii.jpg",
          notes: null
        },
        {
          first_name: "Louis",
          last_name: "Gelinas",
          phone: "3139201944",
          email: "jlgelinas@gmail.com",
          address: "645 E Bethune",
          city: "Detroit",
          state: "MI",
          zip: "48202",
          photo: "https://www.louisgelinas.com/static/media/louis-headshot.d09504cd.jpg",
          notes: null
        },
        {
          first_name: "Keanu",
          last_name: "Reeves",
          phone: "313-920-1944",
          email: "jlgelinas@gmail.com",
          address: "645 E Bethune",
          city: "Detroit",
          state: "MI",
          zip: "48202",
          photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Keanu_Reeves_%28crop_and_levels%29_%28cropped%29.jpg/1280px-Keanu_Reeves_%28crop_and_levels%29_%28cropped%29.jpg",
          notes: null
        },
        {
          first_name: "Adam",
          last_name: "Driver",
          phone: "(734) 904-8672",
          email: "juliagelinas@gmail.com",
          address: "145 Meadowlark Circle",
          city: "Georgetown",
          state: "TX",
          zip: "78626",
          photo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Adam_Driver_by_Gage_Skidmore.jpg",
          notes: null
        },
        {
          first_name: "Tyson",
          last_name: "Gersh",
          phone: "7349048672",
          email: "jlgelinas@gmail.com",
          address: "145 Meadowlark Circle",
          city: "Georgetown",
          state: "TX",
          zip: "78626",
          photo: "https://events.sustainablebrands.com/sb17saopaulo/wp-content/uploads/2017/06/tyson-gersh.jpg",
          notes: null
        },
        {
          first_name: "George",
          last_name: "Washington",
          phone: "555-555-5555",
          email: "george@washington.history",
          address: "1 Plantation road",
          city: "Mount Vernon",
          state: "VA",
          zip: "12345",
          photo: "https://www.history.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_2000%2Cq_auto:good%2Cw_2000/MTU3ODc5MDgwNzk1Nzc2MzI5/by-john-trumbull-2.jpg",
          notes: null
        },
        {
          first_name: "Andy",
          last_name: "Lawrence",
          phone: "(810) 923-2914",
          email: "amlawrence@gmail.com",
          address: "123 Main St",
          city: "Clawson",
          state: "MI",
          zip: "48017",
          photo: "https://frontendtest.rivet.work/images/bb.jpg",
          notes: "Here are some notes"
        }
      ]);
    });
};
