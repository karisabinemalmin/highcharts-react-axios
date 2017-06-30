import React from 'react';
import axios from 'axios'
import Chart from '../Chart/Chart.jsx';
import Map from '../Map/Map.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      scores: [],
      titles: [],
      subject: 'atom',
      selectedPanel: null
    };
  }

  handleSlide(e) {
    this.setState({
      selectedPanel: e.target.value,
    })
  }

  handleClose(e) {
    this.setState({
      selectedPanel: null
    })
  }

  componentDidMount() { // Get data
    const subject = this.state.subject
    axios.get(`https://www.reddit.com/r/${subject}.json`)
      .then(res => {
        const comments = res.data.data.children.slice(0, 5).map(obj => obj.data.num_comments);
        const scores = res.data.data.children.slice(0, 5).map(obj => obj.data.score);
        const titles = res.data.data.children.slice(0, 5).map(obj => obj.data.title);
        this.setState({
          comments: comments,
          scores: scores,
          titles: titles
        });
    });
  }

  render() {
    return (
      <div className="wrap">

        <header>
          <h1>Highcharts</h1>
          {this.state.selectedPanel}
        </header>

        <div style={{'width': '50%', 'display': 'inline-block'}}>

          <Chart
            title="Statistikk"
            stacking="true"
            dataName="Comments"
            dataName2="Scores"
            type="bar" // pie, bar, column, line
            data={this.state.comments}
            data2={this.state.scores}
            xAxis={this.state.titles}
            yAxis={this.state.titles}
            handleSlide={this.handleSlide.bind(this)}
            handleClose={this.handleClose.bind(this)}
            selectedPanel={this.state.selectedPanel}
            datagrunnlag="Cereal boxes make for five star accommodation scream for no reason at 4 am lick butt, and chirp at birds find empty spot in cupboard and sleep all day stare at the wall, play with food and get confused by dust yet jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. Mice knock dish off table head butt cant eat out of my own dish run outside as soon as door open. When in doubt, wash white cat sleeps on a black shirt so ask for petting yet fall asleep on the washing machine. Ignore the squirrels, you'll never catch them anyway friends are not food for refuse to drink water except out of someone's glass, or curl into a furry donut and knock dish off table head butt cant eat out of my own dish. Scream at teh bath scratch the postman wake up lick paw wake up owner meow meow purr purr when being pet. My left donut is missing, as is my right decide to want nothing to do with my owner today, or intently stare at the same spot, but sleep on keyboard. Destroy the blinds lick butt, for refuse to drink water except out of someone's glass yet jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed lick the other cats and pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Roll over and sun my belly hunt by meowing loudly at 5am next to human slave food dispenser. Licks your face jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans yet claw drapes, meow to be let in or eat the fat cats food. Friends are not food. Then cats take over the world i am the best so cough hairball on conveniently placed pants or scamper, but refuse to leave cardboard box lie in the sink all day, meow for food, then when human fills food dish, take a few bites of food and continue meowing. Show belly scratch me there, elevator butt cats making all the muffins. Stretch slap owner's face at 5am until human fills food dish all of a sudden cat goes crazy. Bathe private parts with tongue then lick owner's face freak human out make funny noise mow mow mow mow mow mow success now attack human, dream about hunting birds or find something else more interesting, for hiss and stare at nothing then run suddenly away yet chase red laser dot. Hack up furballs. Pooping rainbow while flying in a toasted bread costume in space toy mouse squeak roll over. If it smells like fish eat as much as you wish howl on top of tall thing and woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now ask to go outside and ask to come inside and ask to go outside and ask to come inside woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now. Love to play with owner's hair tie cats go for world domination leave fur on owners clothes, stare out the window. Kitty loves pigs make muffins show belly for catch mouse and gave it as a present. Drink water out of the faucet purr when being pet so inspect anything brought into the house. Lay on arms while you're using the keyboard hide at bottom of staircase to trip human. Stare at ceiling stare at guinea pigs or scratch the box. Human is washing you why halp oh the horror flee scratch hiss bite see owner, run in terror, and relentlessly pursues moth or meow to be let in so sniff sniff. Find empty spot in cupboard and sleep all day. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked curl up and sleep on the freshly laundered towels be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day, ears back wide eyed. Eat half my food and ask for more lie on your belly and purr when you are asleep but plays league of legends. Walk on car leaving trail of paw prints on hood and windshield knock over christmas tree i cry and cry and cry unless you pet me, and then maybe i cry just for fun and mrow or behind the couch, so sleep in the bathroom sink stare at ceiling light. Curl up and sleep on the freshly laundered towels under the bed. Refuse to leave cardboard box."
          />
        </div>

        <div style={{'width': '50%', 'display': 'inline-block'}}>
          <Chart
            title="Statistikk2"
            stacking="true"
            dataName="Comments"
            dataName2="Scores"
            type="line" // pie, bar, column, line
            data={this.state.comments}
            data2={this.state.scores}
            xAxis={this.state.titles}
            yAxis={this.state.titles}
            handleSlide={this.handleSlide.bind(this)}
            handleClose={this.handleClose.bind(this)}
            selectedPanel={this.state.selectedPanel}
            datagrunnlag="Cereal boxes make for five star accommodation scream for no reason at 4 am lick butt, and chirp at birds find empty spot in cupboard and sleep all day stare at the wall, play with food and get confused by dust yet jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. Mice knock dish off table head butt cant eat out of my own dish run outside as soon as door open. When in doubt, wash white cat sleeps on a black shirt so ask for petting yet fall asleep on the washing machine. Ignore the squirrels, you'll never catch them anyway friends are not food for refuse to drink water except out of someone's glass, or curl into a furry donut and knock dish off table head butt cant eat out of my own dish. Scream at teh bath scratch the postman wake up lick paw wake up owner meow meow purr purr when being pet. My left donut is missing, as is my right decide to want nothing to do with my owner today, or intently stare at the same spot, but sleep on keyboard. Destroy the blinds lick butt, for refuse to drink water except out of someone's glass yet jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed lick the other cats and pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Roll over and sun my belly hunt by meowing loudly at 5am next to human slave food dispenser. Licks your face jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans yet claw drapes, meow to be let in or eat the fat cats food. Friends are not food. Then cats take over the world i am the best so cough hairball on conveniently placed pants or scamper, but refuse to leave cardboard box lie in the sink all day, meow for food, then when human fills food dish, take a few bites of food and continue meowing. Show belly scratch me there, elevator butt cats making all the muffins. Stretch slap owner's face at 5am until human fills food dish all of a sudden cat goes crazy. Bathe private parts with tongue then lick owner's face freak human out make funny noise mow mow mow mow mow mow success now attack human, dream about hunting birds or find something else more interesting, for hiss and stare at nothing then run suddenly away yet chase red laser dot. Hack up furballs. Pooping rainbow while flying in a toasted bread costume in space toy mouse squeak roll over. If it smells like fish eat as much as you wish howl on top of tall thing and woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now ask to go outside and ask to come inside and ask to go outside and ask to come inside woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now. Love to play with owner's hair tie cats go for world domination leave fur on owners clothes, stare out the window. Kitty loves pigs make muffins show belly for catch mouse and gave it as a present. Drink water out of the faucet purr when being pet so inspect anything brought into the house. Lay on arms while you're using the keyboard hide at bottom of staircase to trip human. Stare at ceiling stare at guinea pigs or scratch the box. Human is washing you why halp oh the horror flee scratch hiss bite see owner, run in terror, and relentlessly pursues moth or meow to be let in so sniff sniff. Find empty spot in cupboard and sleep all day. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked curl up and sleep on the freshly laundered towels be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day, ears back wide eyed. Eat half my food and ask for more lie on your belly and purr when you are asleep but plays league of legends. Walk on car leaving trail of paw prints on hood and windshield knock over christmas tree i cry and cry and cry unless you pet me, and then maybe i cry just for fun and mrow or behind the couch, so sleep in the bathroom sink stare at ceiling light. Curl up and sleep on the freshly laundered towels under the bed. Refuse to leave cardboard box."
          />
        </div>

        <br />

        <Chart
          title="Statistikk3"
          stacking="true"
          dataName="Comments"
          dataName2="Scores"
          type="column" // pie, bar, column, line
          data={this.state.comments}
          data2={this.state.scores}
          xAxis={this.state.titles}
          yAxis={this.state.titles}
          handleSlide={this.handleSlide.bind(this)}
          handleClose={this.handleClose.bind(this)}
          selectedPanel={this.state.selectedPanel}
          datagrunnlag="Cereal boxes make for five star accommodation scream for no reason at 4 am lick butt, and chirp at birds find empty spot in cupboard and sleep all day stare at the wall, play with food and get confused by dust yet jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. Mice knock dish off table head butt cant eat out of my own dish run outside as soon as door open. When in doubt, wash white cat sleeps on a black shirt so ask for petting yet fall asleep on the washing machine. Ignore the squirrels, you'll never catch them anyway friends are not food for refuse to drink water except out of someone's glass, or curl into a furry donut and knock dish off table head butt cant eat out of my own dish. Scream at teh bath scratch the postman wake up lick paw wake up owner meow meow purr purr when being pet. My left donut is missing, as is my right decide to want nothing to do with my owner today, or intently stare at the same spot, but sleep on keyboard. Destroy the blinds lick butt, for refuse to drink water except out of someone's glass yet jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed lick the other cats and pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Roll over and sun my belly hunt by meowing loudly at 5am next to human slave food dispenser. Licks your face jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans yet claw drapes, meow to be let in or eat the fat cats food. Friends are not food. Then cats take over the world i am the best so cough hairball on conveniently placed pants or scamper, but refuse to leave cardboard box lie in the sink all day, meow for food, then when human fills food dish, take a few bites of food and continue meowing. Show belly scratch me there, elevator butt cats making all the muffins. Stretch slap owner's face at 5am until human fills food dish all of a sudden cat goes crazy. Bathe private parts with tongue then lick owner's face freak human out make funny noise mow mow mow mow mow mow success now attack human, dream about hunting birds or find something else more interesting, for hiss and stare at nothing then run suddenly away yet chase red laser dot. Hack up furballs. Pooping rainbow while flying in a toasted bread costume in space toy mouse squeak roll over. If it smells like fish eat as much as you wish howl on top of tall thing and woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now ask to go outside and ask to come inside and ask to go outside and ask to come inside woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now. Love to play with owner's hair tie cats go for world domination leave fur on owners clothes, stare out the window. Kitty loves pigs make muffins show belly for catch mouse and gave it as a present. Drink water out of the faucet purr when being pet so inspect anything brought into the house. Lay on arms while you're using the keyboard hide at bottom of staircase to trip human. Stare at ceiling stare at guinea pigs or scratch the box. Human is washing you why halp oh the horror flee scratch hiss bite see owner, run in terror, and relentlessly pursues moth or meow to be let in so sniff sniff. Find empty spot in cupboard and sleep all day. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked curl up and sleep on the freshly laundered towels be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day, ears back wide eyed. Eat half my food and ask for more lie on your belly and purr when you are asleep but plays league of legends. Walk on car leaving trail of paw prints on hood and windshield knock over christmas tree i cry and cry and cry unless you pet me, and then maybe i cry just for fun and mrow or behind the couch, so sleep in the bathroom sink stare at ceiling light. Curl up and sleep on the freshly laundered towels under the bed. Refuse to leave cardboard box."
        />

      </div>
    );
  }
}
