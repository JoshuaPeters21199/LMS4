// import LocalStorageService from "./LocalStorage.service";
import LocalStorageService from './localStorageService.service';

//LMS6
import RestStorageService from "./RestStorageService";

let appViewModel = {

  app: {
    header: {
      logo: "/images/bbq-party-logo.jpg",
      title: "Ken Jenson's BBQ League",
    },
    // isMock: true,

  
    endPoint: {
      host: "localhost",
      port: "8080",
      protocol: "http",
      apiPrefix:"api/v1"
    },

  //   endPoint: {

  //     host: "kjj-teams-api-fall23-env.eba-wa2da9ar.us-east-1.elasticbeanstalk.com",

  //     port: "80",

  //     protocol: "http"

  //  },
   isMock: false,

  },

  entities: {

    teams: {
      entity: "teams", //key used for LocalStorage
      entitySingle: "team",
      nameCol: "name",
          /* I used this so I could make the delete confirmation generic, 'Are you sure you want to delete (name for teams, full_name for player)*/

      list: {
        options: {
          sortCol: "name",
          sortDir: "asc",
          filterStr: "",
          filterCol: "name",
          limit: 50,
          offset: 0,
        },

        listTitle: "BBQ Teams",
        tableClasses: "table table-dark table-hover mt-2", //classes for table tag
        thClasses: "bg-black bg-gradient", //classes for my th tags (you may not need)
        columns: [
          {
            label: "Name",
            name: "name",
          },
          {
            label: "Coach Name",
            name: "coachName",
          },
          {
            label: "Motto",
            name: "motto",
          },
          {
            label: "Notes",
            name: "notes",
          },
        ],
      },
      data: [
        {
          id: 1,
          league_id: 1,
          name: "Raptors",
          notes: "we need to win",
          logo_path: "/images/fazeclan.jpg",
          motto: "We are the best!",
          coach_id: 1,
          coachName: "Ken Jenson",
          coachPhone: "801-333-4444",
          coachEmail: "ken.jenson@uvu.edu",
        },
        {
          id: 2,
          league_id: 1,
          name: "Killer Bunnies",
          logo_path: "/images/pioneers.jpg",
          notes: "we need to win",
          motto: "Our team rocks!",
          coach_id: 2,
          coachName: "Peter Rabbit",
          coachPhone: "801-333-4444",
          coachEmail: "peter.rabbit@uvu.edu",
        },
        {
          id: 3,
          league_id: 1,
          name: "Thunderbirds",
          logo_path: "/images/g2esports.jpg",
          notes: "we need to win",
          motto: "We will bury you!",
          coachId: 3,
          coachName: "Harry The Dirty Dog",
          coachPhone: "801-333-4444",
          coachEmail: "harry.dirty.dog@uvu.edu",
        },
      ],
      lookups: {
        coaches: [
          {
            label: "Ken Jenson",
            value: 1,
          },
          {
            label: "Johnny Bench",
            value: 2,
          },
        ],
      }
    },
    players: {
      entity: "players",
      entitySingle: "player",
      nameCol: "full_name",
      list: {
        options: {
          sortCol: "full_name",
          sortDir: "asc",
          filterStr: "",
          filterCol: "full_name",
          limit: 50,
          offset: 0,
        },

        listTitle: "Current BBQ League Chefs",
        tableClasses: "table table-dark table-hover mt-2", //classes for table tag
        thClasses: "bg-black bg-gradient", //classes for my th tags (you may not need)

        columns: [
          {
            label: "Name",
            name: "full_name",
          },
          {
            label: "Team",
            name: "team_name",
          },
          {
            label: "Address",
            name: "full_address",
          },
          {
            label: "Phone",
            name: "phone",
          },
          {
            label: "Email",
            name: "email",
          },
        ],
      },    

      data: [
        {
          id: 3,
          first_name: "Gabe",
          last_name: "Jenson",
          address1: "1527 N. 230 w.",
          address2: "Apt. 3",
          notes: "My notes",
          city: "Orem",
          state: "UT",
          zip: "1",
          team_id: 1,
          email: "gjenson@gmail.com",
          phone: "801-333-4444",
          password: "mypassword",
          user_name: "gjenson",
          license_level_id: 1,
          person_type: "player",
          full_name: "Gabe Jenson",
          full_address: "1527 N. 230 w. Apt. 3, Orem UT 84664",
          team_name: "Raptors",
        },
        {
          id: 4,
          first_name: "Hannah",
          last_name: "Jenson",
          address1: "1527 N. 230 w.",
          address2: "Apt. 3",
          notes: "My notes",
          city: "Orem",
          state: "UT",
          zip: "1",
          team_id: 2,
          email: "h.jenson@gmail.com",
          phone: "801-333-4444",
          password: "mypassword",
          user_name: "hjenson",
          license_level_id: 1,
          person_type: "player",
          full_name: "Hannah Jenson",
          full_address: "1527 N. 230 w. Apt. 3, Orem UT 84664",
          team_name: "Killer Bunnies",
        },
        {
          id: 9,
          first_name: "Alvis",
          last_name: "Bechtelar",
          address1: "661 Ritchie Village",
          address2: "",
          notes: "visualize synergistic supply-chains",
          city: "Bogisichville",
          state: "UT",
          zip: "84556",
          team_id: 3,
          email: "rachel_conroy92@gmail.com",
          phone: "669-664-2379",
          password: "password",
          user_name: "kjenson",
          license_level_id: 1,
          person_type: "player",
          full_name: "Alvis Bechtelar",
          full_address: "661 Ritchie Village Bogisichville UT 84556",
          team_name: "ThuderBirds",
        },
        {
          id: 10,
          first_name: "Tate",
          last_name: "Anderson",
          address1: "358 Hirthe Glens",
          address2: "",
          notes: "implement best-of-breed relationships",
          city: "Lake Maximilianfurt",
          state: "UT",
          zip: "84556",
          team_id: 2,
          email: "bradford_rutherford6@hotmail.com",
          phone: "558-580-8071",
          password: "password",
          user_name: "kjenson",
          license_level_id: 1,
          person_type: "player",
          full_name: "Tate Anderson",
          full_address: "358 Hirthe Glens, Lake Maximilianfurt UT 84556",
          team_name: "Killer Bunnies",
        },
      ],

      lookups: {
        teams: [
          {
            label: "Thunderbirds",
            value: 3,
          },
          {
            label: "Raptors",
            value: 1,
          },
          {
            label: "Killer Bunnies",
            value: 2,
          },
        ],
      }
    },
  },

  getApi(entity) {

    let model = this.entities[entity];

    if (this.app.isMock) {
      return new LocalStorageService(this.entities[entity], entity);
    } else {
      //LMS6 Only
      return new RestStorageService(
        entity,
       this.app.endPoint,
       model.list.options
     );
    }
  },
};

export default appViewModel;