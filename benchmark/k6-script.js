import http from "k6/http";
import { sleep } from "k6";

const vus = 1000;

export const options = {
  stages: [
    { duration: "10s", target: vus },
    { duration: "1m", target: vus },
    { duration: "10s", target: 0 },
  ],
};

export default function () {
  const data = {
    name: randName(),
    email: randEmail(),
  };

  http.post("http://localhost:3333/user", data);

  sleep(1);
}

function randName() {
  return names[Math.floor(Math.random() * names.length)];
}
function randEmail() {
  return randName() + "@email.com";
}

const names = [
  "Abdul",
  "Abdullahi",
  "Abubakar",
  "Adam",
  "Adamu",
  "Adiy",
  "Ahmad",
  "Ajay",
  "Akira",
  "Alan",
  "Alberto",
  "Alejandro",
  "Aleksander",
  "Aleksandr",
  "Aleksey",
  "Alex",
  "Alexander",
  "Alexey",
  "Ali",
  "Aliyu",
  "Aminu",
  "Amit",
  "Amiyr",
  "Amiyt",
  "Amnuai",
  "Amphon",
  "Anah",
  "Anan",
  "Andreas",
  "Andrew",
  "Andrey",
  "Andri",
  "Andries",
  "Andrzej",
  "Anil",
  "Anthony",
  "Anton",
  "Antonio",
  "Arnar",
  "Artur",
  "Artyom",
  "Arun",
  "Ashok",
  "Atli",
  "Avraham",
  "Bartosz",
  "Bello",
  "Bernd",
  "Bin",
  "Birgir",
  "Bjarni",
  "Blessing",
  "Bongani",
  "Brian",
  "Bunmi",
  "Carlos",
  "Carol",
  "Chan",
  "Chao",
  "Charles",
  "Charoen",
  "Chen",
  "Cheng",
  "Christian",
  "Christopher",
  "Colin",
  "Daniel",
  "Daniyel",
  "Dariusz",
  "David",
  "Denis",
  "Dennis",
  "Diego",
  "Dieter",
  "Dilip",
  "Dinesh",
  "Dmitriy",
  "Dmitry",
  "Einar",
  "Eliyahu",
  "Emmanuel",
  "Evgeniy",
  "Fernando",
  "Fran",
  "Francis",
  "Francisco",
  "Francisco-Javier",
  "Frank",
  "Franz",
  "Gang",
  "Gareth",
  "Gary",
  "George",
  "Gerhard",
  "Graham",
  "Grzegorz",
  "Gunnar",
  "Guy",
  "Haim",
  "Haiyan",
  "Hans",
  "Hans-Ulrich",
  "Haruna",
  "Hassan",
  "Heike",
  "Heinz",
  "Helgi",
  "Helmut",
  "Hendrik",
  "Herbert",
  "Hideo",
  "Hiromi",
  "Hiroshi",
  "Hong",
  "Horst",
  "Hui",
  "Ian",
  "Ibrahim",
  "Idris",
  "Igor",
  "Ilya",
  "Isa",
  "Isaac",
  "Isah",
  "Ivan",
  "Jabulani",
  "Jacek",
  "Jacobus",
  "Jakub",
  "James",
  "Jan",
  "Janusz",
  "Javier",
  "Jean",
  "Jerzy",
  "Jesus",
  "Jason",
  "Jianguo",
  "Jianhua",
  "Jianjun",
  "Jianping",
  "Jin",
  "Joan",
  "Johan",
  "Johannes",
  "John",
  "Jonathan",
  "Jorge",
  "Jose",
  "Jose-Antonio",
  "Jose-Luis",
  "Jose-Manuel",
  "Jose-Maria",
  "Josef",
  "Joseph",
  "Joyce",
  "Juan",
  "Kabiru",
  "Kai",
  "Kamil",
  "Karen",
  "Karl",
  "Karl-Heinz",
  "Katsumi",
  "Kazuo",
  "Kelvin",
  "Kenji",
  "Kenneth",
  "Kevin",
  "Kiran",
  "Kirill",
  "Kiyoshi",
  "Kjartan",
  "Klaus",
  "Ko",
  "Koichi",
  "Koji",
  "Konstantin",
  "Koshi",
  "Krishna",
  "Kristinn",
  "Krzysztof",
  "Kun",
  "Lakshmi",
  "Lan",
  "Laxmi",
  "Lei",
  "Li",
  "Lihua",
  "Lijun",
  "Lilian",
  "Lin",
  "Ling",
  "Liping",
  "Liyor",
  "Luis",
  "Lukasz",
  "Maciej",
  "Mahmood",
  "Maksim",
  "Manfred",
  "Manoj",
  "Manuel",
  "Marcin",
  "Mardkhay",
  "Marek",
  "Mariusz",
  "Mark",
  "Martin",
  "Masami",
  "Masao",
  "Mateusz",
  "Matt",
  "Matthew",
  "Meiyr",
  "Michael",
  "Michal",
  "Miguel",
  "Miguel-Angel",
  "Mikhail",
  "Min",
  "Ming",
  "Mitsuo",
  "Miykhael",
  "Miykhal",
  "Mo",
  "Mohamed",
  "Mohammad",
  "Mohammed",
  "Mohan",
  "Moses",
  "Moshe",
  "Mpho",
  "Muhammad",
  "Muhammed",
  "Mukesh",
  "Musa",
  "Narong",
  "Nathan",
  "Nicola",
  "Nikita",
  "Nikolay",
  "Ning",
  "Nkosinathi",
  "Noam",
  "Oleg",
  "Omer",
  "Otieno",
  "Pablo",
  "Patrick",
  "Paul",
  "Pavel",
  "Pawel",
  "Pedro",
  "Peng",
  "Peter",
  "Petrus",
  "Philip",
  "Pieter",
  "Ping",
  "Piotr",
  "Prasit",
  "Prasoet",
  "Pricha",
  "Pushpa",
  "Qiang",
  "Qing",
  "Radha",
  "Rafael",
  "Ragnar",
  "Raj",
  "Rajendra",
  "Rajesh",
  "Raju",
  "Rakesh",
  "Ram",
  "Ramesh",
  "Raphael",
  "Rattana",
  "Ravi",
  "Richard",
  "Robert",
  "Roman",
  "Rong",
  "Roy",
  "Ryan",
  "Salisu",
  "Saman",
  "Samran",
  "Samuel",
  "Sani",
  "Sanjay",
  "Santosh",
  "Sam",
  "Sammy",
  "Sawat",
  "Sebastian",
  "Sergey",
  "Sergio",
  "Shankar",
  "Shay",
  "Shigeru",
  "Shimon",
  "Shlomo",
  "Shoji",
  "Sibusiso",
  "Simon",
  "Sipho",
  "Sombat",
  "Sombun",
  "Somchai",
  "Somchit",
  "Somkhit",
  "Somkiat",
  "Sommai",
  "Somnuek",
  "Somphon",
  "Somphong",
  "Somsak",
  "Sri",
  "Stefan",
  "Stephen",
  "Steve",
  "Steven",
  "Suman",
  "Sunday",
  "Sunil",
  "Sunthon",
  "Suresh",
  "Sushila",
  "Suwit",
  "Sveinn",
  "Tadashi",
  "Takashi",
  "Takeshi",
  "Tal",
  "Tebogo",
  "Thabo",
  "Thawi",
  "Themba",
  "Thomas",
  "Thulani",
  "Tomasz",
  "Toshio",
  "Udom",
  "Umar",
  "Uriy",
  "Usman",
  "Uwe",
  "Victor",
  "Vijay",
  "Viktor",
  "Vincent",
  "Vinod",
  "Vladimir",
  "Walter",
  "Wanchai",
  "Waraphon",
  "Wei",
  "Werner",
  "Wichai",
  "Wichian",
  "Willem",
  "William",
  "Winai",
  "Wirat",
  "Wirot",
  "Wojciech",
  "Wolfgang",
  "Xiang",
  "Xiaohong",
  "Xiaoli",
  "Xiaoping",
  "Xiaoyan",
  "Xin",
  "Xolani",
  "Yaakv",
  "Yahaya",
  "Yakubu",
  "Yan",
  "Yasuo",
  "Yhudah",
  "Ying",
  "Yisrael",
  "Yong",
  "Yosef",
  "Yoshie",
  "Yoshimi",
  "Yoshio",
  "Yu",
  "Yue",
  "Yukio",
  "Yun",
  "Yuriy",
  "Yusuf",
  "Yuval",
  "Zbigniew",
  "Zhen",
  "Zhiqiang",
  "Agata",
  "Agnieszka",
  "Aisha",
  "Akira",
  "Aleksandra",
  "Alina",
  "Alyona",
  "Amina",
  "Amnuai",
  "Ana",
  "Ana-Maria",
  "Anah",
  "Anan",
  "Anastasiya",
  "Andrea",
  "Angela",
  "Anita",
  "Ann",
  "Anna",
  "Anong",
  "Antonia",
  "Asha",
  "Barbara",
  "Beata",
  "Berglind",
  "Bin",
  "Birgit",
  "Birna",
  "Blessing",
  "Brigitte",
  "Bunmi",
  "Busisiwe",
  "Carmen",
  "Carol",
  "Caroline",
  "Catherine",
  "Chan",
  "Chanah",
  "Chao",
  "Charoen",
  "Chayah",
  "Chen",
  "Cheng",
  "Christa",
  "Christine",
  "Claire",
  "Claudia",
  "Cristina",
  "Darya",
  "Dolores",
  "Dorota",
  "Edda",
  "Ekaterina",
  "Elena",
  "Elisabeth",
  "Elizabeth",
  "Elke",
  "Emiko",
  "Emma",
  "Erika",
  "Erla",
  "Erna",
  "Ester",
  "Esther",
  "Eunice",
  "Eva",
  "Eugenia",
  "Ewa",
  "Faith",
  "Fatima",
  "Fiona",
  "Fran",
  "Francisca",
  "Fumiko",
  "Galina",
  "Gabra",
  "Gisela",
  "Gita",
  "Grace",
  "Hadiza",
  "Haiyan",
  "Hanna",
  "Haruna",
  "Hauwa",
  "Heike",
  "Helen",
  "Helga",
  "Hildur",
  "Hiroko",
  "Hiromi",
  "Hisako",
  "Hong",
  "Hui",
  "Hulda",
  "Inga",
  "Ingrid",
  "Irina",
  "Isa",
  "Isabel",
  "Isah",
  "Iwona",
  "Jackline",
  "Jan",
  "Jane",
  "Janet",
  "Jean",
  "Jennifer",
  "Jianhua",
  "Jianping",
  "Jin",
  "Joan",
  "Joanna",
  "Johanna",
  "Josefa",
  "Joy",
  "Joyce",
  "Juan",
  "Julie",
  "Justyna",
  "Kai",
  "Kanchana",
  "Karen",
  "Karin",
  "Karolina",
  "Kasia",
  "Katarzyna",
  "Katsumi",
  "Keiko",
  "Kiran",
  "Kiyoko",
  "Kristina",
  "Kseniya",
  "Kun",
  "Lakshmi",
  "Lalita",
  "Lan",
  "Latda",
  "Laura",
  "Laxmi",
  "Leah",
  "Lei",
  "Li",
  "Lihua",
  "Lijun",
  "Lilian",
  "Lilja",
  "Lin",
  "Linda",
  "Lindiwe",
  "Ling",
  "Liping",
  "Lisa",
  "Lucia",
  "Lucy",
  "Lyubov",
  "Lyudmila",
  "Magda",
  "Magdalena",
  "Mali",
  "Manju",
  "Margaret",
  "Maria",
  "Maria-Isabel",
  "Maria-Jose",
  "Maria-Pilar",
  "Marina",
  "Mariya",
  "Marta",
  "Martha",
  "Mary",
  "Maryam",
  "Masako",
  "Masami",
  "Mei",
  "Mercy",
  "Michal",
  "Michiko",
  "Mieko",
  "Min",
  "Mina",
  "Ming",
  "Miriam",
  "Miyoko",
  "Mo",
  "Monika",
  "Mpho",
  "Na",
  "Nadezhda",
  "Nan",
  "Nancy",
  "Natalya",
  "Ngozi",
  "Nicola",
  "Ning",
  "Nittaya",
  "Noam",
  "Nobuko",
  "Nokuthula",
  "Nonhlanhla",
  "Noriko",
  "Nushi",
  "Olga",
  "Omer",
  "Patricia",
  "Paula",
  "Paulina",
  "Peng",
  "Petra",
  "Phonthip",
  "Pilar",
  "Ping",
  "Prani",
  "Purity",
  "Pushpa",
  "Qing",
  "Rachel",
  "Radha",
  "Rattana",
  "Rebecca",
  "Reiko",
  "Rekha",
  "Renate",
  "Rita",
  "Rong",
  "Rosa",
  "Rose",
  "Rut",
  "Ruth",
  "Ryoko",
  "Sabine",
  "Sachiko",
  "Samran",
  "Santosh",
  "Sara",
  "Sarah",
  "Sam",
  "Sammy",
  "Sawat",
  "Shanti",
  "Sharon",
  "Shay",
  "Shizuko",
  "Shoshanah",
  "Sibongile",
  "Sita",
  "Sombat",
  "Sombun",
  "Somchit",
  "Somkhit",
  "Sommai",
  "Somnuek",
  "Somphon",
  "Somphong",
  "Sri",
  "Steinunn",
  "Sukanya",
  "Suman",
  "Sunday",
  "Sunita",
  "Suphaphon",
  "Susan",
  "Susanne",
  "Sushila",
  "Svetlana",
  "Takako",
  "Tamar",
  "Tatyana",
  "Tal",
  "Tebogo",
  "Teruko",
  "Thawi",
  "Tomiko",
  "Toshiko",
  "Unnur",
  "Urai",
  "Urmila",
  "Ursula",
  "Usha",
  "Valentina",
  "Victoria",
  "Wanjiru",
  "Wanphen",
  "Watsana",
  "Wei",
  "Wilai",
  "Xiang",
  "Xiaohong",
  "Xiaoli",
  "Xiaoping",
  "Xiaoyan",
  "Xin",
  "Yael",
  "Yan",
  "Yasuko",
  "Yelena",
  "Yhudiyt",
  "Ying",
  "Yoko",
  "Yong",
  "Yoshie",
  "Yoshiko",
  "Yoshimi",
  "Yu",
  "Yue",
  "Yuko",
  "Yuliya",
  "Yun",
  "Yuval",
  "Zainab",
  "Zandile",
  "Zanele",
  "Zhen",
];
