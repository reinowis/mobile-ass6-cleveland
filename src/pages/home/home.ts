import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list = [
    {
      name: 'Rock and Roll Hall of Fame',
      map: '41.5083536,-81.6961584',
      website: 'https://www.rockhall.com/'
    },
    {
      name: 'Playhouse Square',
      map: '41.5012767,-81.6807261',
      website: 'http://www.playhousesquare.org/'
    },
    {
      name: 'Cleveland Museum of Art',
      map: '41.5089515,-81.611614',
      website: 'http://www.clevelandart.org/'
    },
    {
      name: 'Cleveland Metroparks Zoo',
      map: '41.445521,-81.7079442',
      website: 'https://clevelandmetroparks.com/zoo'
    },
    {
      name: 'Great Lakes Science Center',
      map: '41.5074416,-81.6967337',
      website: 'http://greatscience.com/'
    },
    {
      name: 'Greater Cleveland Aquarium',
      map: '41.4965393,-81.7038046',
      website: 'http://greaterclevelandaquarium.com/'
    },
    {
      name: 'A Christmas Story House',
      map: '41.4687292,-81.6873931',
      website: 'http://www.achristmasstoryhouse.com/'
    },
    {
      name: 'Jack Cleveland Casino',
      map: '41.4985688,-81.6930995',
      website: 'https://www.jackentertainment.com/cleveland/'
    },
    {
      name: 'Severance Hall, Cleveland',
      map: '41.5063477,-81.6093361',
      website: 'https://www.clevelandorchestra.com/plan-your-visit/severance-hall/'
    },
    {
      name: 'USS Cod',
      map: '41.5100878,-81.6915759',
      website: 'http://www.usscod.org/'
    },
    {
      name: 'Museum of Contemporary Art Cleveland',
      map: '41.508915,-81.604643',
      website: 'http://www.mocacleveland.org/'
    },
    {
      name: "Children's Museum of Cleveland",
      map: '41.504263,-81.6598549',
      website: 'https://www.clevelandchildrensmuseum.org/'
    },
    {
      name: "International Women's Air & Space Museum",
      map: '41.5115682,-81.6899319',
      website: 'http://iwasm.org/wp-blog/'
    },
    {
      name: "Crawford Auto-Aviation Museum",
      map: '41.5134255,-81.6109785',
      website: 'https://www.wrhs.org/research/crawford/'
    },
  ];
  constructor(public navCtrl: NavController) {

  }
  public map(map: string, name: string)
  {
    window.open('geo:'+map+'?q='+encodeURIComponent(name),'_system');
  }
  public info(website: string)
  {
    window.open(website,'_system');
  }
}
