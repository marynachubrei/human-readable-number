module.exports = function toReadable (number) {
  
    let a = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
    let b = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    let c = ['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  let num = number.toString().split('')
  let l = num.length
  if(l== 1){
      return a[number]
    }else if(l==2){
        if(l == 2&&num[0]==1){
            return b[num[1]]
        }else if(l == 2&&num[1]==0){
            return c[num[0]]
        }else{
            return c[num[0]]+' '+ a[num[1]]}
    }else if(l==3){
        if(l== 3&&num[1]==1){
                return a[num[0]]+' '+'hundred'+' '+ b[num[2]]
        }else if(l== 3&&num[1]==0&&num[2]==0){
            return a[num[0]]+' hundred'
        }else if(l== 3&&num[2]==0){
            return a[num[0]]+' '+'hundred'+' '+c[num[1]]
        }else if(l== 3&&num[1]==0){
            return a[num[0]]+' '+'hundred'+' '+a[num[2]]
        }else{
            return a[num[0]]+' '+'hundred'+' '+c[num[1]]+' '+ a[num[2]]}};
  
 
}
