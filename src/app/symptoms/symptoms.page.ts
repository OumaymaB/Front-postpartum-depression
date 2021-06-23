import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.page.html',
  styleUrls: ['./symptoms.page.scss'],
})
export class SymptomsPage implements OnInit {
  filterTerm: string;
  descendant=true;
  symptoms=[
    {
      "name": "Extrême tristesse",
     "description": "Se sentir triste et avoir la larme facile après l’arrivée d’un bébé est naturel."
    },
    {"name": "Sautes d'humeur",
    "description": "Une minute, vous vous sentiez bien, puis à l'improviste, vous vous noyiez dans l'anxiété."
   },
    {"name": "Insomnie",
     "description": "la mère n'est pas capable de dormir pendant que le bébé dort.Lorem ipsum dolor sit amet, consectetur adipiscing el"
    },
    {"name": "Hypersomnie",
     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
    },
    {"name": "Irritabilité et colère",
     "description": "Les plus petites choses me faisaient vibrerLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiukouu"
    },
    {"name": "Un sentiment d'être incapable",
     "description": "La nouvelle mère a l’impression de ne pas être un bon parent.Lorem ipsum dolor sit amet, consectetur adipiscing el"
    },
    {"name": "Peur de la mort",
     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {"name": "Culpabilité",
     "description": ""
    },
    {"name": "Idées suicidaires",
     "description": ""
    },
    {"name": "Anxiété",
     "description": ""
    },
  ];
  constructor() { }

  ngOnInit() {
    this.symptoms.sort((one, two) => (one.name < two.name ? -1 : 1));
  }
  sort(){
    this.descendant=!this.descendant;
    if(this.descendant==true) this.symptoms.sort((one, two) => (one.name < two.name ? -1 : 1));
    else
    this.symptoms.sort((one, two) => (one.name > two.name ? -1 : 1));
    
  }

}