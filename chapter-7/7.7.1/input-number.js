<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>数字输入框组件</title>
</head>

<body>
  <div id="app">
    <input-number
      v-model="value"
      :step="10"
      :max="100"
      :min="0">
    </input-number>
  </div>

</body>

<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script src="input-number.js"></script>
<script src="index.js"></script>
</html>
