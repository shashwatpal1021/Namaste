// there are n number of stairs and you can climb either 1 step or 2 step at a time.write a code to calculate number of ways we can climb n stairs


function climbStairs(n) {
  if (n <= 1) {
    return 1
  }
  let first = 1
  let sec = 1
  for (let i = 2; i <= n; i++) {
    let current = first + sec; 
    first = sec 
    sec = current 
  }
  return sec
}

const res = climbStairs(10)
console.log(res)

