<template>
  <div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
div {
  height: 100px;
  display: flex;
  justify-content: center;
  margin: 100px auto;
}

div span {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-right: 10px;
}

div span:nth-child(1) {
  background-color: pink;
  animation: love1 2s 0s infinite;
}

div span:nth-child(2) {
  background-color: darkturquoise;
  animation: love2 2s 0.1s infinite;
}

div span:nth-child(3) {
  background-color: darksalmon;
  animation: love3 2s 0.2s infinite;
}

div span:nth-child(4) {
  background-color: deeppink;
  animation: love4 2s 0.3s infinite;
}

div span:nth-child(5) {
  background-color: yellow;
  animation: love5 2s 0.4s infinite;
}

div span:nth-child(6) {
  background-color: #ff1493;
  animation: love4 2s 0.5s infinite;
}

div span:nth-child(7) {
  background-color: #e9967a;
  animation: love3 2s 0.6s infinite;
}

div span:nth-child(8) {
  background-color: #00ced1;
  animation: love2 2s 0.7s infinite;
}

div span:nth-child(9) {
  background-color: #ffc0cb;
  animation: love1 2s 0.8s infinite;
}

@keyframes love1 {
  30%,
  50% {
    height: 30px;
    transform: translateY(-15px);
  }

  70%,
  100% {
    height: 0;
    transform: translateY(0px);
  }
}

@keyframes love2 {
  30%,
  50% {
    height: 62px;
    transform: translateY(-30px);
  }

  70%,
  100% {
    height: 0;
    transform: translateY(0px);
  }
}

@keyframes love3 {
  30%,
  50% {
    height: 80px;
    transform: translateY(-37px);
  }

  70%,
  100% {
    height: 0;
    transform: translateY(0px);
  }
}

@keyframes love4 {
  30%,
  50% {
    height: 90px;
    transform: translateY(-30px);
  }

  70%,
  100% {
    height: 0;
    transform: translateY(0px);
  }
}

@keyframes love5 {
  30%,
  50% {
    height: 100px;
    transform: translateY(-22px);
  }

  70%,
  100% {
    height: 0;
    transform: translateY(0px);
  }
}
</style>
