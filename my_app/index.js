let s = "shashwat"

function reverseStr(s) {
  if (s.length <= 1) {
     return s
  }
  return reverseStr(s.slice(1))+s[0]
}
 
const str = reverseStr(s)
 
 console.log(str)