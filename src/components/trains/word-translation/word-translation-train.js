import React, { Component } from 'react';
import fns from 'date-fns';
import './style.css';

class WordTranslationTrain extends Component {
  state = {
    seconds: 10,
    passed: 0,
    total: 10
  };

  getPassedPercent() {
    return (this.state.passed / this.state.total) * 100;
  }

  formatTime(seconds) {
    const time = fns.addSeconds(new Date(0), seconds);
    return fns.format(time, "mm:ss");
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState(({ seconds, passed }) => ({
      seconds: seconds - 1,
      passed: passed + 1
    })), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const time = this.formatTime(this.state.seconds);
    const percent = this.getPassedPercent();

    return (
      <div className="word-translation-train">
        <div className="training-title">
          Выбери правильный перевод
          <div
            class="training-title__progress"
            style={{ transform: `scaleX(${percent / 100})` }}
          />
        </div>
        <div className="word-translation-train__timer-layout training-timer">
          { time }
        </div>
        <div className="training-target">
          <div className="training-target__title">
            Unbelievable
          </div>
          <div className="training-target__picture">
            <img
              src="http://2.bp.blogspot.com/-d7RvvJz2--8/T0tV9Sb4S9I/AAAAAAAACd0/IeB7Aaaqe5Q/s1600/Unbelievable+Wallpaper+2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="training-options">
          <div className="training-options__item">
            Первый
          </div>
          <div className="training-options__item">
            Вариант ответа 2
          </div>
          <div className="training-options__item">
            Можно выбрать это
          </div>
          <div className="training-options__item">
            Одиннадцатиклассница
          </div>
        </div>
      </div>
    );
  }
}

export default WordTranslationTrain;
