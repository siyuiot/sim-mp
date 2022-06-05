const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function formatPrice(value) {
  if (isNaN(value)) {
    return "";
  }
  return (value / 100).toFixed(2);
}

function formatFlow(flow){//bite转GB
  return (flow/1024/1024).toFixed(2)
}
module.exports = {
  formatTime,
  formatPrice,
  formatFlow
}
