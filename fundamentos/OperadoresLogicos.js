// V e V -> v
//V e V -> f
// f e ? -> f

// op1 e op2 e op3 e op4 => v 

/* v ou ? -> v
   f ou v -> v
   f ou f -> f

   v xor v -> f
   v xor f -> v
   f xor v -> v
   f xor f -> f

   !v -> f
   !f -> v*/
   function compras ( trabalho1, trabalho2){
       const comprarsorvete = trabalho1 || trabalho2
       const comprartv50 = trabalho1 && trabalho2
       //const comprartv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
       const comprartv32 = trabalho1 != trabalho2
       const mantersaudavel = !comprarsorvete // operador unario

       return{comprarsorvete, comprartv50, comprartv32, mantersaudavel}
   }

   console.log(compras(true, true))
   console.log(compras(true, false))
   console.log(compras(false, true))
   console.log(compras(false, false))