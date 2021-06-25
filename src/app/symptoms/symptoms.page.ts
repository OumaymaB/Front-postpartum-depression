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
     "description": "la mère n'est pas capable de dormir pendant que le bébé dort. même s'il dort elle ne peut pas dormir"
    },
    {"name": "Hypersomnie",
     "description": "la maman a un besoin excessif de sommeil, même si son bébé pleure et a besoin d'elle."
    },
    {"name": "Irritabilité et colère",
     "description": "Les plus petites choses me faisaient vibrerLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiukouu"
    },
    {"name": "Un sentiment d'être incapable",
     "description": "La nouvelle mère a l’impression de ne pas être un bon parent,elle ne se sent pas à la hauteur. "
    },
    {"name": "Peur de la mort",
     "description": "Les mamans expéreince une forte angoisse concernant la mort subite des nourissons"
    },
    {"name": "Culpabilité",
     "description": "La maman se sent comme si son bébé et sa famille seront mieux sans elle, et qu'ils méritent mieux"
    },
    {"name": "Idées suicidaires",
     "description": "La maman peut penser que le suicide constitue une solution à la situation ou bien à la douleur morale"
    },
    {"name": "Anxiété",
     "description": "l'anxiété devient excessive et nuit à la vie de tous les jours, on parle alors de troubles anxieux"
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