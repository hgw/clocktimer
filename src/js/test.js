import ClockTimer from './clocktimer'

export default class Test {

  constructor () {
    new ClockTimer(ClockTimer.EVERY_HOURS, ClockTimer.EVERY_MINUTES, [0, 10, 20, 30, 40, 50], this.onHit)
  }

  onHit(){
    console.log('Timer Called')
  }


}


new Test();
