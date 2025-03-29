import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
    standalone: false
})
export class MainPageComponent implements OnInit {


  movieList = [
    {
      movieImage: "~../../assets/images/Theodore-rex-DVD.jpg",
      movieTitle: "Theodore Rex",
      movieDescription: "https://www.imdb.com/title/tt0114658/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/bayformer1.jpg",
      movieTitle: "BayFormer 1",
      movieDescription: "https://www.imdb.com/title/tt0418279/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/dateMovie.jpg",
      movieTitle: "Date Movie",
      movieDescription: "https://www.imdb.com/title/tt0466342/?ref_=nv_sr_srsg_0"
    },

    {
      movieImage: "~../../assets/images/Sonofthemask.jpg",
      movieTitle: "Son of the Mask",
      movieDescription: "https://www.imdb.com/title/tt0362165/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/sirBilly.jpg",
      movieTitle: "sir billi",
      movieDescription: "https://www.imdb.com/title/tt0851471/?ref_=nv_sr_srsg_0"
    },

    {
      movieImage: "~../../assets/images/Transformers_5.jpg",
      movieTitle: "Bayformer 5",
      movieDescription: "https://www.imdb.com/title/tt3371366/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/littlePandaFighter.jpg",
      movieTitle: "Little panda fighter",
      movieDescription: "https://www.imdb.com/title/tt3216920/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/sneakerella.jpg",
      movieTitle: "Sneakerella",
      movieDescription: "https://www.imdb.com/title/tt10160886/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/The_Hunchback_of_Notre_Dame_II.jpg",
      movieTitle: "Hunchback sequel",
      movieDescription: "https://www.imdb.com/title/tt0257778/?ref_=nv_sr_srsg_6"
    },
    {
      movieImage: "~../../assets/images/ladyAndTheTramp2.jpg",
      movieTitle: "Lady and the tramp 2",
      movieDescription: "https://www.imdb.com/title/tt0249677/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/pinochiio.jpg",
      movieTitle: "Pinocchio (pauly shore)",
      movieDescription: "https://www.imdb.com/title/tt8480678/?ref_=nv_sr_srsg_8"
    },
    {
      movieImage: "~../../assets/images/ratatoing.jpg",
      movieTitle: "Ratatoing",
      movieDescription: "https://www.imdb.com/title/tt1256535/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/kungFuBunny.jpg",
      movieTitle: "Kung Fu Bunny",
      movieDescription: "https://www.imdb.com/title/tt9306684/?ref_=nv_sr_srsg_3"
    },
    {
      movieImage: "~../../assets/images/garbagePaleKids.jpg",
      movieTitle: "Garbage Pail Kids",
      movieDescription: "https://www.imdb.com/title/tt0093072/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/desertMirage.jpg",
      movieTitle: "Desert Mirage",
      movieDescription: "https://www.imdb.com/title/tt6251100/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/articDogs.jpg",
      movieTitle: "Arctic dog",
      movieDescription: "https://www.imdb.com/title/tt4426464/?ref_=fn_al_tt_1"
    },
    {
      movieImage: "~../../assets/images/surfUp2.jpg",
      movieTitle: "Surfs Up 2",
      movieDescription: "https://www.imdb.com/title/tt5513260/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/carGo.jpg",
      movieTitle: "Car go",
      movieDescription: "https://www.imdb.com/title/tt6680792/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/stuartLittle3.jpg",
      movieTitle: "Stuart little 3",
      movieDescription: "https://www.imdb.com/title/tt0472602/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/pinochiio.jpg",
      movieTitle: "Pinocchio (fan dub) ",
      movieDescription: "https://www.imdb.com/title/tt8480678/?ref_=nv_sr_srsg_8"
    },

    {
      movieImage: "~../../assets/images/Foodfight!_DVD_cover.jpg",
      movieTitle: "Food fight",
      movieDescription: "https://www.imdb.com/title/tt0249516/?ref_=nv_sr_srsg_6"
    },
    {
      movieImage: "~../../assets/images/planBee.jpg",
      movieTitle: "Bee movie ripoff",
      movieDescription: "https://www.imdb.com/title/tt1196227/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/pandaVsAlien.jpg",
      movieTitle: "Panda vs aliens",
      movieDescription: "https://www.imdb.com/title/tt5990174/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/transformers2.jpg",
      movieTitle: "Bayformer 2",
      movieDescription: "https://www.imdb.com/title/tt1055369/?ref_=nv_sr_srsg_10"
    },
    {
      movieImage: "~../../assets/images/Transformers_3.jpg",
      movieTitle: "Bayformer 3",
      movieDescription: "https://www.imdb.com/title/tt1399103/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/Transformers_4.jpg",
      movieTitle: "Bayformer 4",
      movieDescription: "https://www.imdb.com/title/tt2109248/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/bobbleheads.jpg",
      movieTitle: "Bobbleheads",
      movieDescription: "https://www.imdb.com/title/tt13292206/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/marmaduke.jpg",
      movieTitle: "Marmaduke Netflix",
      movieDescription: "https://www.imdb.com/title/tt8746404/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/chrismasTree.jpg",
      movieTitle: "Chrismass tree",
      movieDescription: "https://www.imdb.com/title/tt1651146/?ref_=nv_sr_srsg_8"
    },

    {
      movieImage: "~../../assets/images/lifeAJungle.jpg",
      movieTitle: "Lifes a jungle",
      movieDescription: "https://www.imdb.com/title/tt2171416/?ref_=nv_sr_srsg_0"
    },

    {
      movieImage: "~../../assets/images/fantanstic4orce.jpg",
      movieTitle: "Freedom force",
      movieDescription: "https://www.imdb.com/title/tt1893371/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/avgn.jpg",
      movieTitle: "AVGN the movie",
      movieDescription: "https://www.imdb.com/title/tt2123146/?ref_=nm_knf_t2"
    },
    {
      movieImage: "~../../assets/images/WinnieThePooh.jpg",
      movieTitle: "Winnie the Pooh: Blood and Honey",
      movieDescription: "https://www.imdb.com/title/tt19623240/"
    },
    {
      movieImage: "~../../assets/images/xmasLight.jpg",
      movieTitle: "Christmas light",
      movieDescription: "https://www.imdb.com/title/tt7784186/"
    },
    {
      movieImage: "~../../assets/images/disasterMovie.jpg",
      movieTitle: "Disaster movie",
      movieDescription: "https://www.imdb.com/title/tt1213644/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/tallGirl.jpg",
      movieTitle: "Tall girl",
      movieDescription: "https://www.imdb.com/title/tt9252508/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/Tall_Girl_2.jpg",
      movieTitle: "Tall gir2",
      movieDescription: "https://www.imdb.com/title/tt16085592/?ref_=nv_sr_srsg_3"
    },
    {
      movieImage: "~../../assets/images/lover.jpg",
      movieTitle: " Lover (ralphthemoviemaker)",
      movieDescription: "https://www.imdb.com/title/tt5139926/?ref_=nm_knf_t4"
    },
    {
      movieImage: "~../../assets/images/toBoldlyFlee.png",
      movieTitle: "To boldly flee",
      movieDescription: "https://www.imdb.com/title/tt2270382/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/Izzie's_Way_Home.jpg",
      movieTitle: "Izzie  way home",
      movieDescription: "https://www.imdb.com/title/tt5667482/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/findingJesus.jpg",
      movieTitle: "Finding Jesus",
      movieDescription: "https://www.imdb.com/title/tt12981810/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/xmasBrigade.jpg",
      movieTitle: "Christmas light 2",
      movieDescription: "https://www.imdb.com/title/tt9467594/?ref_=nv_sr_srsg_0"
    },
    {
      movieImage: "~../../assets/images/whatUp.jpg",
      movieTitle: "What's up",
      movieDescription: "https://www.imdb.com/title/tt2751084/"
    },
  ]
  totalTasks = 0;

  top10Best: any = [];
  top10Worse: any = [];

  selectedPage = 'home';
  constructor() {
    this.totalTasks = this.movieList.length;
    for (let i = 9; i >= 0; i--) {
      this.top10Best.push(this.movieList[i])
    }
    for (let i = this.movieList.length - 10; i < this.movieList.length; i++) {

      this.top10Worse.push(this.movieList[i])
    }

  }

  ngOnInit(): void {
  }

  changePage(pageName: string) {
    this.selectedPage = pageName
  }

}
