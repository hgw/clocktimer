# ClockTimer

これはローカル時計を基準にした Timer クラスです。
通常の Timer は Timer を start した時点からの相対的な経過時間を基準としますが、このクラスでは local の端末の時計を基準にイベントを発火します。
どの時刻にイベントを発火させるかは配列で指定することができます。

## 実行例

### 10秒ごとにイベント `this.callback()` を発火したい

```
new ClockTimer(ClockTimer.EVERY_HOURS, ClockTimer.EVERY_MINUTES, [0, 10, 20, 30, 40, 50], this.callback);
```

### 午前中は 10 分ごとににイベント `this.callback()` を発火したい

```
new ClockTimer(ClockTimer.EVERY_AM, [0, 10, 20, 30, 40, 50], [0], this.callback);
```

### 午前 1 時 23 分 45 秒ににイベント `this.callback()` を発火したい

```
new ClockTimer([1], [23], [45], this.callback);
```


### 5時台と17時台は毎秒イベント `this.callback()` を発火したい

```
new ClockTimer([5, 17], ClockTimer.EVERY_MINUTES, ClockTimer.EVERY_SECONDS, this.callback);
```
