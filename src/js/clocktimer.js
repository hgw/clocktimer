export default class ClockTimer {

  static get EVERY_HOURS () {
    return [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
    ]
  }

  static get EVERY_AM () {
    return [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    ]
  }

  static get EVERY_PM () {
    return [
      12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
    ]
  }

  static get EVERY_MINUTES () {
    return [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
      30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
      50, 51, 52, 53, 54, 55, 56, 57, 58, 59
    ]
  }

  static get EVERY_SECONDS () {
    return [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
      30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
      50, 51, 52, 53, 54, 55, 56, 57, 58, 59
    ]
  }



  /**
   *
   * 24 時間のうち任意のタイミングでイベントを発火します。
   * どの時刻に発火させるかは配列で指定します。
   *
   * 以下のような指定で、秒針が 10, 20, 30, 40, 50 のときのみイベントを発火させます
   * new ClockTimer(ClockTimer.EVERY_HOURS, ClockTimer.EVERY_MINUTES, [0, 10, 20, 30, 40, 50], this.callback);
   *
   * @param hoursArray [0-24]
   * @param minutesArray [0-60]
   * @param secondsArray [0-60]
   * @param callback function
   */
  constructor (hoursArray, minutesArray, secondsArray, callback) {

    this._timeout = 0
    this._callback = callback

    this._hoursArray = hoursArray
    this._minutesArray = minutesArray
    this._secondsArray = secondsArray

    this._hitHours = -1
    this._hitMinutes = -1
    this._hitSeconds = -1

    this._timer()
  }

  /**
   *
   * @private
   */
  _timer () {

    this._timeout = setTimeout(() => {
      this._check()
    }, 1000 / 30)
  }

  /**
   *
   * @private
   */
  _stop () {
    clearTimeout(this._timeout)
  }

  /**
   *
   * @private
   */
  _check () {
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    if (
      this._hoursArray.indexOf(hours) >= 0 &&
      this._minutesArray.indexOf(minutes) >= 0 &&
      this._secondsArray.indexOf(seconds) >= 0 &&
      !(
        hours === this._hitHours &&
        minutes === this._hitMinutes &&
        seconds === this._hitSeconds
      )
    ) {
      this._hitHours = hours
      this._hitMinutes = minutes
      this._hitSeconds = seconds
      this._currentTime = time
      this._callback()
    }

    this._timer()
  }

  get CurrentTime(){
    return this._currentTime;
  }

}

